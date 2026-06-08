"use client"

// #region imports
import { useEffect, useState } from "react"
import Image from "next/image"

import { useTimezone } from "@/hooks"
import { formatCurrent } from "@/utils"

import { TimeZone } from "@/components"
import { Clock, Logo } from "@/icons"

import {
	Popover,
	Button,
	Information
} from "@/base"
// #endregion

const DateTime = ({
    onChange,
	scheduledAt,
	profile,
}:{
    onChange?: (value: Date) => void
	scheduledAt?: Date
	profile?:{
		name?: string
		picture?: string
		timezone?: string
	}
}) => {
    const [internalTimezone, setTimezone] = useState(
        profile?.timezone ?? "Asia/Kolkata"
    )

    const {
        timeZone,
        current,
        morning,
        afternoon,
        evening,
    } = useTimezone("", internalTimezone)

    const properClock = scheduledAt ? 
        formatCurrent(scheduledAt, timeZone) : 
        current

    const properDate = properClock.date
    const properTime = properClock.time

    useEffect(
        ()=>setTimezone(profile?.timezone ?? "Asia/Kolkata"),
        [profile?.timezone]
    )

	return (
		<Popover
            className="
                top-36 desktop:top-52 
                right-0 desktop:right-48
                space-y-4 max-w-[28%]!
                min-w-max
            "
			trigger={
				<Button
					className="gap-3"
					variant="primary"
					startIcon={
						<Clock/>
					}
				>
					<span className="
                        flex items-center justify-between 
                        w-fit gap-3 shrink-0
                    ">
						<span>{properTime}</span>
						<span>{properDate}</span>
					</span>
				</Button>
			}
		>
			<section className="
                flex justify-between 
                items-center px-2
            ">
                {
                    profile ?
                    <Image
                        className="rounded-full h-14 w-14 mt-2 ml-2"
                        alt={profile?.name ?? "SendIn"}
                        src={profile?.picture ?? "/profile.svg"}
                        width={50}
                        height={50}
                    /> :
                    <Logo 
                        size={60} 
                        className="fill-blue-100"
                    />
                }

				<aside className="
                    flex flex-col w-max
                    gap-1 text-xl ml-auto
                ">
					<p className="mr-2 text-right">
                        {`${current.date}, ${current.time}`}
                    </p>

					<TimeZone 
                        value={internalTimezone}
                        onChange={(zone)=>setTimezone(zone)}
                        className="min-w-full!"
                    />
				</aside>
			</section>

            {
                profile &&
                <Information
                    description="time is displayed  as in receiver's time zone"
                />
            }

			<section
				className="flex flex-col gap-2"
			>
				<Button
					variant="primary"
					className="!py-1"
					textClassName="justify-between w-full !flex"
				>
						<span>{morning?.label}</span>
						<span>{`${morning?.date}, ${morning?.time}`}</span>
				</Button>

				<Button
					textClassName="justify-between w-full !flex"
					variant="neutral"
					className="!py-1"
				>
						<span>{afternoon?.label}</span>
						<span>{`${afternoon?.date}, ${afternoon?.time}`}</span>
				</Button>

				<Button
                    textClassName="justify-between w-full !flex"
					variant="neutral"
					className="!py-1"
				>
						<span>{evening?.label}</span>
						<span>{`${evening?.date}, ${evening?.time}`}</span>
				</Button>
			</section>

			<section
				className="
                    text-base desktop:text-xl flex 
                    justify-between gap-4 items-center 
                    text-grey-200 px-2
                "
			>
				<p>
					Custom Date/Time
				</p>

				<Button
					className="!py-1"
					startIcon={
						<Clock
							size={18}
						/>
					}
				>
					{properDate}{", "}
					{properTime}
				</Button>
			</section>
		</Popover>
	)
}

export default DateTime
