"use client"

// #region imports
import { useState } from "react"
import { 
    ToggleButton, 
    ToggleButtonGroup, 
    Checkbox, 
    FormControlLabel, 
    Button 
} from "@mui/material"
// #endregion

const Filter = () => {
	const [connection, setConnection] = useState("1st")
	const [locations, setLocations] = useState(["India"])

	const connections = ["1st", "2nd", "3rd+"]
	const locationsList = ["India", "Costa Rica", "Australia", "UAE", "USA", "France"]

	return (
		<section 
            className="
                flex flex-col gap-6 text-xl 
                text-charcoal-100
            "
        >
			{/* Connections */}
			<aside>
				<h3>Connections</h3>
				<ToggleButtonGroup
					value={connection}
					exclusive
				>
					{connections.map((c) => (
						<ToggleButton
							key={c}
							value={c}
							className={`
								h-3 px-4 rounded-full border-0 font-medium tracking-tighter text-lg
								text-gray-400  transition-all duration-300 font-mada normal-case
								${connection === c ? "bg-blue-100 text-white" : "bg-transparent"}
							`}
						>
							{c}
						</ToggleButton>
					))}
				</ToggleButtonGroup>
			</aside>

			{/* Locations */}
			<aside>
				<h3>Locations</h3>
				<div 
                    className="grid grid-cols-2 gap-1 p-2"
                >
					{locationsList.map((loc) => (
						<FormControlLabel
							key={loc}
							control={
								<Checkbox
									checked={locations.includes(loc)}
									className={`
                                        p-1 
                                        ${locations.includes(loc) ? 
                                            "text-blue-100" : 
                                            "text-grey-200"
                                        }
                                    `}
								/>
							}
							label={loc}
							className={`
                                text-sm font-mada tracking-tighter
                                ${locations.includes(loc) ? "text-black" : "text-grey-200"}
                            `}
						/>
					))}
				</div>
			</aside>

			<aside>
				<h3>Locations</h3>
				<div 
                    className="grid grid-cols-2 gap-1 p-2"
                >
					{locationsList.map((loc) => (
						<FormControlLabel
							key={loc}
							control={
								<Checkbox
									checked={locations.includes(loc)}
									className={`
                                        p-1 
                                        ${locations.includes(loc) ? 
                                            "text-blue-100" : 
                                            "text-grey-200"
                                        }
                                    `}
								/>
							}
							label={loc}
							className={`
                                text-sm font-mada tracking-tighter
                                ${locations.includes(loc) ? "text-black" : "text-grey-200"}
                            `}
						/>
					))}
				</div>
			</aside>

			<aside>
				<h3>Locations</h3>
				<div 
                    className="grid grid-cols-2 gap-1 p-2"
                >
					{locationsList.map((loc) => (
						<FormControlLabel
							key={loc}
							control={
								<Checkbox
									checked={locations.includes(loc)}
									className={`
                                        p-1 
                                        ${locations.includes(loc) ? 
                                            "text-blue-100" : 
                                            "text-grey-200"
                                        }
                                    `}
								/>
							}
							label={loc}
							className={`
                                text-sm font-mada tracking-tighter
                                ${locations.includes(loc) ? "text-black" : "text-grey-200"}
                            `}
						/>
					))}
				</div>
			</aside>

			<aside
				className="flex items-start gap-4"
			>
				<Button
					variant="text"
					className="
                        tracking-tighter normal-case font-mada 
                        text-grey-200 rounded-full text-base
                    "
				>
					Reset
				</Button>
				<Button
					className="
                        bg-blue-100 hover:bg-blue-200 rounded-full text-white px-6 w-[40%]
                        gap-2 font-mada font-medium normal-case
                        transition-all ease-in-out delay-100 text-base
                        tracking-tighter h-fit
                    "
				>
					Save
				</Button>
			</aside>
		</section>
	)
}

export default Filter
