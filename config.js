import getConfig from 'next/config'

const {publicRuntimeConfig} = getConfig()

// export const API = publicRuntimeConfig.PRODUCTION ? 'https://seoblog.com' : 'http://localhost:8000'
export const BLOG_URL = publicRuntimeConfig.PRODUCTION ? publicRuntimeConfig.BLOG_URL : 'http://localhost:3000'
export const API_KEY = publicRuntimeConfig.CONTENT_API_KEY 