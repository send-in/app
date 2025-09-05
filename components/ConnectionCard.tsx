// #region imports
import Image from "next/image"

import {
	Radio,
} from "@mui/material"

import Globe from "../Icons/Globe"
import Clock from "../Icons/Clock"
import Link from "next/link"
// #endregion

const ConnectionCard = ({
	name,
	bio,
	company,
	country,
	profile,
	picture,
}:{
	name: string,
	bio: string,
	company: string,
	country: string,
	profile: string,
	picture: string,
}) => {
	return (
		<li
			className="
				list-none flex gap-10 text-base items-center w-full
				p-2 tracking-tighter text-grey-200 justify-between
			"
		>
			<aside
				className="flex items-center gap-8"
			>
				<Radio/>

				<Link
					className="flex gap-4 items-center group"
					href={profile}
					target="_blank"
					title={name ?? "SendIn"}
				>
					<Image
						className="rounded-full"
						alt={name ?? "SendIn"}
						src={picture}
						width={45}
						height={45}
					/>

					<aside>
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
					</aside>
				</Link>
			</aside>


			<p
				className="w-[30%] text-sm font-medium"
			>
				{bio}
			</p>

			<aside
				className="text-base text-charcoal-100 flex gap-10"
			>
				<div
					className="flex gap-3 items-center fill-blue-100"
				>
					<Globe
                        size={16}
                    />
					IST
				</div>

				<div
					className="flex gap-3 items-center fill-orange"
				>
					<Clock
                        size={16}
                    />
					Afternoon
				</div>
			</aside>
		</li>
	)
}

export default ConnectionCard
