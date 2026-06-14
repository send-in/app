"use client"

// #region imports
import { useRouter } from "next/navigation"

import {
    useCallback,
    useEffect,
    useState,
} from "react"

import { Button } from "@/base"

import { 
    createPayment,
    pollPayment,
    loadRazorPay 
} from "@/lib"
// #endregion

export interface ISubscribe {
    credits?: number
    onChange?: () => void
}

const Subscribe = ({
    onChange,
    credits,
}: ISubscribe) => {
    const router = useRouter()
    const [error, setError] = useState<string>()
    const [loading, setLoading] = useState(false)
    const [processing, setProcessing] = useState(false)

    const handlePay = useCallback(async () => {
        setLoading(true)
        try {
            if (!await loadRazorPay()) {
                setError("Failed to load payment gateway")
                return
            }

            if(!credits) {
                setError("Invalid Credits")
                return
            } 

            const {
                data: options
            } = await createPayment({ credits })

            if (!options){
                setError("Razorpay Config Error")
                return
            } 

            const orderId = options.order_id

            new (window as any)
                .Razorpay({
                    ...options,
                    handler: async () => {
                        onChange?.()
                        setProcessing(true)
                        const res = await pollPayment(orderId)
                        res.success ?
                            router.refresh() :
                            setError(res.error ?? "Payment processing failed")
                        setProcessing(false)
                    }
                })
                .open()
        } 
        catch(e) {
            console.error(e)
            setError("Something went wrong")
        } 
        finally {
            setLoading(false)
        }
    }, [credits, onChange, router])

    useEffect(() => {
        if (!error) return

        const timer = setTimeout(
            () => setError(undefined),
            3000
        )

        return () => clearTimeout(timer)
    }, [error])

    const busy = loading || processing

    return (
        <>
            {
                error &&
                <p className="
                    text-red-800 text-xs
                    desktop:text-base
                    animate-fade-in-fast
                    text-nowrap mr-4
                ">
                    {error}
                </p>
            }

            {
                processing &&
                <p className="
                    text-grey-200 text-xs 
                    desktop:text-sm mr-4
                ">
                    Processing payment…
                </p>
            }

            <Button
                variant="primary"
                loading={busy}
                onClick={handlePay}
                className="mt-2"
                loadingText={
                    processing ? 
                    "Processing" : 
                    "Subscribe"
                }
                disabled={
                    !credits ||
                    processing
                }
            >
                Subscribe
            </Button>
        </>
    )
}

export default Subscribe