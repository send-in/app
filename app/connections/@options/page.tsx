"use client"

// #region imports
import { useState } from "react"
import { Search } from "@/icons"

import {
	DateTime,
	Navbar,
	OptionsCard,
} from "@/components"

import {
	Button,
	TextField,
	Radio,
	Select,
} from "@/base"


import {
	Template,
	useAccount
} from "@/providers"
// #endregion

const OptionsPage = () => {

	const {
			data:account
		} = useAccount()

	const [template, setTemplate] = useState<Template | undefined>()

	return (
		<section
			className="
				p-8 px-16 desktop:px-48 pt-[7%] flex items-start justify-center
				text-grey-200 text-base desktop:text-xl gap-12 h-fit
			"
		>
			<Navbar/>

			<article
				className="w-full h-full flex flex-col justify-between gap-8 desktop:justify-start desktop:gap-16"
			>
				<section
					className="flex w-full justify-between items-center gap-12 px-2"
				>
					<aside
						className="flex gap-24 w-[40%]"
					>
						<Radio
							label="Select all"
						/>

						<TextField
							variant="filled"
							placeholder="Search"
							fullWidth
							endIcon={
								<Search />
							}
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
				</section>


				<ul
					className="flex flex-col justify-between items-center desktop:justify-start gap-4  h-full desktop:h-fit"
				>
					{
						[...new Array(7)].map(
							(_,index) =>
							<OptionsCard
								key={index}
								name="Vishnu Shon"
								picture="https://media.licdn.com/dms/image/v2/D5603AQH2-Le-GLYQfQ/profile-displayphoto-crop_800_800/B56ZhyEAK4HUAI-/0/1754260309150?e=1759363200&v=beta&t=tSQG_CnXVrLuWg8REMJh1uWrk1NRL7iDLXG_WGKIwYA"
								company="The Lifetime Value Co."
								country="India"
								profile=""
							/>
						)
					}
				</ul>

				<section
					className="flex items-center w-full justify-between"
				>
					<aside
						className="flex gap-4 items-center"
					>
						<Button
							// disabled={true}
							variant="primary"
						>
							Schedule All
						</Button>
						<Button
							// disabled={true}
							variant="neutral"
						>
							Add Connection +
						</Button>
					</aside>
				</section>
			</article>
		</section>
	)
}

export default OptionsPage
