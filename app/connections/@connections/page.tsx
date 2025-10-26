"use client"

// #region imports
import {
	useCallback,
	useEffect,
	useState
} from "react"

import {
	ConnectionCard,
	Navbar,
	PaginationWrapper,
} from "@/components"

import {
	Button,
	TextField,
	Radio,
	Select,
} from "@/base"

import {
	Search,
	GoTo
} from "@/icons"

import {
	Connection,
	useConnections
} from "@/providers"

import { useRouter } from "next/navigation"
// #endregion

const sortOptions = [
	{ label: "A-Z", value: "A-Z" },
	{ label: "Z-A", value: "Z-A" },
	{ label: "Recents", value: "Recents" },
]

const ConnectionsPage = () => {

	const router = useRouter()

	const {
		success,
		data,
	} = useConnections()

	const [connections, setConnections] = useState<Connection[]>(data)
	const [selected, setSelected] = useState<string[]>([])
	const [search, setSearch] = useState("")

	const handleSelect = useCallback((
		isSelected: boolean,
		publicId: string,
	) => setSelected(
		prev =>
			isSelected ?
			prev?.filter(c=>c!=publicId):
			[publicId, ...prev]
		),
		[]
	)

	const handleSelectAll = useCallback(
		() => setSelected(
			prev => prev?.length === connections?.length ? [] :
			connections.map(item=>item.publicId)
		),
		[]
	)

	const handleNavigate = useCallback(
		() => {
			if (!selected?.length)
				return

			const query = selected.join(",")
			router.push(
				`/connections?ids=${encodeURIComponent(query)}`
			)
			router.refresh()
		},
		[selected]
	)

	const handleSort = useCallback((sortOption: string) => {
		setConnections(prev => {
			const sorted = [...prev];
			switch (sortOption) {
				case "A-Z":
					return sorted.sort((a, b) =>
						a?.firstName?.localeCompare(b?.firstName)
					)
				case "Z-A":
					return sorted.sort((a, b) =>
						b?.firstName?.localeCompare(a?.firstName)
					)
				case "Recents":
					return sorted
				default:
					return prev
			}
		})
	}, [])


	useEffect(() => {
		let updated: Connection[] = data

		if (search.trim()) {
			const term = search.toLowerCase()
			updated = data.filter(
				(item) =>
					item?.publicId.toLowerCase().includes(term) ||
					item?.bio.toLowerCase().includes(term) ||
					item?.firstName?.toLowerCase().includes(term) ||
					item?.lastName?.toLowerCase().includes(term)
			)
		}

		setConnections(updated)
	}, [data, search])

	return (
		<section
			className="
				p-8 px-16 desktop:px-48 pt-[7%] flex items-start justify-center
				text-grey-200 text-base desktop:text-xl gap-12 h-fit
			"
		>
			<Navbar/>

			<section
				data-length={data?.length && success}
				className="
					w-full h-auto flex flex-col justify-between
					desktop:justify-start relative data-[length=false]:rounded-xl
					data-[length=false]:h-[80vh] data-[length=false]:bg-bluewash
					data-[length=false]:items-center data-[length=false]:justify-center
				"
			>
				{
					success &&
					<aside
						className="flex w-full justify-between px-2 items-center mb-8 desktop:mb-12"
					>
						<Radio
							checked={selected?.length === connections?.length}
							label="Select all"
							onChange={()=>""}
							onClick={handleSelectAll}
						/>

						<TextField
							className="w-[30%]"
							variant="filled"
							placeholder="Search"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							endIcon={
								<Search />
							}
						/>

						<Select
							onChange={(e)=>handleSort(e.value)}
							options={sortOptions}
							placeholder="Sort"
							variant="neutral"
							size="md"
						/>

					</aside>
				}
				{
					!success &&
					<p
						className="text-2xl desktop:text-6xl text-blue-100 font-semibold"
					>

						No Connections Found 👥
					</p>
				}

				{
					success &&
					<PaginationWrapper
						grid
						items={connections}
						count={20}
						component={
							({
								firstName,
								lastName,
								picture,
								bio,
								publicId,
							})=>{
								const isSelected = selected?.includes(publicId)
								return (
									<ConnectionCard
										key={publicId}
										profile={publicId}
										selected={isSelected}
										name={`${firstName} ${lastName}`|| "Unnamed"}
										picture={picture || "/profile.svg"}
										bio={bio || "No bio"}
										setSelected={()=>handleSelect(
											isSelected,
											publicId
										)}
									/>
								)
							}
						}
					/>
				}


				{
					!!connections.length &&
					<aside
						className="
							flex gap-10 justify-between items-center w-max -mt-10
							rounded-full bg-white shadow-sm sticky bottom-10 ml-5 p-2
						"
					>
						<Button
							disabled={!selected?.length}
							onClick={handleNavigate}
							endIcon={<GoTo/>}
							variant="primary"
							size="full"
						>
							{
								selected?.length ?
								<span>{selected?.length} Selected</span>:
								<span>Select a connect</span>
							}
						</Button>
					</aside>
				}
			</section>
		</section>
	)
}

export default ConnectionsPage
