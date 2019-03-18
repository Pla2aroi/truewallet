const axios = require('axios')
const crypto = require('crypto')

var exports = (module.exports = {})

exports.get = {
  token: async function(email, pass) {
    try {
      let out = await axios({
        method: 'POST',
        url: 'https://mobile-api-gateway.truemoney.com/mobile-api-gateway/api/v1/signin',
        headers: {
          Host: 'mobile-api-gateway.truemoney.com',
          'Content-Type': 'application/json',
        },
        data: {
          username: email,
          password: crypto
            .createHash('sha1')
            .update(email + pass)
            .digest('hex'),
          type: 'email',
        },
      })

      return out.data.data.accessToken
    } catch (err) {
      return err.response.data
    }
  },
  balance: async function(token) {
    try {
      let out = await axios({
        method: 'GET',
        url: `https://mobile-api-gateway.truemoney.com/mobile-api-gateway/api/v1/profile/balance/${token}`,
        headers: {
          Host: 'mobile-api-gateway.truemoney.com',
        },
      })

      return out.data.data
    } catch (err) {
      return err.response.data
    }
  },
  profile: async function(token) {
    try {
      let out = await axios({
        method: 'GET',
        url: `https://mobile-api-gateway.truemoney.com/mobile-api-gateway/api/v1/profile/${token}`,
        headers: {
          Host: 'mobile-api-gateway.truemoney.com',
        },
      })

      return out.data.data
    } catch (err) {
      return err.response.data
    }
  },
}

exports.fetch = {
  activity: async function(token, start, end, limit = 25) {
    try {
      let out = await axios({
        method: 'GET',
        url: `https://mobile-api-gateway.truemoney.com/mobile-api-gateway/user-profile-composite/v1/users/transactions/history?start_date=${start}&end_date=${end}&limit=${limit}`,
        headers: {
          Host: 'mobile-api-gateway.truemoney.com',
          Authorization: token,
        },
      })

      return out.data.data.activities
    } catch (err) {
      return err.response.data
    }
  },
  txDetail: async function(token, id) {
    try {
      let out = await axios({
        method: 'GET',
        url: `https://mobile-api-gateway.truemoney.com/mobile-api-gateway/user-profile-composite/v1/users/transactions/history/detail/${id}`,
        headers: {
          Host: 'mobile-api-gateway.truemoney.com',
          Authorization: token,
        },
      })

      return out.data.data
    } catch (err) {
      return err.response.data
    }
  },
}

exports.cashcard = {
  topup: async function(token, cashcard) {
    try {
      const time = Date.now()
      let out = await axios({
        method: 'POST',
        url: `https://mobile-api-gateway.truemoney.com/mobile-api-gateway/api/v1/topup/mobile/${time}/${token}/cashcard/${cashcard}`,
        headers: {
          Host: 'mobile-api-gateway.truemoney.com',
        },
      })

      return out.data.data
    } catch (err) {
      return err.response.data
    }
  },
  buy: {
    request: async function(token, mobile, amount) {
      try {
        let out = await axios({
          method: 'POST',
          url: `https://mobile-api-gateway.truemoney.com/mobile-api-gateway/api/v1/buy/e-pin/draft/verifyAndCreate/${token}`,
          headers: {
            Host: 'mobile-api-gateway.truemoney.com',
            'Content-Type': 'application/json',
          },
          data: {
            recipientMobileNumber: mobile,
            amount: amount,
          },
        })

        return out.data.data
      } catch (err) {
        return err.response.data
      }
    },
    confirm: async function(token, draft, mobile, otp, otpRef) {
      try {
        const time = Date.now()
        let out = await axios({
          method: 'PUT',
          url: `https://mobile-api-gateway.truemoney.com/mobile-api-gateway/api/v1/buy/e-pin/confirm/${draft}/${token}`,
          headers: {
            Host: 'mobile-api-gateway.truemoney.com',
            'Content-Type': 'application/json',
          },
          data: {
            mobileNumber: mobile,
            otpString: otp,
            otpRefCode: otpRef,
            timestamp: time,
          },
        })

        return out.data.data
      } catch (err) {
        return err.response.data
      }
    },
  },
}

exports.logout = async function(token) {
  try {
    let out = await axios({
      method: 'POST',
      url: `https://mobile-api-gateway.truemoney.com/mobile-api-gateway/api/v1/signout/${token}`,
      headers: {
        Host: 'mobile-api-gateway.truemoney.com',
      },
    })

    return out.data.data
  } catch (err) {
    return err.response.data
  }
}
