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
    cancelSubscription,
} from "@/lib"
// #endregion

const Unsubscribe = ({ onChange }: {
    onChange?: () => void
}) => {
    const router = useRouter()

    const [error, setError] = useState<string>()
    const [loading, setLoading] = useState(false)

    const handlePay = useCallback(async () => {
        setLoading(true)

        try {
            const res = await cancelSubscription()

            if (!res.success) {
                setError(
                    res.error ??
                    "Failed to cancel subscription",
                )
                return
            }

            onChange?.()
            router.refresh()
        }
        catch (e) {
            console.error(e)
            setError("Something went wrong")
        }
        finally {
            setLoading(false)
        }
    }, [onChange, router])

    useEffect(() => {
        if (!error) return

        const timer = setTimeout(
            () => setError(undefined),
            3000,
        )

        return () => clearTimeout(timer)
    }, [error])

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

            <Button
                variant="secondary"
                onClick={handlePay}
                disabled={loading}
                loading={loading}
                loadingText="Cancelling..."
                className="mt-2"
            >
                Unsubscribe
            </Button>
        </>
    )
}

export default Unsubscribe