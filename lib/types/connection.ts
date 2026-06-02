export interface IRawConnection {
	id: string
	publicId: string
	firstName?: string
	lastName?: string
	bio?: string
	picture?: string
	company?: string
	country?: string
}

export interface IConnection {
	id: string
	publicId: string
	firstName: string
	lastName: string
	name: string
	bio?: string
	picture?: string
	company?: string
	country?: string
}

export const serializeConnection = (
	connection: IRawConnection,
): IConnection => {

	const firstName = connection.firstName || ""
	const lastName = connection.lastName || ""

	return {
		id: connection.id,
		publicId: connection.publicId,
		firstName: firstName,
		lastName: lastName,
		name:
			`${firstName} ${lastName}`
				.trim(),

		bio: connection.bio,
		picture: connection.picture,
		company: connection.company,
		country: connection.country,
	}
}