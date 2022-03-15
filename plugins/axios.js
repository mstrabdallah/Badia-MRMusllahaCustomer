export default function ({ $axios,app }, inject) {
    // Create a custom axios instance
    const axios = $axios.create({
      headers: {
        common: {
            'Authorization': "Bearer " + app.$cookies.get("token"),
            'Accept': "application/json, text/plain, /",
            'Content-Type': 'multipart/form-data',
        }
      }
    })
  
    // Set baseURL to something different
    axios.setBaseURL('https://support.tecbadia.com/api')
    //axios.setBaseURL('http://192.168.1.26/api')

    // Inject to context as $api
    inject('axios', axios)
  }