const axios = require('axios')

export function axiosGet(url, options) {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(response => resolve(response))
  })
}
