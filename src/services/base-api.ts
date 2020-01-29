import env from '../constants/env'

class BaseApi {
  get = <T>(endpoint: string): Promise<T> => {
    return fetch(`${env.baseApiUrl}${endpoint}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json() as Promise<T>
      })
      .then(data => {
        return data
      })
  }

  post = <T>(endpoint: string, body: string): Promise<T> => {
    return fetch(`${env.baseApiUrl}${endpoint}`, {
      method: 'POST',
      body,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json() as Promise<T>
      })
      .then(data => {
        return data
      })
  }

  delete = <T>(endpoint: string): Promise<T> => {
    return fetch(`${env.baseApiUrl}${endpoint}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json() as Promise<T>
      })
      .then(data => {
        return data
      })
  }
}

export default new BaseApi()
