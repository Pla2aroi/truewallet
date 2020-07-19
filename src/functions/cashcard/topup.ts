import { apiInstance } from '../../utils/apiInstance'

export const topup = async (token: string, cashcard: string) => {
  try {
    const time = Date.now()
    const out = await apiInstance.post(`/mobile-api-gateway/api/v1/topup/mobile/${time}/${token}/cashcard/${cashcard}`)

    return out.data.data
  } catch (e) {
    throw e.response.data
  }
}
