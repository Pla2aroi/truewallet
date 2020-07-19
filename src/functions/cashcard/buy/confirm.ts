import { apiInstance } from '../../../utils/apiInstance'

export const confirm = async (token: string, draft: string, mobile: string, otp: string, otpRef: string) => {
  try {
    const time = Date.now()
    const payload = {
      mobileNumber: mobile,
      otpString: otp,
      otpRefCode: otpRef,
      timestamp: time,
    }

    const out = await apiInstance.post(`/mobile-api-gateway/api/v1/buy/e-pin/confirm/${draft}/${token}`, payload)

    return out.data.data
  } catch (e) {
    throw e.response.data
  }
}
