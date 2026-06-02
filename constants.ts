export const _ORIGIN_URL =
    process.env.NEXT_PUBLIC_APP_URL ??
    "http://localhost:3000"

export const _BASE_URL = 
    process.env.NEXT_PUBLIC_API_CORE_BASE_URL ?? 
    "http://localhost:8000"


export const _ACCESS_KEY = process.env.NEXT_PUBLIC_ACCESS_KEY ?? "sn_access"
export const _AUTH_KEY = process.env.NEXT_PUBLIC_AUTH_KEY ?? "sn_auth"

export const _NODE_ENV = process.env.NEXT_PUBLIC_NODE_ENV ?? "local"
export const _COOKIE_SECURE =
    process.env.NODE_ENV === "production" ||
    process.env.NEXT_PUBLIC_NODE_ENV === "production"

export const _EMAIL_USER = process.env.NEXT_EMAIL_USER
export const _EMAIL_PASS = process.env.NEXT_EMAIL_PASS


export const _AUTH_URL = `${_BASE_URL}/api/v1/auth`
export const _ACCOUNT_URL = `${_BASE_URL}/api/v1/account`
export const _MESSAGES_URL = `${_BASE_URL}/api/v1/messages`
export const _TEMPLATES_URL = `${_BASE_URL}/api/v1/templates`
export const _CONNECTIONS_URL = `${_BASE_URL}/api/v1/connections`