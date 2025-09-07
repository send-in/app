"use client"

// #region imports
import { useMemo } from "react"

import { Select, TextField } from "@/base"
import { Search } from "@/icons"

import zones from "@/content/timezones.json"
// #endregion

const currentZone: string = Intl.DateTimeFormat().resolvedOptions().timeZone
const getAbbreviation = (timezone: string): string => {
    try {
        const date = new Date()
        const formatter = new Intl.DateTimeFormat("en-US", {
            timeZone: timezone,
            timeZoneName: "short",
        })
        const parts = formatter.formatToParts(date)
        const abbr = parts.find((p) => p.type === "timeZoneName")?.value
        return abbr ?? timezone
    } catch {
        return timezone
    }
}

const Searchbar = (
	<div
		className="sticky -top-2 bg-white pt-2"
	>
		<TextField
			variant="filled"
			placeholder="Search"
			endIcon={<Search />}
		/>
	</div>
)

interface TimeZoneProps {
    value?: string
    onChange?: (zone: string) => void
    inPopUp?: boolean
}

const TimeZone = ({
    value,
    onChange,
    inPopUp,
}: TimeZoneProps) => {
    const options = useMemo(() => {
        const list = zones.map((tz) => ({
            label: `${tz} (${getAbbreviation(tz)})`,
            value: tz,
        }))
        return list
    }, [])



    return (
        <div className="flex flex-col gap-2">
            <Select
                options={[
					{
						value: "search",
						label: Searchbar
					},
					...options
				]}
                value={value || currentZone}
                placeholder="Select Timezone"
                size={inPopUp ? "sm" : "md"}
                variant="primary"
                className={inPopUp ? "!py-1 w-fit" : "dropdown-end w-fit"}
                onChange={(value)=>value}
            />
        </div>
    )
}

export default TimeZone
