import { apiInstance } from '../../utils/apiInstance'

export const balance = async (token: string) => {
  try {
    const out = await apiInstance.get(`/mobile-api-gateway/api/v1/profile/balance/${token}`)

    return out.data.data
  } catch (e) {
    throw e.response.data
  }
}
