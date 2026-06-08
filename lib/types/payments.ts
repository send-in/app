export interface IRawPayment {
	ID: string
	Status: string
	AccountID: string
	PlanCredits: number
	Amount: number
	Provider: string
	ExternalID: string
	CreatedAt: string
	UpdatedAt: string
}

export interface IPayment {
	id: string
	status: string
	accountId: string
	planCredits: number
	amount: number
	provider: string
	externalId: string
	createdAt: Date
	updatedAt: Date
}

export const serializePayment = (
	payment: IRawPayment,
): IPayment => ({
	id: payment.ID,
	status: payment.Status,
	accountId: payment.AccountID,
	amount: payment.Amount,
	planCredits: payment.PlanCredits,
	provider: payment.Provider,
	externalId: payment.ExternalID,
	createdAt: new Date(payment.CreatedAt),
	updatedAt: new Date(payment.UpdatedAt),
})