"use client"

// #region imports
import {
	Editor,
	Navbar,
	PaginationWrapper,
	TemplateCard
} from "@/components"

import { Button, IconButton } from "@/base"
import { Template, useAccount } from "@/providers"
import { useState } from "react"

// #endregion

const page = () => {
	const {
		data:account,
	} = useAccount()

	const [selected, setSelected] = useState<Template | undefined>(
		account?.templates?.at(0)
	)

	return (
		<main
			className="
				p-8 px-12 desktop:px-[5%] pt-[8%] flex items-start justify-center
				text-grey-200 text-base desktop:text-xl gap-8 desktop:gap-12 h-[95vh]
			"
		>
			<Navbar/>

			<section
				data-length={(account?.templates?.length || 0) > 0}
				data-single={(account?.templates?.length || 0) < 10}
				className="
					flex flex-col gap-4 desktop:gap-6 w-[45%] h-auto relative items-start group
					data-[length=false]:justify-center data-[length=false]:bg-bluewash rounded-4xl
				"
			>
				{
					!!account?.templates?.length &&
					<PaginationWrapper
						items={account?.templates || []}
						count={10}
						component={
							(template)=>(
								<TemplateCard
									key={template?.id}
									template={template}
									onChange={(value)=>setSelected(value)}
									selected={selected===template}
								/>
							)
						}
					/>
				}

				{
					!!account?.templates?.length &&
					<IconButton
						className="absolute bottom-0 left-4 group-data-[single=true]:-bottom-10"
						variant="neutral"
						disabled={!account?.templates?.length}
					>
						+
					</IconButton>
				}

				{
					!account?.templates?.length &&
					<p
						className="text-2xl desktop:text-6xl text-blue-100 font-semibold"
					>
						Create your first template 📜
					</p>
				}

			</section>

			<section
				className="flex flex-col w-[50%] h-full gap-6"
			>

				<Editor

				/>

				<aside
					className="flex gap-2 w-full justify-end"
				>
					<Button
						disabled
						variant="secondary"
					>
						Delete
					</Button>

					<Button
						disabled
						variant="primary"
					>
						Save
					</Button>
				</aside>
			</section>
		</main>
	)
}

export default page
