"use client"

// #region imports
import Image from "next/image"

import {
	Button,
	TextField
} from "@/base"

import {
    TimeZone,
    LinkedinConnect
} from "@/components"

import {
	useAccount
} from "@/providers"
// #endregion

const Page = ({
}) => {

	const { data } = useAccount()

	const {
		name,
		picture,
		email,
		timezone,
	} = data || {}

	return (
		<section
			className="flex flex-col gap-4 w-[80%] desktop:w-[60%] items-start"
		>
			<Image
				className="rounded-full"
				alt={"SendIn"}
				src={picture || "/profile.svg"}
				width={80}
				height={80}
			/>

			<aside
				className="flex justify-between items-center w-full"
			>
				<h1
					className="text-3xl desktop:text-4xl text-blue-100 font-semibold"
				>
					Hey, Vishnu !
				</h1>

				<TimeZone
					value={timezone || ""}
				/>
			</aside>

			<TextField
				className="!rounded-xl !px-4"
				variant="filled"
				value={name || ""}
				label="Full Name"
				fullWidth
			/>

			<TextField
				className="!rounded-xl !px-4 mb-12"
				variant="filled"
				value={email || ""}
				label="Email"
				fullWidth
			/>

			<LinkedinConnect/>

			<p
				className="text-sm desktop:text-lg text-grey-200"
			>
				We take your li_at cookie and user agent information,
				If you have the extension installed you can update your cookie
				for it too. You can manually enter your cookie using chrome dev tools
			</p>

			<Button
				disabled
				variant="secondary"
			>
				Save Changes
			</Button>
		</section>
	)
}

export default Page
