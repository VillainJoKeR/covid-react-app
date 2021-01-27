// **************************
// ENVIRONMENT CONFIGURATIONS
// **************************

let config = {
  // default configurations here
}

// Change config for 'development' environment
if (process.env.NODE_ENV === 'development') {
  config = {
    ...config,
    GOOGLE_API_KEY: 'AIzaSyA0ZyBwZrgPSjPrWyeZQFAyjUoD1la0g-I'
  }
}

// Change config for 'test' environment
if (process.env.NODE_ENV === 'test') {
  config = {
    ...config,
    GOOGLE_API_KEY: 'AIzaSyC6Vjo0Mfh-Nbq_151pLSIBAp4wcTXuIh0'
  }
}

// Change config for 'production' environment
if (process.env.NODE_ENV === 'production') {
  config = {
    ...config,
    GOOGLE_API_KEY: 'AIzaSyCW9RQtpW52y_beSqgQ0SkyW48_fhTMAeA'
  }
}

export default config
