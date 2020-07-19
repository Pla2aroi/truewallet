import { apiInstance } from '../utils/apiInstance'

export const logout = async (token: string) => {
  try {
    const out = await apiInstance.post(`/mobile-api-gateway/api/v1/signout/${token}`)

    return out.data.data
  } catch (e) {
    throw e.response.data
  }
}
