// #region imports
import {
	Button,
	TextField,
} from "@mui/material"
import Image from "next/image"
// #endregion

const LinkedinConnect = () => {
	return (
		<div
			className="
				flex items-center w-[30%] p-2 px-4 bg-grey-100 
				rounded-full
			"
		>
			<Image
				className="rounded-full"
				alt={"SendIn"}
				src={"https://media.licdn.com/dms/image/v2/D5603AQH2-Le-GLYQfQ/profile-displayphoto-crop_800_800/B56ZhyEAK4HUAI-/0/1754260309150?e=1759363200&v=beta&t=tSQG_CnXVrLuWg8REMJh1uWrk1NRL7iDLXG_WGKIwYA"}
				width={50}
				height={50}
			/>

			<TextField
				variant="standard"
				value="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMj"
				fullWidth
				slotProps={{
					input:{
						disableUnderline: true,
						className: "font-mada text-2xl px-4 text-gradient-end"
					}
				}}
			/>

			<Button
				// onClick={handleClick}
				className="
					rounded-full bg-blue-100 hover:bg-blue-200 text-white 
					gap-2 text-lg font-mada font-normal normal-case
					transition-all ease-in-out delay-100 px-6 min-w-fit
				"
			>
				Connect with LinkedIn
			</Button>
		</div>
	)
}

export default LinkedinConnect