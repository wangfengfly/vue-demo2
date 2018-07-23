import axios from 'axios'

export const haha = {
  lists: () => {
    return axios.get('https://api.github.com/users/hadley/orgs').then(res => {
      return res.data
    })
  }
}
