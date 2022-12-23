import apiClient from 'service/axios'

const axios = new apiClient()

const service = {
  getRoles() {
    return axios.roles()
  },

  getUserRoles(userId: string) {
    return axios.userRoles(userId)
  },
}

export default service
