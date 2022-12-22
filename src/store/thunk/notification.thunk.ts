import {createAsyncThunk} from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid";

import {RegisterDto, RegisterResponse} from "service/types";
import {IError} from "utils/interface";
import apiClient from "service/axios";

const axios = new apiClient();

const notifyError = {
    error: {text: "Error"},
    usernameNotExistsInMojang: {text: "Имя пользователя не существует в Mojang"},
    tooManyRegRequests: {text: "Слишком много запросов"},
    userWithSameUsernameOrEmailExists: {text: "Пользователь с таким никнеймом или почтой уже существует"},
    form: {text: "Заполните корректно поля"}
}

export const fetchRegistrationAccount = createAsyncThunk(
    "@@notification/registrationAccount",
    async ({mail, password, username}: RegisterDto): Promise<IError | void> => {
        const res: RegisterResponse = await axios.register({mail, password, username});
        const id = uuidv4();

        if (res.code !== "ok") {
            return {id, ...notifyError[res.code], time: 5000}
        }
    }
);