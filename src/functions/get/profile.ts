import { apiInstance } from '../../utils/apiInstance'

export const profile = async (token: string) => {
  try {
    const out = await apiInstance.get(`/mobile-api-gateway/api/v1/profile/${token}`)

    return out.data.data
  } catch (e) {
    throw e.response.data
  }
}
