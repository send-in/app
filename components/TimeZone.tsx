// #region imports
import {
	Select,
	TextField
} from "@/base"

import {
	Search
} from "@/icons"

import {
	getAbbreviation
} from "@/utils"

import zones from "@/timezones.json"
// #endregion


interface TimeZoneProps {
	value?: string
	onChange?: (zone: string) => void
}

const currentZone: string =
	Intl.DateTimeFormat()
	.resolvedOptions()
	.timeZone

const options = zones.map(
	tz => ({
		label: `${tz} (${getAbbreviation(tz)})`,
		value: tz,
	})
)

const TimeZone = ({
	value,
	onChange,
}: TimeZoneProps) => (
	<Select
		className="dropdown-end text-base desktop:text-xl"
		onChange={(value)=>value}
		value={value || currentZone}
		placeholder="Select Timezone"
		variant="primary"
		options={[
			{
				value: "search",
				label: (
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
			},
			...options
		]}
	/>
)

export default TimeZone
