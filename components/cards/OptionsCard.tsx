"use client"

// #region imports
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

import { useState } from "react"
// #endregion

import templates from "@/templates/templates.json"
const templateOptions = templates.map((t) => ({
	label: t.name,
	value: t.name,
}))

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
	const [template, setTemplate] = useState({
		name: "Networking Template",
		content: "Networking Template"
	})

	const handleChange = (selectedValue: string) => {
		const selectedTemplate = templates.find((t) => t.name === selectedValue)
		if (selectedTemplate) {
			setTemplate(selectedTemplate)
		} else {
			setTemplate({ name: "", content: "" })
		}
	}

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


			<aside
				className="flex gap-10 w-[40%]"
			>
				<Select
					options={templateOptions}
					value={template.name}
					placeholder="Select Template"
					size="md"
					variant="primary"
					onChange={handleChange}
				/>

				<DateTime/>

			</aside>

			<aside
				className="flex gap-2"
			>

				<IconButton
					variant="primary"
				>
					<Logo
						size={55}
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
