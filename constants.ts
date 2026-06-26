export const _ORIGIN_URL =
    process.env.NEXT_PUBLIC_APP_URL ??
    "http://localhost:3000"

export const _BASE_URL = 
    process.env.NEXT_PUBLIC_API_CORE_BASE_URL ?? 
    "http://localhost:8000"

export const _EXTENSION_ID = 
    process.env.NEXT_PUBLIC_EXTENSION_ID ?? 
    "cbcembbkcnjeljpeipjfhddniphmfpnj"

export const _AUTH_KEY = process.env.NEXT_PUBLIC_AUTH_KEY ?? "sendin_auth"
export const _ACCESS_KEY = process.env.NEXT_PUBLIC_ACCESS_KEY ?? "sendin_access"
export const _ONBOARDING_KEY = process.env.NEXT_PUBLIC_ONBOARDING_KEY ?? "sendin_onboarded"

export const _AUTH_URL = `${_BASE_URL}/api/v1/auth`
export const _ACCOUNT_URL = `${_BASE_URL}/api/v1/account`
export const _MESSAGES_URL = `${_BASE_URL}/api/v1/messages`
export const _PAYMENTS_URL = `${_BASE_URL}/api/v1/payments`
export const _TEMPLATES_URL = `${_BASE_URL}/api/v1/templates`
export const _CONNECTIONS_URL = `${_BASE_URL}/api/v1/connections`