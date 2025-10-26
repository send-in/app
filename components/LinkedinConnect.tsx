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

import { useAccount } from "@/providers"
// #endregion



const LinkedinConnect = () => {

	const { data } = useAccount()
	const {
		li_at,
		picture
	} =  data?.account || {}

	const [cookie, setCookie] = useState<string>(li_at || "")
	const ua = navigator.userAgent || ''

	console.log(ua)

	const handler = useCallback(() => {
		if(li_at)
			return




	},[li_at])

	useEffect(
		()=>setCookie(
			p => (!p && li_at) ? li_at : p
		),
		[li_at]
	)

	return (
		<div
			className="
				flex items-center w-full p-2 bg-grey-100 relative
				rounded-full focus-within:ring-2 focus-within:ring-blue-100 focus-within:ring-inset
                transition-all ease-in-out delay-100 cursor-pointer
			"
		>
			<Image
				className="rounded-full desktop:scale-120"
				alt={"SendIn"}
				src={picture || "/profile.svg"}
				width={50}
				height={50}
			/>

			<TextField
				className="!text-xl text-gradient-end desktop:!text-2xl"
				variant="standard"
				fullWidth
				value={cookie}
				disabled={!!li_at}
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
