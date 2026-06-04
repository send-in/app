export interface IPlan {
    planId: string
    title: string
    price?: number
    features: string[]
    messages?: number
    minMessages?: number
    maxMessages?: number
    step?: number
}