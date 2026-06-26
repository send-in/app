"use client"

// #region imports
import {
	useState,
	useCallback,
	useEffect
} from "react"

import Image from "next/image"

import {
	Button,
	TextField
} from "@/base"
import { redirect, useRouter } from "next/navigation"
import { _EXTENSION_ID } from "@/constants"
// #endregion

interface ILinkedinConnect {
    token?: string,
    picture?: string
}

const LinkedinConnect = ({
    token = "", 
    picture = ""
}: ILinkedinConnect) => {
    
	const [cookie, setCookie] = useState<string>(token || "")
    const [error, setError] = useState<string>()
    const router = useRouter()

    const handleConnect = useCallback(async () => {
        const isChrome =
            navigator.userAgent
                .toLowerCase()
                .includes("chrome")

        if (!isChrome) {
            setError("Only available on Chrome")
            return
        }

        try {
            await fetch(`chrome-extension://${_EXTENSION_ID}/manifest.json`)
            await chrome?.runtime?.sendMessage(
                _EXTENSION_ID,
                { action: "OPEN_POPUP" }
            )
            
            router.refresh()
        } catch(e){
           redirect(`https://chrome.google.com/webstore/detail/${_EXTENSION_ID}`)
        }
    }, [setError])

    useEffect(() => {
        if (!error) return

        const timer = setTimeout(
            () => setError(undefined),
            3000
        )

        return () => clearTimeout(timer)
    }, [error])

    useEffect(() => 
        setCookie(token), 
        [token]
    )

	return (
		<div
			className="
				flex items-center w-full p-2 bg-grey-100 
                relative rounded-full focus-within:ring-2 
                focus-within:ring-blue-100 min-w-max
                smooth cursor-pointer
                focus-within:ring-inset
			"
		>
			<Image
				className="rounded-full"
				alt={"SendIn"}
				src={picture || "/profile.svg"}
				width={50}
				height={50}
			/>

			<TextField
				className="
                    !text-xl text-gradient-end 
                    desktop:!text-2xl
                "
				fullWidth
				value={cookie}
				onChange={(e)=>""}
				variant="standard"
				disabled
			/>

            {
                error &&
                <p className="
                    text-red-800 text-xs
                    desktop:text-base
                    animate-fade-in-fast
                    text-nowrap mr-4
                    absolute -top-4
                    right-2
                ">
                    {error}
                </p>
            }

			<Button
                type="button"
                onClick={handleConnect}
			>
				Connect with LinkedIn
			</Button>
		</div>
	)
}

export default LinkedinConnect
