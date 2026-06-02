export interface IRawAccount {
	id: string
	name: string
	email: string
	profile: string
	picture: string
	timezone: string
	token: string
	userAgent: string
	createdAt: string
	updatedAt: string
}

export interface IAccount {
	id: string
	name: string
	email: string
	profile: string
	picture: string
	timezone: string
	token: string
	userAgent: string
}

export const serializeAccount = (
	account: IRawAccount,
): IAccount => ({
	id: account.id,
	name: account.name,
	email: account.email,
	profile: account.profile,
	picture: account.picture,
	timezone: account.timezone,
	token: account.token,
	userAgent: account.userAgent,
})