"use client"

// #region imports
import { useState } from "react"
import {
	Button,
	CheckboxGroup,
	ToggleGroup
} from "@/base"
// #endregion

const Filter = () => {
	const [connection, setConnection] = useState("1st")
	const [locations, setLocations] = useState(["India"])

	const connectionList = [
		{ label: "1st", value: "first" },
		{ label: "2nd", value: "second" },
		{ label: "3rd+", value: "third" },
	]
	const locationsList = [
		{ label: "India", value: "india" },
		{ label: "Costa Rica", value: "costa-rica" },
		{ label: "Australia", value: "australia" },
		{ label: "UAE", value: "uae" },
		{ label: "USA", value: "usa" },
		{ label: "France", value: "france" },
	]

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
				<ToggleGroup
					variant="primary"
					shape="pill"
					options={connectionList}
					value={connection}
					onChange={setConnection}
				/>
			</aside>

			{/* Locations */}
			<aside>
				<h3>Locations</h3>
				<CheckboxGroup
					options={locationsList}
					value={locations}
					onChange={setLocations}
				/>
			</aside>

			<aside>
				<h3>Locations</h3>
				<CheckboxGroup
					options={locationsList}
					value={locations}
					onChange={setLocations}
				/>
			</aside>

			<aside
				className="flex items-start gap-4"
			>
				<Button
					variant="ghost"
				>
					Reset
				</Button>
				<Button
					variant="primary"
				>
					Save
				</Button>
			</aside>
		</section>
	)
}

export default Filter
