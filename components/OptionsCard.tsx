// #region imports
import {
	Radio,
	IconButton,
} from "@mui/material"
import Link from "next/link"
import Image from "next/image"
import Templates from "./Templates"
import DateTime from "./DateTime"
import Clock from "../Icons/Clock"
import Globe from "../Icons/Globe"
import Trash from "../Icons/Trash"
import Logo from "../Icons/Logo"
// #endregion

const OptionsCard = ({
	name,
	picture,
	company,
	country,
	profile,

}:{
	name: string,
	picture: string,
	company: string,
	country: string,
	profile: string,
}) => {
	return (
		<li
			className="
				list-none flex  text-base items-center w-full
				tracking-tighter text-grey-200 justify-between
			"
		>	
			<aside
				className="flex items-center gap-2 w-[20%]"
			>
				<Radio/>

				<Image
					className="rounded-full"
					alt={name ?? "SendIn"}
					src={picture}
					width={45}
					height={45}
				/>

				<Link
					className="group"
					href={profile}
					target="_blank"			
					title={name ?? "SendIn"}		
				>

					<h3
						className="
							text-xl text-blue-100 group-hover:text-blue-200
							transition-all ease-in-out delay-100 
						"
					>
						{name}
					</h3>
					<p
						className="text-base font-medium"
					>
						{company}, {country}
					</p>
				</Link>
			</aside>

			<aside 
				className="text-base text-charcoal-100 flex gap-10 w-[20%]"
			>
				<div
					className="flex gap-3 items-center "
				>
					<Globe
						size={16}
					/>
					IST
				</div>

				<div
					className="flex gap-3 items-center"
				>
					<Clock
						size={16}
					/>
					Afternoon
				</div>
			</aside>


			<aside 
				className="flex gap-10 w-[40%]"
			>
				<Templates
					value="Outreach Template"
				/>
				<DateTime/>
			
			</aside>

			<aside 
				className="flex gap-2"
			>

				<IconButton 
					size="medium"
					className="!w-12 !h-12 flex items-center justify-center"
				>
					<Logo
						size={55}
						fill="#4285F4"
					/>
				</IconButton>

				<IconButton 
					size="medium"
					className="!w-12 !h-12 flex items-center justify-center"

				>
					<Trash
						size={25}
					/>
				</IconButton>
			</aside>

		</li>
	)
}

export default OptionsCard