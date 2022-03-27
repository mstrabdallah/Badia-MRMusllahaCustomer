export default function ({ $axios, app, store }, inject) {
  // Create a custom axios instance
  const axios = $axios.create({
    headers: {
      common: {
        'Accept': "application/json",
        'Content-Type': 'multipart/form-data',

        // 'device':store.state.auth.device,
        // 'session-id':store.state.auth.sessionId
      }
    }
  })

  // Set baseURL to something different
  // axios.setBaseURL('https://support.tecbadia.com/api')
  //axios.setBaseURL('http://192.168.1.26/api')
   axios.setBaseURL('https://customer-api.mr-mussllaha.tecbadia.com/')
  // axios.setBaseURL('http://192.168.1.26:81')


  // axios.setBaseURL('https://fakestoreapi.com')

  // Inject to context as $api
  inject('axios', axios)
}
