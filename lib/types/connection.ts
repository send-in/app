
// #region imports
import { ITemplate } from "./template"
// #endregion

export interface IRawConnection {
	ID: string
	PublicID: string
	FirstName?: string
	LastName?: string
	Bio?: string
	Picture?: string
	Company?: string
	Country?: string
	CreatedAt: string
	UpdatedAt: string
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
	createdAt: Date
	updatedAt: Date
}

export interface IScheduledConnection 
extends IConnection {
    template?: ITemplate
    timezone?: string
    dateTime?: string
}

export const serializeConnection = (
	connection: IRawConnection,
): IConnection => {

	const firstName = connection.FirstName || ""
	const lastName = connection.LastName || ""

	return {
		firstName,
		lastName,
		id: connection.ID,
		bio: connection.Bio,
		picture: connection.Picture,
		company: connection.Company,
		country: connection.Country,
		publicId: connection.PublicID,
		name: `${firstName} ${lastName}`.trim(),
		createdAt: new Date(connection.CreatedAt),
		updatedAt: new Date(connection.UpdatedAt),
	}
}