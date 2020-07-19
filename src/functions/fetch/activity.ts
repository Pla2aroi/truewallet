import { apiInstance } from '../../utils/apiInstance'

export const activity = async (token: string, start: string, end: string, limit = 25) => {
  try {
    const out = await apiInstance.get(`/mobile-api-gateway/user-profile-composite/v1/users/transactions/history?start_date=${start}&end_date=${end}&limit=${limit}`, {
      headers: {
        Authorization: token,
      },
    })

    return out.data.data.activities
  } catch (e) {
    throw e.response.data
  }
}
