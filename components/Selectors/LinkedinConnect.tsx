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
// #endregion

const LinkedinConnect = ({
    token = "", 
    picture = ""
}: {
    token?: string,
    picture?: string
}) => {
	const [cookie, setCookie] = useState<string>(token || "")

	const handler = useCallback(() => {
        
		if(token)
			return
	},[token])

	useEffect(
		()=>setCookie(
			p => (!p && token) ? token : p
		),
		[token]
	)

	return (
		<div
			className="
				flex items-center w-full p-2 bg-grey-100 
                relative rounded-full focus-within:ring-2 
                focus-within:ring-blue-100 
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
				variant="standard"
				disabled={!!token}
				onChange={
					(e)=>setCookie(e.target.value)
				}
			/>

			<Button
				onClick={()=>handler()}
			>
				Connect with LinkedIn
			</Button>
		</div>
	)
}

export default LinkedinConnect
