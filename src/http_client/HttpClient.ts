import axios, { AxiosRequestConfig } from 'axios'
import { env } from '../env/env'

const url = env.server_url

function composeUrl(uri: string): string {
  return url + (uri.startsWith('/') ? uri : '/' + uri)
}

export class HttpClient {
  async get(uri: string, config?: AxiosRequestConfig): Promise<unknown> {
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
        if (e.status === 401) {localStorage.removeItem('accessToken')}
        await this.refreshToken()

        if (accessToken) {
          return await this.get(uri, config)
        }
      }

      throw e
    }
  }

  async post(uri: string, body: any, config?: AxiosRequestConfig): Promise<unknown> {
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
        if (e.status === 401) {localStorage.removeItem('accessToken')}
        await this.refreshToken()

        if (accessToken) {
          return await this.post(uri, body, config)
        }
      }

      throw e
    }
  }

  async put(uri: string, data: any, config: AxiosRequestConfig): Promise<unknown> {
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
        if (e.status === 401) {localStorage.removeItem('accessToken')}
        await this.refreshToken()

        if (accessToken) {
          return await this.put(uri, data, config)
        }
      }

      throw e
    }
  }

  async delete(uri: string, config: AxiosRequestConfig): Promise<unknown> {
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
        if (e.status === 401) {localStorage.removeItem('accessToken')}
        await this.refreshToken()

        if (accessToken) {
          return await this.delete(uri, config)
        }
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
}