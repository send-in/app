"use client"

// #region imports
import {
    SidePanel,
	Linkedin,
	Extension,
	Template,
	Completed
} from "@/components"

import { useState } from "react"
// #endregion

const steps = (
	selected: number,
	setSelected: (value:number)=>void
) =>{
	switch (selected) {
		case 0:
			return <Linkedin
				nextStep={()=>setSelected(1)}
			/>
		case 1:
			return <Extension
				nextStep={()=>setSelected(2)}
			/>
		case 2:
			return <Template
				nextStep={()=>setSelected(3)}
			/>
		case 3:
			return <Completed/>
	}
}

const page = () => {
	const [selected, setSelected] = useState(0)

	return (
		<main
			className="h-screen flex items-center justify-between p-8 desktop:px-48 "
		>
			<section
				className="p-8"
			>{
				steps(
					selected,
					setSelected
				)
			}
			</section>

			<SidePanel
				selected={selected}
				setSelected={setSelected}
			/>
		</main>
	)
}

export default page
