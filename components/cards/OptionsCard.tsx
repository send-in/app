"use client"

// #region imports
import { useState } from "react"

import Link from "next/link"
import Image from "next/image"

import {
	DateTime
} from "@/components"

import {
	Clock,
	Globe,
	Trash,
	Logo
} from "@/icons"

import {
	IconButton,
	Radio,
	Select
} from "@/base"

import {
	Template,
	useAccount
} from "@/providers"
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

	const {
		data:account
	} = useAccount()

	const [template, setTemplate] = useState<Template | undefined>()

	return (
		<li
			data-selected={false}
			className="
				list-none flex text-base desktop:text-xl items-center px-3
				text-grey-200 justify-between w-full select-none
				cursor-pointer group/card
			"
		>
			<aside
				className="
					flex items-center justify-between gap-4 w-[40%] border-2
					border-white rounded-full p-1 pr-4 hover:border-blue-100 active:border-blue-200
					group-data-[selected=true]/card:border-blue-200
				"
			>

				<Link
					className="group flex gap-2 items-center"
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
							className="text-base desktop:text-xl font-medium"
						>
							{company}, {country}
						</p>
					</aside>

				</Link>

				<aside
					className="text-base desktop:text-xl text-charcoal-100 flex gap-10 w-fit"
				>
					<p
						className="flex gap-3 items-center fill-blue-100"
					>
						<Globe
							size={18}
						/>
						IST
					</p>

					<p
						className="flex gap-3 items-center fill-orange"
					>
						<Clock
							size={18}
						/>
						Afternoon
					</p>
				</aside>
			</aside>



			<aside
				className="flex gap-10"
			>
				<Select<Template>
					buttonClassName="w-42"
					size="md"
					variant="primary"
					placeholder="Select Template"
					disabled={!account?.templates?.length}
					options={account?.templates as Template[]}
					onChange={(value)=>setTemplate(value as Template)}
					selected={template}
				/>

				<DateTime
				/>

			</aside>

			<aside
				className="flex gap-2 w-[10%] justify-end"
			>

				<IconButton
					variant="primary"
				>
					<Logo
						size={40}
					/>
				</IconButton>

				<IconButton
					variant="danger"
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
