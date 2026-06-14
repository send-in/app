export interface IPlan {
    id: string
    title: string
    price?: number
    features: string[]
    messages?: number
    description?: string
    minMessages?: number
    maxMessages?: number
    step?: number
}