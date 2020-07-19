import axios from 'axios'

export const apiInstance = axios.create({
  baseURL: 'https://mobile-api-gateway.truemoney.com/',
  headers: {
    Host: 'mobile-api-gateway.truemoney.com',
  },
})
