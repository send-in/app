// #region imports
import Image from "next/image"

import {
	Button,
	TextField
} from "@/base"
// #endregion

const LinkedinConnect = () => {
	return (
		<div
			className="
				flex items-center w-full p-2 bg-grey-100
				rounded-full focus-within:ring-2 focus-within:ring-blue-100 focus-within:ring-inset
                transition-all ease-in-out delay-100 cursor-pointer
			"
		>
			<Image
				className="rounded-full"
				alt={"SendIn"}
				src={"https://media.licdn.com/dms/image/v2/D5603AQH2-Le-GLYQfQ/profile-displayphoto-crop_800_800/B56ZhyEAK4HUAI-/0/1754260309150?e=1759363200&v=beta&t=tSQG_CnXVrLuWg8REMJh1uWrk1NRL7iDLXG_WGKIwYA"}
				width={40}
				height={40}
			/>

			<TextField
				className="!text-xl text-gradient-end"
				variant="standard"
				value="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMj"
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
