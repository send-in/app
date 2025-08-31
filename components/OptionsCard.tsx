// #region imports
import {
	Radio,
	IconButton,
} from "@mui/material"
import Link from "next/link"
import Image from "next/image"
import Templates from "./Templates"
import DateTime from "./DateTime"
import Clock from "./Icons/Clock"
import Globe from "./Icons/Globe"
import Trash from "./Icons/Trash"
import Logo from "./Icons/Logo"
// #endregion

const OptionsCard = ({
	name,
	picture,
	company,
	country,
	profile,
	template,
	message,
	scheduleTime,
}:{
	name: string,
	picture: string,
	company: string,
	country: string,
	profile: string,
	template?: string,
	message?: string,
	scheduleTime?: Date,
}) => {
	return (
		<li
			className="
				list-none flex gap-10 text-lg items-center
				p-2 tracking-tight text-grey-200 justify-between
			"
		>	
			<aside
				className="flex items-center gap-10"
			>
				<Radio/>

				<Link
					className="flex gap-5 items-center group"
					href={profile}
					target="_blank"			
					title={name ?? "SendIn"}		
				>
					<Image
						className="rounded-full"
						alt={name ?? "SendIn"}
						src={picture}
						width={60}
						height={60}
					/>

					<aside>
						<h3
							className="
								text-3xl text-blue-100 group-hover:text-blue-200
								transition-all ease-in-out delay-100 
							"
						>
							{name}
						</h3>
						<p
							className="text-lg font-medium"
						>
							{company}, {country}
						</p>
					</aside>
				</Link>
			</aside>

			<aside 
				className="text-xl text-charcoal-100 flex gap-10"
			>
				<div
					className="flex gap-3 items-center "
				>
					<Globe/>
					IST
				</div>

				<div
					className="flex gap-3 items-center"
				>
					<Clock/>
					Afternoon
				</div>
			</aside>


			<aside 
				className="flex gap-10 ml-[10%]"
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