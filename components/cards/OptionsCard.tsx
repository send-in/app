"use client"

// #region imports
import Image from "next/image"

import { 
    IScheduledConnection, 
    ITemplate 
} from "@/lib"

import { Select } from "@/base"
import { DateTime } from "@/components"
import { toDateTimeLocal } from "@/utils"
import { useTimezone } from "@/hooks"

import {
	Clock,
	Globe
} from "@/icons"

// #endregion

interface IOptionCard {
    name: string
	picture: string
	profile: string
	bio?: string
	country?: string
    templates: ITemplate[]

    selected: boolean
    setSelected: ()=>void
    handleUpdate: (
        id: string, 
        updates: Partial<IScheduledConnection>
    ) => void

    timeOverride?: string
    templateOverride?: ITemplate
    timezoneOverride?: string
}

const OptionsCard = ({
	bio,
	name,
	picture,
    profile,
	country,
    templates,

	selected,
	setSelected,
    handleUpdate,

    timeOverride,
    templateOverride,
    timezoneOverride,
}: IOptionCard) => {

	const {
		segment,
		iso3,
        timeZone
	} = useTimezone(
		country || "India"
	)

    const template = templateOverride
    const timezone = timezoneOverride || timeZone

    console.log(timezoneOverride, timeZone)

	return (
		<li
			data-selected={selected}
			className="
				list-none flex text-base desktop:text-xl items-center
				text-grey-200 justify-between w-full select-none
				cursor-pointer! group/card
			"
		>
			<aside
                onClick={()=>setSelected()}
				className="
					flex items-center justify-between gap-4 w-[52%] border-2
					border-grey-100 rounded-2xl p-1 pr-4 pl-2 smooth !delay-50
                    hover:border-blue-100 active:border-blue-200
					group-data-[selected=true]/card:border-blue-200 
				"
			>

				<div className="
                    group flex gap-2 
                    items-center
                ">
					<Image
						className="rounded-full"
						alt={name ?? "SendIn"}
						src={picture}
						width={45}
						height={45}
					/>

					<aside>
						<h3 className="
                            text-xl text-blue-100 
                            group-hover:text-blue-200
                            smooth 
                        ">
							{name}
						</h3>

						<p className="
                            text-base desktop:text-xl 
                            font-medium truncate
                            max-w-[30ch]
                        ">
							{bio}
						</p>
					</aside>

				</div>

				<aside className="
                    text-base desktop:text-xl w-[28%]
                    text-charcoal-100 flex gap-10
                ">
					<p className="
                        flex gap-3 items-center 
                        fill-blue-100
                    ">
						<Globe size={18}/>
						{iso3}
					</p>

					<p className="
                        flex gap-3 items-center 
                        fill-orange capitalize
                    ">
						<Clock size={18}/>
						{segment}
					</p>
				</aside>
			</aside>



			<aside
				className="flex gap-10"
			>
				<Select<ITemplate>
                    buttonClassName="w-56"
                    size="md"
                    variant="primary"
                    placeholder="Select Template"
                    disabled={!templates?.length}
                    options={templates}
                    selected={template}
                    onChange={(value)=>
                        handleUpdate(
                            profile,
                            { template: value }
                        )
                    }
                />

				<DateTime
                    scheduledAt={new Date()}
                    onDateChange={(value)=>
                        handleUpdate(
                            profile,
                            {
                                dateTime: value
                            }
                        )
                    }

                    onTimezoneChange={(value)=>
                        handleUpdate(
                            profile,
                            { timezone: value }
                        )
                    }

                    profile={{
                        name,
                        picture,
                        timezone,
                    }}
                />

			</aside>
		</li>
	)
}

export default OptionsCard
