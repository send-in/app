// #region Imports
import { getTimezonesForCountry } from "countries-and-timezones"
import { byCountry } from "country-code-lookup"
// #endregion

export const useTimezone = (
	country: string,
) => {
	let segment
	const now = new Date()

	const code = byCountry(
		country || ""
	)

	const timezone = getTimezonesForCountry(
		code?.iso2 || ""
	)?.at(0)


	const localTime = new Date(
		now.toLocaleString('en-US', {
			timeZone: timezone?.name || "UTC"
		})
	)

	const hour = localTime.getHours()

	if (hour >= 5 && hour < 12) {
		segment = "morning"
	}
	else if (hour >= 12 && hour < 17) {
		segment = "afternoon"
	}
	else if (hour >= 17 && hour < 21) {
		segment = "evening"
	}
	else {
		segment = "night"
	}

	return {
		segment,
		localTime,

		...code,
		...timezone,
	}
}
