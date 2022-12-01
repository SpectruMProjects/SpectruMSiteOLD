import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { env } from '../env/env'
import { AuthReponse } from './dto/auth'
import { LoginDto, LoginReponse } from './dto/login'
import { RegisterDto, RegisterResponse } from './dto/register'

const url = env.server_url

function composeUrl(uri: string): string {
  return url + (uri.startsWith('/') ? uri : '/' + uri)
}

export class HttpClient {
  async get(uri: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    const accessToken = localStorage.getItem('accessToken')
    const header = accessToken ? {'Authorization': 'Bearer ' + accessToken} : {}
    
    try {
      return await axios.get(
        composeUrl(uri), 
        {
          ...config, 
          headers: {
            ...config?.headers,
            ...header
          }
        }
      )
    } catch (e) {
      if (e instanceof axios.AxiosError) {
        if (e.status === 401) {
          localStorage.removeItem('accessToken')
          await this.refreshToken()
          if (accessToken) return await this.get(uri, config)
        }
        throw e
      }
      throw e
    }
  }

  async post(uri: string, body: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    const accessToken = localStorage.getItem('accessToken')
    const header = accessToken ? {'Authorization': 'Bearer ' + accessToken} : {}
    
    try {
      return await axios.post(
        composeUrl(uri), 
        body,
        {
          ...config, 
          headers: {
            ...config?.headers,
            ...header
          }
        }
      )
    } catch (e) {
      if (e instanceof axios.AxiosError) {
        if (e.status === 401) {
          localStorage.removeItem('accessToken')
          await this.refreshToken()
          if (accessToken) return await this.get(uri, config)
        }
        throw e
      }
      throw e
    }
  }

  async put(uri: string, data: any, config: AxiosRequestConfig): Promise<AxiosResponse> {
    const accessToken = localStorage.getItem('accessToken')
    const header = accessToken ? {'Authorization': 'Bearer ' + accessToken} : {}
    
    try {
      return await axios.put(
        composeUrl(uri), 
        data,
        {
          ...config, 
          headers: {
            ...config?.headers,
            ...header
          }
        }
      )
    } catch (e) {
      if (e instanceof axios.AxiosError) {
        if (e.status === 401) {
          localStorage.removeItem('accessToken')
          await this.refreshToken()
          if (accessToken) return await this.get(uri, config)
        }
        throw e
      }
      throw e
    }
  }

  async delete(uri: string, config: AxiosRequestConfig): Promise<AxiosResponse> {
    const accessToken = localStorage.getItem('accessToken')
    const header = accessToken ? {'Authorization': 'Bearer ' + accessToken} : {}
    
    try {
      return await axios.delete(
        composeUrl(uri), 
        {
          ...config, 
          headers: {
            ...config?.headers,
            ...header
          }
        }
      )
    } catch (e) {
      if (e instanceof axios.AxiosError) {
        if (e.status === 401) {
          localStorage.removeItem('accessToken')
          await this.refreshToken()
          if (accessToken) return await this.get(uri, config)
        }
        throw e
      }
      throw e
    }
  }

  async refreshToken() {
    const refreshToken = localStorage.getItem('refreshToken')
    if (!refreshToken) return

    try {
      const response = await axios.post(composeUrl('/auth/refresh'), {refreshToken})
      
      localStorage.setItem('refreshToken', response.data.refreshToken)
      localStorage.setItem('accessToken', response.data.accessToken)
    } catch (e) {
      localStorage.removeItem('refreshToken')
      localStorage.removeItem('accessToken')
    }
  }

  async login({password, login}: LoginDto): Promise<LoginReponse> {
    try {
      const res = await this.post('/auth/', {password, login})
      const { data } = res
    
      const {refreshToken, accessToken} = data
      localStorage.setItem('refreshToken', refreshToken)
      localStorage.setItem('accessToken', accessToken)

      return {
        code: 'ok',
        ...data
      }
    } catch (e) {
      if (e instanceof AxiosError) {
        const message = e.response?.data?.message
        if (e.status === 400 && typeof message == 'object') 
          return { code: 'form', codes: message };
      }
      return {code: 'error'}
    }
  }

  async auth(): Promise<AuthReponse> {
    try {
      const res = await this.get('/users/me')
      return {
        code: 'ok',
        user: res.data
      }
    } catch (e) {
      if (e instanceof AxiosError) {
        if (e.status === 401 && localStorage.getItem('accessToken')) {
          await this.refreshToken()
          return await this.auth()
        }
      }

      return {
        code: 'error'
      }
    }
  }

  async register({mail, password, username}: RegisterDto): Promise<RegisterResponse> {
    try {
      await this.post('/auth/reg', {password, mail, username})
      return {code: 'ok'}
    } catch (e) {
      if (e instanceof AxiosError) {
        if (e.status === 400) {
          const data = e.response?.data
          if (data?.message) {
            return {
              code: 'form',
              codes: data.message
            }
          }
        }
      }
      return {
        code: 'error'
      }
    }
  }
}