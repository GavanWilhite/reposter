import { inDev } from './in-dev'

export const hostPrefix = inDev ? 'http://localhost:3000' : 'https://your-production-domain.com'

export const getHostPrefixedUrl = (url: string) => new URL(url, hostPrefix).toString();