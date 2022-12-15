import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { env } from "utils/constants";

const url = env.server_url;

function composeUrl(uri: string): string {
  return url + (uri.startsWith("/") ? uri : "/" + uri);
}

export class HttpClient {
  async get(uri: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    const accessToken = localStorage.getItem("accessToken");
    const header = accessToken
      ? { Authorization: "Bearer " + accessToken }
      : {};

    try {
      return await axios.get(composeUrl(uri), {
        ...config,
        headers: {
          ...config?.headers,
          ...header,
        },
      });
    } catch (e) {
      if (e instanceof axios.AxiosError) {
        if (e.response?.status === 401) {
          localStorage.removeItem("accessToken");
          await this.refreshToken();
          if (localStorage.getItem("accessToken"))
            return await this.get(uri, config);
        }
        throw e;
      }
      throw e;
    }
  }

  async post(
    uri: string,
    body: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    const accessToken = localStorage.getItem("accessToken");
    const header = accessToken
      ? { Authorization: "Bearer " + accessToken }
      : {};

    try {
      return await axios.post(composeUrl(uri), body, {
        ...config,
        headers: {
          ...config?.headers,
          ...header,
        },
      });
    } catch (e) {
      if (e instanceof axios.AxiosError) {
        if (e.response?.status === 401) {
          localStorage.removeItem("accessToken");
          await this.refreshToken();
          if (localStorage.getItem("accessToken"))
            return await this.get(uri, config);
        }
        throw e;
      }
      throw e;
    }
  }

  async put(
    uri: string,
    data: any,
    config: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    const accessToken = localStorage.getItem("accessToken");
    const header = accessToken
      ? { Authorization: "Bearer " + accessToken }
      : {};

    try {
      return await axios.put(composeUrl(uri), data, {
        ...config,
        headers: {
          ...config?.headers,
          ...header,
        },
      });
    } catch (e) {
      if (e instanceof axios.AxiosError) {
        if (e.response?.status === 401) {
          localStorage.removeItem("accessToken");
          await this.refreshToken();
          if (localStorage.getItem("accessToken"))
            return await this.get(uri, config);
        }
        throw e;
      }
      throw e;
    }
  }

  async delete(
    uri: string,
    config: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    const accessToken = localStorage.getItem("accessToken");
    const header = accessToken
      ? { Authorization: "Bearer " + accessToken }
      : {};

    try {
      return await axios.delete(composeUrl(uri), {
        ...config,
        headers: {
          ...config?.headers,
          ...header,
        },
      });
    } catch (e) {
      if (e instanceof axios.AxiosError) {
        if (e.response?.status === 401) {
          localStorage.removeItem("accessToken");
          await this.refreshToken();
          if (localStorage.getItem("accessToken"))
            return await this.get(uri, config);
        }
        throw e;
      }
      throw e;
    }
  }

  async refreshToken() {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) return;

    try {
      const response = await axios.post(composeUrl("/auth/refresh"), {
        refreshToken,
      });

      localStorage.setItem("refreshToken", response.data.refreshToken);
      localStorage.setItem("accessToken", response.data.accessToken);
    } catch (e) {
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("accessToken");
    }
  }

  async login({ password, login }: LoginDto): Promise<LoginReponse> {
    try {
      const res = await this.post("/auth/", { password, login });
      const { data } = res;

      const { refreshToken, accessToken } = data;
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("accessToken", accessToken);

      return {
        code: "ok",
        ...data,
      };
    } catch (e) {
      if (e instanceof AxiosError) {
        const message = e.response?.data?.message;
        if (e.response?.status === 400 && typeof message == "object")
          return { code: "form", codes: message };
      }
      return { code: "error" };
    }
  }

  async auth(): Promise<AuthReponse> {
    try {
      const res = await this.get("/users/me");
      return {
        code: "ok",
        user: res.data,
      };
    } catch (e) {
      if (e instanceof AxiosError) {
        if (e.response?.status === 403 && localStorage.getItem("accessToken")) {
          await this.refreshToken();
          return await this.auth();
        }
      }

      return {
        code: "error",
      };
    }
  }

  /**
   * Запрос на регистрацию. Код для активации придёт на почту
   */
  async register({
    mail,
    password,
    username,
  }: RegisterDto): Promise<RegisterResponse> {
    try {
      await this.post("/auth/reg", { password, mail, username });
      return { code: "ok" };
    } catch (e) {
      if (e instanceof AxiosError) {
        if (e.response?.status === 400) {
          const data = e.response?.data;
          if (data?.message) {
            return {
              code: "form",
              codes: data.message,
            };
          }
        }
      }
      return {
        code: "error",
      };
    }
  }

  /**
   * Отправка кода регистрации. Если всё прошло успешно, то возращает токены и юзера (сохранять их не нужно)
   */
  async activateRegCode(code: string): Promise<ActivateRegCodeResponse> {
    try {
      const res = await this.get(`/auth/activate/reg/${code}`);
      const { accessToken, refreshToken, user } = res.data;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      return {
        code: "ok",
        user,
        accessToken,
        refreshToken,
      };
    } catch (e) {
      if (e instanceof AxiosError) {
        if (e.response?.status === 400) {
          return { code: e.response.data.code };
        }
      }

      return { code: "error" };
    }
  }

  /**
   * Запрос на смену пароля. Код для активации придёт на почту
   */
  async changePass({
    mail,
    newPass,
  }: ChangePassDto): Promise<ChangePassResponse> {
    try {
      await this.post("/auth/changePass", { mail, newPass });
      return { code: "ok" };
    } catch (e) {
      if (e instanceof AxiosError && e.response?.status === 400)
        return { code: e.response.data.code };
      return { code: "error" };
    }
  }

  /**
   * Отправка кода смены пароля. Если всё прошло успешно, то возращает токены и юзера (сохранять их не нужно)
   */
  async activateChangePassCode(
    code: string
  ): Promise<ActivateChangePassReponse> {
    try {
      const res = await this.get(`/auth/activate/changePass/${code}`);
      const { accessToken, refreshToken, user } = res.data;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      return {
        code: "ok",
        user,
        accessToken,
        refreshToken,
      };
    } catch (e) {
      if (e instanceof AxiosError && e.response?.status === 400)
        return { code: e.response.data.code };
      return { code: "error" };
    }
  }

  async getWhiteList({
    server,
  }: GetWhiteListDto): Promise<GetWhiteListResponse> {
    try {
      const res = await this.get(`/pass/${server}/whiteList`);
      return {
        code: "ok",
        ...res.data,
      };
    } catch (e) {
      if (e instanceof AxiosError && e.response?.status === 400) {
        return { code: e.response.data.code };
      }
      return { code: "error" };
    }
  }

  async getWhiteListUserStatus({
    server,
    username,
  }: GetWhiteListUserStatusDto): Promise<GetWhiteListUserStatusResponse> {
    try {
      await this.get(`/pass/${server}/whiteList/${username}`);
      return { code: "ok", status: "active" };
    } catch (e) {
      if (e instanceof AxiosError && e.response?.status === 400) {
        return e.response.data.code
          ? { code: e.response.data.code }
          : { code: "ok", status: "notActive" };
      }
      return { code: "error" };
    }
  }

  async getHardcoreStat(username: string): Promise<GetHardcoreStatResponse> {
    try {
      const res = await this.get(`/hardcore/${username}`);
      return {
        code: "ok",
        ...res.data,
      };
    } catch (e) {
      if (e instanceof AxiosError && e.response?.status === 404) {
        return { code: "notFound" };
      }
      return { code: "error" };
    }
  }

  /**
   * Возращает url для скачивания скина игрока
   */
  getUserSkinUrl(userId: string): string {
    return composeUrl(`/users/${userId}/skin`);
  }

  /**
   * Возращает url для скачивания плаща игрока
   */
  getUserCapeUrl(userId: string): string {
    return composeUrl(`/users/${userId}/cape`);
  }

  async getUserById(userId: string): Promise<GetUserByIdResponse> {
    try {
      const res = await this.get(`/users/${userId}`);
      const { id, username, skin, cape } = res.data;
      return {
        code: "ok",
        user: {
          id,
          username,
          skin,
          cape,
        },
      };
    } catch (e) {
      return { code: "error" };
    }
  }
}

export type ActivateRegCodeResponse =
  | {
      code: "ok";
      user: {
        id: string;
        username: string;
        mail: string;
        UUID: string;
      };
      accessToken: string;
      refreshToken: string;
    }
  | {
      code: "error";
    }
  | {
      code: "userWithSameUsernameOrEmailExists";
    }
  | {
      code: "codeExpired";
    };

export type AuthReponse =
  | {
      code: "ok";
      user: {
        id: string;
        mail: string;
        username: string;
        UUID: string;
      };
    }
  | {
      code: "error";
    };

export interface LoginDto {
  login: string;
  password: string;
}

export type LoginFormFieldErrorCode = "login.empty";

export type LoginReponse =
  | {
      code: "ok";
      user: {
        id: string;
        username: string;
        mail: string;
        UUID: string;
      };
      refreshToken: string;
      accessToken: string;
    }
  | {
      code: "incorrectPassword";
    }
  | {
      code: "form";
      codes: LoginFormFieldErrorCode[];
    }
  | {
      code: "userWithSameUsernameOrEmailNotExists";
    }
  | {
      code: "error";
    };

export interface RegisterDto {
  mail: string;
  username: string;
  password: string;
}

export type RegisterFormFieldErrorCode =
  | "mail.notMail"
  | "username.empty"
  | "usename.incorrect"
  | "password.tooShort"
  | "password.incorrect";

export type RegisterResponse =
  | {
      code: "ok";
    }
  | {
      code: "form";
      codes: RegisterFormFieldErrorCode[];
    }
  | {
      code: "error";
    }
  | {
      code: "tooManyRegRequests";
    }
  | {
      code: "userWithSameUsernameOrEmailExists";
    }
  | {
      code: "usernameNotExistsInMojang";
    };

export type ChangePassDto = { mail: string; newPass: string };
export type ChangePassResponse =
  | {
      code: "ok";
    }
  | {
      code: "error";
    }
  | {
      code: "userWithSameEmailNotExists";
    }
  | {
      code: "tooManyChangePassRequests";
    };

export type ActivateChangePassReponse =
  | {
      code: "error";
    }
  | {
      code: "ok";
      user: {
        id: string;
        username: string;
        mail: string;
        UUID: string;
      };
      refreshToken: string;
      accessToken: string;
    }
  | {
      code: "tokenExpired";
    }
  | {
      code: "userNotFound";
    };

export type GetWhiteListDto = { server: string };
export type GetWhiteListResponse =
  | {
      code: "error";
    }
  | {
      code: "ok";
      users: {
        UUID: string;
        username: string;
      }[];
    }
  | {
      code: "serverNotFound";
    };

export type GetWhiteListUserStatusDto = { server: string; username: string };
export type GetWhiteListUserStatusResponse =
  | {
      code: "error";
    }
  | {
      code: "ok";
      status: "active" | "notActive";
    }
  | {
      code: "serverNotFound";
    };

export type GetHardcoreStatResponse =
  | {
      code: "error";
    }
  | {
      code: "ok";
      deaths: {
        at: number;
        reason?: string;
      }[];
      loginTime: number;
      deathTime: number;
      respawnTime: number;
    }
  | {
      code: "notFound";
    };

export type GetUserByIdResponse =
  | {
      code: "ok";
      user: {
        id: string;
        username: string;
        skin?: string;
        cape?: string;
      };
    }
  | {
      code: "error";
    }
  | {
      code: "notFound";
    };
