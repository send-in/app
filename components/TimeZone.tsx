"use client"

// #region imports
import { useState } from "react"
import {
  Button,
  Menu,
  MenuItem,
} from "@mui/material"
import zones from "@/templates/timezones.json"
import Globe from "../Icons/Globe"
import SearchBar from "./SearchBar"
// #endregion

const currentZone: string = Intl.DateTimeFormat().resolvedOptions().timeZone

const getAbbreviation = (
	timezone: string
): string => {
	try {
		const date = new Date()
		const formatter = new Intl.DateTimeFormat("en-US", {
			timeZone: timezone,
			timeZoneName: "shortGeneric",
		})
		const parts = formatter.formatToParts(date)
		const abbr = parts.find((p) => p.type === "timeZoneName")?.value
		return abbr ?? timezone
	} 
	catch {
		return timezone
	}
}

interface TimeZoneProps {
	value: string
	onChange: (zone: string) => void
	unselectLabel?: string
	inPopUp?: boolean
}

const TimeZone = ({
	value,
	onChange,
	unselectLabel,
	inPopUp,
}: TimeZoneProps) => {

	const [open, setIsOpen] = useState<boolean>(false)

	const handleClick = () => 
		setIsOpen(true)

	const handleClose = () => 
		setIsOpen(false)

	const handleSelect = (zone: string) => {
		onChange(zone)
		handleClose()
	}

	return (
		<>
			<Button
				onClick={handleClick}
				startIcon={
					<Globe 
						fill="#FFF"
						size={inPopUp? 16 : 20}
					/>
				}
				className={`
					rounded-full bg-blue-100 hover:bg-blue-200 text-white 
					gap-2 text-base font-mada font-normal normal-case
					transition-all ease-in-out delay-100 w-max
					${inPopUp ? "py-1 px-3" : "px-4 py-2"} tracking-tighter
				`}
			>
				{
					getAbbreviation(
						value || 
						currentZone
					)
				}
			</Button>

			<Menu
				open={open}
				onClose={handleClose}
				slotProps={{
					paper:{
						className:"shadow-none rounded-4xl no-scrollbar p-0"
					},
					list:{
						className:"gap-10 p-0"
					},
				}}
			>
				<div className="sticky top-0 z-10 bg-white p-2 pt-4">
					<SearchBar />
				</div>


				{
					unselectLabel && (
					<MenuItem
						className="rounded-full m-2 p-2 px-4"
						onClick={() => handleSelect("")}
					>
						{unselectLabel}
					</MenuItem>
				)}
				{
					zones.map((tz) => (
						<MenuItem
							className="rounded-full m-2 p-2 px-4"
							key={tz}
							selected={tz === value}
							onClick={() => handleSelect(tz)}
						>
							{tz} &nbsp; ({getAbbreviation(tz)})
						</MenuItem>
					))
				}
			</Menu>
		</>
	)
}

export default TimeZone