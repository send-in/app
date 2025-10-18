// #region imports
import Image from "next/image"

import {
	Button,
	TextField
} from "@/base"

import {
	useAccount
} from "@/providers"
// #endregion

const LinkedinConnect = () => {

	const { data } = useAccount()

	const {
		li_at,
		picture
	} = data || {}

	return (
		<div
			className="
				flex items-center w-full p-2 bg-grey-100
				rounded-full focus-within:ring-2 focus-within:ring-blue-100 focus-within:ring-inset
                transition-all ease-in-out delay-100 cursor-pointer
			"
		>
			<Image
				className="rounded-full desktop:scale-120"
				alt={"SendIn"}
				src={picture || "/proifle.svg"}
				width={40}
				height={40}
			/>

			<TextField
				className="!text-xl text-gradient-end desktop:!text-2xl"
				variant="standard"
				value={li_at}
				fullWidth
			/>

			<Button
				// onClick={handleClick}
			>
				Connect with LinkedIn
			</Button>
		</div>
	)
}

export default LinkedinConnect
