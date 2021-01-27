import cache from 'memory-cache'
import defaultAxiosService from './api_service'

const getExampleData = (cacheName, params) => {
  const cacheKeyName = `${cacheName} ${JSON.stringify(params)}`, 
  cachedData = cache.get(cacheKeyName)

  if (!cachedData) {
    return (
      defaultAxiosService.get(`/exampledata`, {
        params 
      }).then((response) => {
        // write api specific success functionality
        // cache the value indefinitely
        cache.put(cacheKeyName, response)
        return response
      }).catch((error) => {
        // write api specific error functionality
        throw error
      })
    )
  } else {
    return Promise.resolve(cachedData)
  }
}

const apis = {
  getExampleData
}

export default apis