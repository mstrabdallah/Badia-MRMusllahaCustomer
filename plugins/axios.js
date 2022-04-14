export default function ({ $axios, app }, inject) {
  // Create a custom axios instance
  const axios = $axios.create({
    headers: {
      common: {
        'Accept': "application/json",
        'Content-Type': 'multipart/form-data',
        'token':app.$cookies.get('token'),
        // 'session-id':store.state.auth.sessionId
      }
    }
  })

   axios.setBaseURL('https://customer-api.mr-mussllaha.tecbadia.com/')
  // axios.setBaseURL('http://192.168.88.225:81')
  inject('axios', axios)
}
