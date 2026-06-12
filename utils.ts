
export type ICurrency =
    | "USD"
    | "INR"
    | "EUR"
    | "GBP"
    | "AED"

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

export type IClassValue = string | number | boolean | undefined | null | IClassValue[]

export const capitalize = (
    str: string
) => {

    if (
        !str ||
        typeof str !== "string"
    )
        return ""

    const res = str
        .split(/[-_]/g)
        .join(" ")

    return (
        res.charAt(0)
            .toUpperCase() +
        res.slice(1)
    )
}

export const validImageSrc = (src?: string | null): string | undefined => {
    if (src == null) return undefined
    const s = String(src).trim()
    if (!s || s === "undefined" || s === "null") return undefined
    return s
}

export const isKeyOf = <T extends object>(
	obj: T,
	key: unknown
): key is keyof T => {
	return typeof key === "string" && key in obj
}

export const hasUrl = (item: unknown): item is {
	url: string
} => {
	return (
		typeof item === "object" &&
		item !== null &&
		"url" in item &&
		typeof (item as any).url === "string" &&
		String((item as any).url)?.startsWith("http")
	)
}

export const injectImages = <
	T extends object,
	I extends object
>(
	cards: T[],
	images: I[],
	cols: number
): Array<T | I> => {
	if (!cards.length || !images.length || cols <= 0) return [...cards]

	const totalRows = Math.floor(cards.length / cols)
	const usableImages = images.slice(0, Math.floor(totalRows / 2))
	if (!usableImages.length) return [...cards]

	const rows =
		usableImages.length === 1
			? [0]
			: usableImages.map((_, i, a) =>
					Math.round((i * (totalRows - 2)) / (a.length - 1))
			  )

	const result: Array<T | I> = []
	let row = 0
	let image = 0

	for (let i = 0; i < cards.length; i++) {
		if (i % cols === 0) {
			if (row === rows[image]) result.push(usableImages[image++])
			row++
		}
		result.push(cards[i])
	}

	return result
}

export const isObjectComplete = (
  obj: Record<string, any>,
  allowZero?: boolean
): boolean => {
  if (!obj || typeof obj !== "object")
    return false

  return Object.values(obj).every(value => {
    if (value == null)
      return false

    if (typeof value === "number" && value === 0)
      return !!allowZero

    if (typeof value === "string" && value.trim() === "")
      return false

    if (Array.isArray(value) && value.length === 0)
      return false

    if (typeof value === "object" && !Array.isArray(value)) {
      if (Object.keys(value).length === 0)
        return false

      return isObjectComplete(
        value, 
        allowZero
      )
    }

    return true
  })
}

export const parseDate = (value: string) => {
    const [day, month, year] = value.split("/")
    return new Date(
        Number(year),
        Number(month) - 1,
        Number(day)
    )
}

export const formatDateTime = (
	date: Date
) => ({
    value: date,
	date: date?.toLocaleDateString(
		"en-US",
		{
            weekday: "short",
			month: "short",
			day: "numeric",
		},
	),
	time: date?.toLocaleTimeString(
		"en-US",
		{
			hour: "numeric",
			minute: "2-digit",
			hour12: true,
		},
	),
})

export const formatCurrent = (
	date: Date,
	timeZone: string,
) => ({
	date: date?.toLocaleDateString(
		"en-US",
		{
			timeZone,
			weekday: "short",
			month: "short",
			day: "numeric",
		},
	),
	time: date?.toLocaleTimeString(
		"en-US",
		{
			timeZone,
			hour: "numeric",
			minute: "2-digit",
			hour12: true,
		},
	),
})

export const toDateTimeLocal = (
	date?: Date,
	timezone?: string,
) => {
	const formatter =
		new Intl.DateTimeFormat(
			"sv-SE",
			{
				timeZone: timezone,
				year: "numeric",
				month: "2-digit",
				day: "2-digit",
				hour: "2-digit",
				minute: "2-digit",
				hourCycle: "h23",
			},
		)

	const parts = Object.fromEntries(
		formatter
			.formatToParts(date)
			.filter(
				part =>
					part.type !==
					"literal",
			)
			.map(part => [
				part.type,
				part.value,
			]),
	)

	return (
		`${parts.year}-${parts.month}-${parts.day}` +
		`T${parts.hour}:${parts.minute}`
	)
}

export const formatDateTimeLocal = (
	value?: string,
) => {
	if (!value)
		return {
			date: "",
			time: "",
		}

	const [datePart, timePart] =
		value.split("T")

	const [year, month, day] =
		datePart
			.split("-").
			map(Number)

	const date = new Date(
		year,
		month - 1,
		day,
	)

	const time = new Date(
		`2000-01-01T${timePart}`,
	)

	return {
		date: date.toLocaleDateString(
			"en-US",
			{
				weekday: "short",
				month: "short",
				day: "numeric",
			},
		),

		time: time.toLocaleTimeString(
			"en-US",
			{
				hour: "numeric",
				minute: "2-digit",
				hour12: true,
			},
		),
	}
}

export const parseLexicalText = (
	value?: string,
) => {
	if (!value)
		return ""

	try {
		const json = JSON.parse(value)

		return json.root.children
			.flatMap(
				(node: any) =>
					node.children ?? [],
			)
			.map(
				(node: any) =>
					node.text ?? "",
			)
			.join(" ")
	} catch {
		return value
	}
}

export const compareLexicalText = (
	value?: string,
): string => {
	if (!value)
		return ""

	try {
		const json = JSON.parse(value)

		const parseNode = (
			node: any,
		): string => {
			switch (node.type) {
				case "text": {
					let text =
						node.text ?? ""

					if (node.format & 1)
						text = `B:${text}`

					if (node.format & 2)
						text = `I:${text}`

					if (node.format & 4)
						text = `S:${text}`

					if (node.format & 8)
						text = `U:${text}`

					return text
				}

				case "list":
					return (
						`L:${node.listType}\n` +
						(node.children ?? [])
							.map(parseNode)
							.join("\n")
					)

				case "listitem":
					return (
						"LI:" +
						(node.children ?? [])
							.map(parseNode)
							.join("")
					)

				case "paragraph":
					return (
						(node.children ?? [])
							.map(parseNode)
							.join("") +
						"\n"
					)

				default:
					return (
						(node.children ?? [])
							.map(parseNode)
							.join("")
					)
			}
		}

		return parseNode(
			json.root,
		)
			.trim()
	} catch {
		return value.trim()
	}
}