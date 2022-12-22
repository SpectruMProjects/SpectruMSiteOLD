import api from "service/axios"

const service = {
  getRoles() {
    return api.roles()
  },

  getUserRoles(userId: string) {
    return api.userRoles(userId)
  }
}

export default service