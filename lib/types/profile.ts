export interface IRawAccount {
	ID: string
	Name: string
	Email: string
	Profile: string
	Picture: string
	Timezone: string
	Token: string
	UserAgent: string
	CreatedAt: string
	UpdatedAt: string
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
	createdAt: Date
	updatedAt: Date
}

export const serializeAccount = (
	account: IRawAccount,
): IAccount => ({
	id: account.ID,
	name: account.Name,
	email: account.Email,
	profile: account.Profile,
	picture: account.Picture,
	timezone: account.Timezone,
	token: account.Token,
	userAgent: account.UserAgent,
	createdAt: new Date(account.CreatedAt),
	updatedAt: new Date(account.UpdatedAt),
})