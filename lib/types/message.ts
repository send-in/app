// #region imports
import { 
    IRawTemplate,
    ITemplate,
    serializeTemplate
} from "./template"
// #endregion

export interface IRawMessage {
	id: string
	name: string
	picture?: string
	profile: string
	company?: string
	timezone?: string
	message?: string
	isSent: boolean
	template?: IRawTemplate
}

export interface IMessage {
	id: string
	name: string
	picture?: string
	profile: string
	company?: string
	timezone?: string
	isSent: boolean
	message?: string
	template?: ITemplate

    scheduledAt: Date,
    createdAt: Date,
}

export const serializeMessage = (
	message: IRawMessage,
): IMessage => ({
	id: message.id,
	name: message.name,
	picture: message.picture,
	profile: message.profile,
	company: message.company,
	timezone: message.timezone,
	message: message.message,
	isSent: message.isSent,
    scheduledAt: new Date(),
    createdAt: new Date(),
	template: message.template
		? serializeTemplate(message.template)
		: undefined,
})