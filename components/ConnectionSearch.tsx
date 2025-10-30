"use client"

// #region imports
import {
	ReactNode,
	useState
} from "react"

import {
	Select,
	TextField
} from "@/base"

import { Search } from "@/icons"
import { useConnections } from "@/providers"
// #endregion


interface ConnectionSearchProps {
	onChange: (id: string) => void
}

const ConnectionSearch = ({
	onChange,
}: ConnectionSearchProps) => {

	const [search, setSearch] = useState<string>("")

	const {
		connections,
		success
	} = useConnections()

	return (
		success &&
		<Select<string | ReactNode>
			className="dropdown-top text-base desktop:text-xl py-4"
			onChange={val => {
				if (typeof val === "string") onChange(val)
			}}
			size="md"
			placeholder="Add Connections"
			variant="neutral"
			options={[
				<div
					className="sticky -top-2 bg-white py-2"
					key="search"
				>
					<TextField
						className="min-w-56"
						key="search"
						variant="filled"
						placeholder="Search"
						onChange={(e)=>setSearch(e.target.value)}
						endIcon={
							<Search />
						}
					/>
				</div>,
				...connections
				?.map(
					val => `${val.firstName} ${val.lastName}`
				)?.filter(
					val => val.includes(search)
				)
			]}
		/>
	)
}

export default ConnectionSearch
