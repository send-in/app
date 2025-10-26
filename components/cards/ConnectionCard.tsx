// #region imports
import { GoTo } from "@/icons"
import Image from "next/image"
import Link from "next/link"
// #endregion

const ConnectionCard = ({
	name,
	bio,
	profile,
	picture,
	selected,
	setSelected
}:{
	name: string,
	bio: string,
	profile: string,
	picture: string,
	selected: boolean,
	setSelected: ()=>void,
}) => {
	return (
		<li
			data-selected={selected}
			className="
				list-none flex flex-col gap-4 text-base desktop:text-xl items-start w-full
				desktop:py-4 text-grey-200 justify-between border-2 border-white rounded-2xl p-3
				transition-all ease-in-out duration-200 active:scale-98 shrink-0 select-none cursor-pointer
				hover:border-blue-200 data-[selected=true]:border-blue-100 relative min-h-[25vh]
			"
			onClick={()=>setSelected()}
		>
			<aside
				className="flex flex-col gap-4 items-start group"
			>
				<Image
					className="rounded-full"
					alt={name ?? "SendIn"}
					src={picture}
					width={60}
					height={60}
				/>

				<h3
					className="
						text-2xl text-blue-100 group-hover:text-blue-200
						transition-all ease-in-out delay-100
					"
				>
					{name}
				</h3>
			</aside>


			<p
				className="w-full text-sm font-medium desktop:text-lg"
			>
				{bio}
			</p>

			<Link
				className="absolute top-5 right-5"
				href={`https://www.linkedin.com/in/${profile}`}
				target="_blank"
				title={name ?? "SendIn"}
			>
				<GoTo
					color="blue-100"
					className="
						border-2 hover:border-blue-100 border-grey-100
						active:border-blue-200
					"
				/>
			</Link>
		</li>
	)
}

export default ConnectionCard
