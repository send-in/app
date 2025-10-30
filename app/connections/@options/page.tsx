"use client"

// #region imports
import {
	useCallback,
	useEffect,
	useState
} from "react"

import {
	DateTime,
	Navbar,
	OptionsCard,
	ConnectionSearch
} from "@/components"

import {
	Button,
	Radio,
	Select,
} from "@/base"


import {
	Connection,
	Template,
	useAccount,
	useConnections
} from "@/providers"

import { useRouter } from "next/navigation"
// #endregion

const OptionsPage = () => {

	const router = useRouter()

	const {
		data:account
	} = useAccount()

	const {
		success,
		options:data,
	} = useConnections()

	const [options, setOptions] = useState<Connection[]>(data || [])
	const [selected, setSelected] = useState<string[]>([])
	const [template, setTemplate] = useState<Template | undefined>()
	const [scheduleTime, setScheduleTemplate] = useState<string | undefined>()

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
			prev => prev?.length === options?.length ? [] :
			options?.map(item=>item.publicId)
		),
		[]
	)

	const handleDeleteSelected = useCallback(()=>{},[])
	const handleSendSelected = useCallback(()=>{},[])
	const handleAddConnection = useCallback(()=>{},[])

	return (
		<article
			className="
				p-8 px-16 desktop:px-48 pt-[8%] flex items-start justify-center
				text-grey-200 text-base desktop:text-xl gap-12 h-fit
			"
		>
			<Navbar/>

			<section
				className="w-full h-full flex flex-col justify-between gap-8 desktop:justify-start desktop:gap-16"
			>
				<div
					className="flex w-full justify-between items-center gap-12 px-2"
				>
					<aside
						className="flex gap-10 w-[40%] px-5"
					>
						<Radio
							checked={
								!!selected?.length &&
								(selected?.length === options?.length)
							}
							label="Select all"
							onChange={()=>""}
							onClick={handleSelectAll}
						/>
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

						<DateTime/>

					</aside>

					<Button
						// disabled={true}
						variant="danger"
						className="!w-[10%]"
						size="auto"
					>
						Delete
					</Button>
				</div>


				<ul
					className="flex flex-col justify-between items-center desktop:justify-start gap-4  h-full desktop:h-fit"
				>
					{
						options?.map(
							({
								firstName,
								lastName,
								picture,
								company,
								country,
								publicId
							}) => {
								const isSelected = selected?.includes(publicId)
								return (
									<OptionsCard
										key={publicId}
										profile={publicId}
										name={`${firstName} ${lastName}`|| "Unnamed"}
										picture={picture || "/profile.svg"}
										company={company}
										country={country}
										selected={isSelected}
										setSelected={()=>handleSelect(
											isSelected,
											publicId
										)}
									/>
								)
							}
						)
					}
				</ul>

				<aside
					className="
						flex gap-4 justify-between items-center w-max
						rounded-full bg-white shadow-sm sticky bottom-10 ml-5 px-4
					"
				>
					<Button
						disabled={!selected?.length}
						variant="primary"
					>
						{
							selected?.length ?
							<span>Schedule {selected?.length}</span>:
							<span>Select to continue</span>
						}
					</Button>

					<ConnectionSearch
						onChange={()=>{}}
					/>
				</aside>
			</section>
		</article>
	)
}

export default OptionsPage
