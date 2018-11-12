import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  console.log('TokenKey is: ' + Cookies.get(TokenKey))
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  console.log('token is: ' + token)
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  console.log('remove token')
  return Cookies.remove(TokenKey)
}
