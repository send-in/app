"use client"

// #region imports
import { useState } from "react"

import {
	Filters,
	Sort,
	ConnectionCard,
} from "@/components"

import {
	Pagination,
} from "@mui/material"

import {
	Button,
	ToggleGroup,
	TextField,
	Radio,
} from "@/base"

import {
	Search
} from "@/icons"
// #endregion

const dividerClass = `
	bg-grey-100 rounded-full h-[50vh] w-[2px]
`

const ConnectionsPage = () => {

	const [currentPage, setCurrentPage] = useState(1)
	const [selectAll, setSelectAll] = useState(false)
	const [results, setResults] = useState("20")

	const resultOptions = [
		{ label: "20", value: "20" },
		{ label: "50", value: "50" },
		{ label: "All", value: "All" },
	]

	return (
		<div
			className="w-full h-full flex items-around gap-4 justify-between"
		>
			<Filters/>

			<div
				className={dividerClass}
			/>

			<section
				className="w-[75%] h-full flex flex-col justify-between"
			>
				<aside
					className="flex w-full justify-between px-2 items-center"
				>
					<Radio
						label="Select all"
						checked={selectAll}
						onClick={() => setSelectAll(prev=>!prev)}
					/>

					<TextField
						variant="filled"
						placeholder="Search"
						endIcon={
							<Search />
						}
					/>

					<ToggleGroup
						variant="neutral"
						shape="rounded"
						options={resultOptions}
						value={results}
						onChange={setResults}
					/>

					<Sort
						options={[]}
						styles="bg-grey-100"
					/>
				</aside>

				<aside
					className="space-y-4 my-4 w-full"
				>
					{
						[...new Array(7)].map(
							(_,index) =>
							<ConnectionCard
								key={index}
								name="Vishnu Shon"
								picture="https://media.licdn.com/dms/image/v2/D5603AQH2-Le-GLYQfQ/profile-displayphoto-crop_800_800/B56ZhyEAK4HUAI-/0/1754260309150?e=1759363200&v=beta&t=tSQG_CnXVrLuWg8REMJh1uWrk1NRL7iDLXG_WGKIwYA"
								bio="Computer Engineering Student | Software Developer | Project Manager"
								company="The Lifetime Value Co."
								country="India"
								profile=""
							/>
						)
					}
				</aside>


				<aside
					className="flex w-full justify-between items-center"
				>
					<Button
						// disabled={true}
						variant="primary"
					>
						Save
					</Button>

					<p>3 Selected</p>

					<Pagination
						page={currentPage}
						count={10}
						// siblingCount={0}
						onChange={(event, value) => setCurrentPage(value)}
						size="small"
					/>
				</aside>

			</section>
		</div>
	)
}

export default ConnectionsPage
