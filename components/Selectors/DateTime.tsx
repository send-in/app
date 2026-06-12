"use client"

// #region imports
import { useEffect, useState } from "react"
import Image from "next/image"

import { 
    formatCurrent, 
    toDateTimeLocal,
    formatDateTimeLocal, 
} from "@/utils"

import { useTimezone } from "@/hooks"
import { TimeZone } from "@/components"
import { Clock, Logo } from "@/icons"

import {
	Popover,
	Button,
	Information,
    DateTimeField
} from "@/base"
// #endregion

const DateTime = ({
    onTimezoneChange,
    onDateChange,
	scheduledAt,
	profile,
}:{
    onTimezoneChange?: (value: string) => void
    onDateChange?: (value: string) => void
	scheduledAt?: Date
	profile?:{
		name?: string
		picture?: string
		timezone?: string
	}
}) => {
    const [open, setOpen] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const [internalDateTime, setDateTime] = useState<string>("")
    const [internalTimezone, setTimezone] =  useState<string>(
        profile?.timezone || "Asia/Kolkata"
    )
    
    const {
        current,
        morning,
        afternoon,
        evening,
    } = useTimezone("", internalTimezone)

    const properClock = formatCurrent(scheduledAt!, internalTimezone)
    const {date, time} = internalDateTime ? 
    formatDateTimeLocal(internalDateTime) : properClock
    
    useEffect(() => {
        if(profile?.timezone)
            setTimezone(profile?.timezone)
    }, [profile?.timezone])

    useEffect(() => {
        if (
            scheduledAt &&
            internalTimezone
        ) {
            setDateTime(
                toDateTimeLocal(
                    scheduledAt,
                    internalTimezone,
                ),
            )
        }
    }, [
        scheduledAt,
        internalTimezone,
    ])

    if(open) console.log(scheduledAt, internalTimezone)

	return (
		<Popover
            className="
                top-36 desktop:top-52 
                right-0 desktop:right-48
                space-y-4 max-w-[28%]!
                min-w-max
            "
            modalOpen={open}
			trigger={
				<Button
					className="gap-3 min-w-58!"
					variant="primary"
                    onClick={()=>setOpen(true)}
					startIcon={<Clock/>}
				>
					<span className="
                        flex items-center justify-between 
                        w-fit gap-3 shrink-0
                    ">
						<span>{time}</span>
						<span>{date}</span>
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
                        onChange={setTimezone}
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
                    onClick={() =>
                        morning?.value &&
                        setDateTime(
                            toDateTimeLocal(
                                morning.value,
                                internalTimezone,
                            ),
                        )
                    }
				>
						<span>{morning?.label}</span>
						<span>{`${morning?.date}, ${morning?.time}`}</span>
				</Button>

				<Button
					textClassName="justify-between w-full !flex"
					variant="neutral"
					className="!py-1"
                    onClick={() =>
                        afternoon?.value &&
                        setDateTime(
                            toDateTimeLocal(
                                afternoon.value,
                                internalTimezone,
                            ),
                        )
                    }
				>
						<span>{afternoon?.label}</span>
						<span>{`${afternoon?.date}, ${afternoon?.time}`}</span>
				</Button>

				<Button
                    textClassName="justify-between w-full !flex"
					variant="neutral"
					className="!py-1"
                    onClick={() =>
                        evening?.value &&
                        setDateTime(
                            toDateTimeLocal(
                                evening.value,
                                internalTimezone,
                            ),
                        )
                    }
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

                <DateTimeField
                    value={internalDateTime}
                    onChange={setDateTime}
                    startIcon={<Clock size={18}/>}
                />
			</section>

            <section
                className="
                    flex justify-end gap-2
                    pt-2 border-t border-grey-100
                "
            >
                <Button
                    variant="neutral"
                    size="auto"
                    onClick={() => {
                        if (scheduledAt) {
                            setDateTime(
                                toDateTimeLocal(
                                    scheduledAt,
                                    internalTimezone,
                                ),
                            )
                        }

                        setOpen(false)
                    }}
                >
                    Cancel
                </Button>

                <Button
                    size="auto"
                    loading={loading}
                    loadingText="Saving"
                    onClick={() => {
                        if (internalDateTime) {
                            setLoading(true)

                            onTimezoneChange?.(internalTimezone)
                            onDateChange?.(internalDateTime)

                            setOpen(false)
                            setLoading(false)
                        }
                    }}
                >
                    Save
                </Button>
            </section>
		</Popover>
	)
}

export default DateTime
