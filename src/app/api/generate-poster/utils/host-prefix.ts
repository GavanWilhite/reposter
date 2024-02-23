import { inDev } from './in-dev'


export const hostPrefix = inDev ? 'http://localhost:3000' : process.env.PRODUCTION_HOST

export const getHostPrefixedUrl = (url: string) => new URL(url, hostPrefix).toString();