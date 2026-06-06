"use client"

import { useEffect, useMemo, useState } from "react"

import { formatCurrent, formatDateTime } from "@/utils"

import {
	getTimezonesForCountry,
} from "countries-and-timezones"

import {
	byCountry,
} from "country-code-lookup"

type Segment =
	| "morning"
	| "afternoon"
	| "evening"
	| "night"
    

export const useTimezone = (
	country: string,
	zone?: string,
) => {
	const [now, setNow] = useState(
		() => new Date(),
	)

	const code = useMemo(
		() => byCountry(
			country || "India",
		),
		[country],
	)

	const internalTimezone = useMemo(
		() => getTimezonesForCountry(
			code?.iso2 || "IN",
		)?.at(0),
		[code?.iso2],
	)

	const timeZone =
		zone ??
		internalTimezone?.name ??
		"Asia/Kolkata"

	const parts = useMemo(
		() => Object.fromEntries(
			new Intl.DateTimeFormat(
				"en-US",
				{
					timeZone,
					year: "numeric",
					month: "numeric",
					day: "numeric",
					hour: "numeric",
					minute: "numeric",
					second: "numeric",
					hour12: false,
				},
			)
				.formatToParts(now)
				.filter(
					part =>
						part.type !== "literal",
				)
				.map(
					part => [
						part.type,
						part.value,
					],
				),
		),
		[now, timeZone],
	)

	const year = Number(parts.year)
	const month = Number(parts.month)
	const day = Number(parts.day)
	const hour = Number(parts.hour)

	const segment: Segment =
		hour >= 5 && hour < 12
			? "morning"
			: hour >= 12 && hour < 17
				? "afternoon"
				: hour >= 17 && hour < 21
					? "evening"
					: "night"

	const createDate = (
		dayOffset: number,
		hour: number,
	) => new Date(
		year,
		month - 1,
		day + dayOffset,
		hour,
		0,
		0,
		0,
	)

	let morning
	let afternoon
	let evening

	switch (segment) {
		case "morning":
			morning = {
                label:
                    hour < 8
                        ? "This morning"
                        : "Tomorrow morning",
                ...formatDateTime(
                    createDate(
                        hour < 8 ? 0 : 1,
                        8,
                    ),
                ),
            }

            afternoon = {
                label: "This afternoon",
                ...formatDateTime(
                    createDate(0, 14),
                ),
            }

            evening = {
                label: "This evening",
                ...formatDateTime(
                    createDate(0, 18),
                ),
            }

            break

		case "afternoon":
			morning = {
				label: "Tomorrow morning",
				...formatDateTime(
					createDate(1, 8)
				),
			}

			afternoon = {
				label: "Tomorrow afternoon",
				...formatDateTime(
					createDate(1, 14)
				),
			}

			evening = {
				label: "This evening",
				...formatDateTime(
					createDate(0, 18)
				),
			}

			break
        
        case "night":
            morning = {
                label: "Later this morning",
                ...formatDateTime(
                    createDate(0, 8),
                ),
            }

            afternoon = {
                label: "This afternoon",
                ...formatDateTime(
                    createDate(0, 14),
                ),
            }

            evening = {
                label: "This evening",
                ...formatDateTime(
                    createDate(0, 18),
                ),
            }

            break

        case "evening":
            morning = {
                label: "Tomorrow morning",
                ...formatDateTime(
                    createDate(1, 8),
                ),
            }

            afternoon = {
                label: "Tomorrow afternoon",
                ...formatDateTime(
                    createDate(1, 14),
                ),
            }

            evening = {
                label: "Tomorrow evening",
                ...formatDateTime(
                    createDate(1, 18),
                ),
            }

        break

		default:
			morning = {
				label: "Tomorrow morning",
				...formatDateTime(
					createDate(1, 8)
				),
			}

			afternoon = {
				label: "Tomorrow afternoon",
				...formatDateTime(
					createDate(1, 14)
				),
			}

			evening = {
				label: "Tomorrow evening",
				...formatDateTime(
					createDate(1, 18)
				),
			}
	}

	useEffect(() => {
		const interval = setInterval(
			() => setNow(
				new Date(),
			),
			30_000,
		)

		return () => clearInterval(
			interval,
		)
	}, [])

	return {
		now,
		segment,
		timeZone,

		current: formatCurrent(
            now,
            timeZone
        ),

		morning,
		afternoon,
		evening,

		...code,
		...internalTimezone,
	}
}