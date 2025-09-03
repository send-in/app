"use client"

// #region imports
import { useState } from "react"
import { DateRangePicker } from "@mui/x-date-pickers-pro"

import {
	Button,
	Popover,
} from "@mui/material"

import Image from "next/image"
import Clock from "../Icons/Clock"
import TimeZone from "./TimeZone"
import InformationCard from "./InformationCard"
// #endregion

const buttonClassname = `
	rounded-full text-charcoal-100 bg-grey-100 
	hover:bg-blue-100 hover:text-white tracking-tighter
	px-4 gap-2 text-base font-mada font-normal 
	normal-case py-1 justify-between w-full
	transition-all ease-in-out delay-50
`

const DateTime = ({
	scheduledTime,
	profile
}:{
	scheduledTime?: Date,
	profile:{
		name: string,
		link: string,
		picture: string,
		timezone: string,
	}
}) => {
	
	const [open, setOpen] = useState<boolean>(false)

	const handleClick = () => 
		setOpen(prev=>!prev)

	const handleClose = () => 
		setOpen(false)

	const properTime = (
		scheduledTime ??
		new Date()
	)?.toLocaleDateString(
		"en-GB", 
		{
			day: "2-digit",
			month: "2-digit",
			year: "numeric"
		}
	)

	const properDate= (
		scheduledTime ?? 
		new Date()
	)?.toLocaleTimeString(
		"en-US", 
		{
			hour: "numeric",
			minute: "2-digit",
			hour12: true
		}
	)

	return (
		<>
			<Button
				onClick={handleClick}
				variant="contained"
				className="
					rounded-full bg-blue-100 hover:bg-blue-200 text-white-100 
					px-4 py-1 gap-2 text-base font-mada font-normal
					transition-all ease-in-out delay-100 tracking-tighter
				"
				startIcon={
					<Clock
						fill="#FFF"
					/>
				}
			>
				{properTime} {" "}
				{properDate}
			</Button>

			
			<Popover
				open={open}
				onClose={handleClose}
				slotProps={{
					root:{
						className: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
					},
                    paper: { 
						className: "p-4 rounded-3xl shadow-lg bg-white text-gray-800 w-fit h-fit space-y-5 tracking-tighter" 
					}
                }}
			>
				<aside
					className="flex justify-between"
				>
					<Image
						className="rounded-full h-max w-max"
						alt={profile?.name ?? "SendIn"}
						src="https://media.licdn.com/dms/image/v2/D5603AQH2-Le-GLYQfQ/profile-displayphoto-crop_800_800/B56ZhyEAK4HUAI-/0/1754260309150?e=1759363200&v=beta&t=tSQG_CnXVrLuWg8REMJh1uWrk1NRL7iDLXG_WGKIwYA"
						width={60}
						height={60}
					/>
					
					<div
						className="flex flex-col items-end gap-1 text-2xl"
					>
						<p>
							Aug 13, 8:00 AM 
						</p>

						<TimeZone
							inPopUp
						/>
					</div>
				</aside>

				<InformationCard
					description="time is displayed  as in receiver's time zone"
				/>

				<aside
					className="flex flex-col gap-2"
				>
					<Button
						className={buttonClassname}
					>
						<p>
							Tomorrow morning
						</p>
						<p>{"Aug 14, 8:00 AM"}</p>
					</Button>

					<Button
						className={buttonClassname}
					>
						<p>
							This afternoon
						</p>
						<p>{"Aug 14, 8:00 AM"}</p>
					</Button>

					<Button
						className={buttonClassname}
					>
						<p>
							This evening
						</p>
						<p>{"Aug 14, 8:00 AM"}</p>
					</Button>
				</aside>

				<aside
					className="text-base flex justify-between gap-8 items-center text-grey-200 px-2"
				>
					<p>
						Custom Date/Time
					</p>

					<Button
						className="
							rounded-full bg-grey-100 hover:bg-grey-200 text-charcoal-100 
							px-4 py-1 gap-2 text-base font-mada font-normal normal-case tracking-tighter
						"
						startIcon={
							<Clock
								fill="#2F2F2F"
							/>
						}
					>
						{properTime}{" "}
						{properDate}
					</Button>
				</aside>
			</Popover> 
			
		</>
	)
}

export default DateTime