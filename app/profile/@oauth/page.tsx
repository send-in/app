// #region imports
import Image from "next/image"

import { 
	Button,
	TextField
} from "@mui/material"

import { 
    TimeZone, 
    LinkedinConnect 
} from "@/components"

import { 
    Google 
} from "@/Icons"
// #endregion

const inputClass = `
	font-mada px-3 bg-grey-100 rounded-lg 
	font-normal text-base tracking-tighter h-fit
    focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-inset
    transition-all ease-in-out delay-100 cursor-pointer
`

const buttonClass = `
	rounded-full text-white px-8 w-[25%]
	gap-2 font-mada font-medium normal-case
	transition-all ease-in-out delay-100 text-base
	tracking-tighter h-fit
`

const page = ({
}) => {

	// logic for steps
	return (
		<section
			className="flex flex-col gap-4 w-[80%]"
		>
			<Image
				className="rounded-full"
				alt={"SendIn"}
				src={"https://media.licdn.com/dms/image/v2/D5603AQH2-Le-GLYQfQ/profile-displayphoto-crop_800_800/B56ZhyEAK4HUAI-/0/1754260309150?e=1759363200&v=beta&t=tSQG_CnXVrLuWg8REMJh1uWrk1NRL7iDLXG_WGKIwYA"}
				width={80}
				height={80}
			/>

			<aside
				className="flex justify-between items-center "
			>
				<h1
					className="text-2xl text-blue-100 font-semibold tracking-tighter"
				>
					Hey, Vishnu !
				</h1>
				<TimeZone inPopUp/>
			</aside>


			<TextField
				disabled={true}
				variant="standard"
				value="Vishnu Shon"
				label="Full Name" 
				fullWidth
				slotProps={{
					input: {
						disableUnderline: true,
						className: inputClass
					},
					inputLabel:{
						shrink: true
					}
				}}
			/>
			<TextField
				disabled={true}
				variant="standard"
				value="vshon447@gmail.com"
				label="Email"
				fullWidth
				slotProps={{
					input: {
						disableUnderline: true,
						className: inputClass
					}
				}}
			/>

			<Button
				startIcon={<Google/>}
				className={`bg-charcoal-100 hover:bg-charcoal-200 w-fit ${buttonClass} mb-4`}
			>
				Switch account
			</Button>
			
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
				className={`bg-charcoal-100 hover:bg-charcoal-200 ${buttonClass}`}
			>
				Save
			</Button>
		</section>
	)
}

export default page