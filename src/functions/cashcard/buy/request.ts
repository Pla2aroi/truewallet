import { apiInstance } from '../../../utils/apiInstance'

export const request = async (token: string, mobile: string, amount: string) => {
  try {
    const payload = {
      recipientMobileNumber: mobile,
      amount: amount,
    }

    const out = await apiInstance.post(`/mobile-api-gateway/api/v1/buy/e-pin/draft/verifyAndCreate/${token}`, payload)

    return out.data.data
  } catch (e) {
    throw e.response.data
  }
}
