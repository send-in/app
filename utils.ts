// Simple className utility (no external dependencies)
type ClassValue = string | number | boolean | undefined | null | ClassValue[]

export const cn = (...inputs: ClassValue[]): string => {
  return inputs
    .flat()
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export const getAbbreviation = (timezone: string): string => {
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

export const parseQueryParams = <T extends string = string>(
	query: string
): Record <T, string | string[]> => {
	const params = new URLSearchParams(query)
	const result: Record<string, string | string[]> = {}

	params.forEach((value, key) => {
		const decoded = decodeURIComponent(value)
		decoded.includes(",") ?
			result[key] = decoded.split(",").filter(Boolean) :
			result[key] = decoded
	})

	return result
}
