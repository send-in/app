"use client"

// #region imports
import {
	ReactNode,
	useState
} from "react"

import { Search } from "@/icons"

import {
	Select,
	TextField
} from "@/base"

import zones from "@/timezones.json"
// #endregion


interface TimeZoneProps {
	value?: string
	onChange: (zone: string) => void
}

const currentZone: string =
	Intl.DateTimeFormat()
	.resolvedOptions()
	.timeZone


const TimeZone = ({
	value,
	onChange,
}: TimeZoneProps) => {
	const [search, setSearch] = useState<string>(value || "")

	return (
		<Select<string | ReactNode>
			className="dropdown-end text-base desktop:text-xl"
			onChange={val => {
				if (typeof val === "string") onChange(val)
			}}
			selected={value || currentZone}
			placeholder="Select Timezone"
			variant="primary"
			options={[
				<div
					className="sticky -top-2 bg-white py-2"
					key="search"
				>
					<TextField
						key="search"
						variant="filled"
						placeholder="Search"
						onChange={(e)=>setSearch(e.target.value)}
						endIcon={<Search />}
					/>
				</div>,
				...zones.filter(
					val => val?.includes(search)
				)
			]}
		/>
	)
}

export default TimeZone
