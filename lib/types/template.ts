export interface IRawTemplate {
	id: string
	label: string
	value: string
}

export interface ITemplate {
	id: string
	label: string
	value: string
}

export const serializeTemplate = (
	template: IRawTemplate,
): ITemplate => ({
	id: template.id,
	label: template.label,
	value: template.value,
})