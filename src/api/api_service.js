import axios from 'axios'
// import AuthService from '../utils/auth_service'

// NOTE: Instance does not have global interceptors (https://github.com/axios/axios/issues/993)

const requestInterceptorSuccess = (config) => {
  // Do something before request is sent
  return config
}

const requestInterceptorError = (error) => {
  // Do something with request error
  return Promise.reject(error)
}

const responseInterceptorSuccess = (response) => {
  // Do something with response data
  return response
}

const responseInterceptorError = (error) => {
  // Do something with response error
  return Promise.reject(error)
}

const createAxiosInstance = (config) => {
  const newAxiosInstance = axios.create({
    ...config.axios
  })

  newAxiosInstance.interceptors.request.use(requestInterceptorSuccess, requestInterceptorError)
  newAxiosInstance.interceptors.response.use(responseInterceptorSuccess, responseInterceptorError)

  return newAxiosInstance
}

const defaultAxiosService = createAxiosInstance()

export default defaultAxiosService
