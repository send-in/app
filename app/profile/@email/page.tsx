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
// #endregion

const page = ({
}) => {

	// logic for steps
	return (
		<section
			className="flex flex-col gap-4 w-[80%] items-start"
		>
			<Image
				className="rounded-full"
				alt={"SendIn"}
				src={"https://media.licdn.com/dms/image/v2/D5603AQH2-Le-GLYQfQ/profile-displayphoto-crop_800_800/B56ZhyEAK4HUAI-/0/1754260309150?e=1759363200&v=beta&t=tSQG_CnXVrLuWg8REMJh1uWrk1NRL7iDLXG_WGKIwYA"}
				width={80}
				height={80}
			/>

			<aside
				className="flex justify-between items-center w-full"
			>
				<h1
					className="text-3xl text-blue-100 font-semibold tracking-tighter"
				>
					Hey, Vishnu !
				</h1>
				<TimeZone/>
			</aside>


			<TextField
				className="!rounded-xl !px-4"
				variant="filled"
				value="Vishnu Shon"
				label="Full Name"
				fullWidth
			/>
			<TextField
				className="!rounded-xl !px-4"
				variant="filled"
				value="vshon447@gmail.com"
				label="Email"
				fullWidth
			/>
			<TextField
				className="!rounded-xl !px-4"
				variant="filled"
				type="password"
				value="ananyab4ya"
				label="Password"
				fullWidth
			/>
			<TextField
				className="!rounded-xl !px-4 mb-5"
				variant="filled"
				type="password"
				value="ananyab4ya"
				label="Confirm Password"
				fullWidth
			/>


			<LinkedinConnect/>

			<p
				className="text-sm text-grey-200"
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

export default page
