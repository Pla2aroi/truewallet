import { apiInstance } from '../../utils/apiInstance'

export const txDetail = async (token: string, id: string) => {
  try {
    const out = await apiInstance.get(`/mobile-api-gateway/user-profile-composite/v1/users/transactions/history/detail/${id}`, {
      headers: {
        Authorization: token,
      },
    })

    return out.data.data
  } catch (e) {
    throw e.response.data
  }
}
