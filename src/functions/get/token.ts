import crypto from 'crypto'
import { apiInstance } from '../../utils/apiInstance'

interface Response {
  data: {
    accessToken: string
  }
}

export const token = async (email: string, pass: string): Promise<string> => {
  try {
    const payload = {
      username: email,
      password: crypto
        .createHash('sha1')
        .update(email + pass)
        .digest('hex'),
      type: 'email',
    }

    const out = await apiInstance.post<Response>('/mobile-api-gateway/api/v1/signin', payload)
    return out.data.data.accessToken
  } catch (e) {
    throw e.response.data
  }
}
