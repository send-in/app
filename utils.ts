
export type ICurrency =
    | "USD"
    | "INR"
    | "EUR"
    | "GBP"
    | "AED"

const FORMAT_BOLD = 1
const FORMAT_ITALIC = 2
const FORMAT_STRIKETHROUGH = 4
const FORMAT_UNDERLINE = 8

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

export const createDateInTimezone = (
    year: number,
    month: number,
    day: number,
    hour: number,
    timezone: string,
    minute: number = 0,
): Date => {
    const approxMs = Date.UTC(year, month - 1, day, hour, minute, 0)
 
    const parts = Object.fromEntries(
        new Intl.DateTimeFormat("en-US", {
            timeZone: timezone,
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: false,
        })
            .formatToParts(new Date(approxMs))
            .filter(p => p.type !== "literal")
            .map(p => [p.type, p.value]),
    )
 
    const tzMs = Date.UTC(
        Number(parts.year),
        Number(parts.month) - 1,
        Number(parts.day),
        Number(parts.hour),
        Number(parts.minute),
        Number(parts.second),
    )
 
    return new Date(2 * approxMs - tzMs)
}

export const toDateTimeLocal = (
    date?: Date,
    timezone?: string,
) => {
    const formatter = new Intl.DateTimeFormat("sv-SE", {
        timeZone: timezone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h23",
    })
 
    const parts = Object.fromEntries(
        formatter
            .formatToParts(date)
            .filter(part => part.type !== "literal")
            .map(part => [part.type, part.value]),
    )
 
    return (
        `${parts.year}-${parts.month}-${parts.day}` +
        `T${parts.hour}:${parts.minute}`
    )
}

export const formatInTimezone = (
    date: Date,
    timezone: string,
) => ({
    date: date.toLocaleDateString("en-US", {
        timeZone: timezone,
        weekday: "short",
        month: "short",
        day: "numeric",
    }),
    time: date.toLocaleTimeString("en-US", {
        timeZone: timezone,
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    }),
})

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

export const parseLexical = (
    value?: string,
): string => {
    if (!value)
        return ""

    try {
        const document = JSON.parse(value)
        return (document.root.children ?? [])
            .map(renderBlock)
            .join("\n")
            .trim()
    } catch {
        return value
    }
}

const renderBlock = (node: any): string => {
    switch (node.type) {
        case "paragraph":
            return renderInline(node)

        case "list":
            return (node.children ?? [])
                .map((item: any, index: number) => {
                    const text = renderInline(item).trim()

                    if (!text)
                        return ""

                    return node.listType === "number"
                        ? `${index + 1}. ${text}`
                        : `• ${text}`
                })
                .filter(Boolean)
                .join("\n")

        default:
            return renderInline(node)
    }
}

const renderInline = (node: any): string => {
    switch (node.type) {
        case "text":
            return applyFormatting(
                node.text ?? "",
                node.format ?? 0,
            )

        case "linebreak":
            return "\n"

        default:
            return (node.children ?? [])
                .map(renderInline)
                .join("")
    }
}

const applyFormatting = (
    text: string,
    format: number,
): string => {
    let result = text

    if (format & FORMAT_BOLD)
        result = toBold(result)

    if (format & FORMAT_ITALIC)
        result = toItalic(result)

    if (format & FORMAT_UNDERLINE)
        result = toUnderline(result)

    if (format & FORMAT_STRIKETHROUGH)
        result = toStrike(result)

    return result
}

const toBold = (text: string) =>
    [...text]
        .map(char => {
            const code = char.charCodeAt(0)

            if (code >= 48 && code <= 57)
                return String.fromCodePoint(
                    0x1D7CE + (code - 48),
                )

            if (code >= 65 && code <= 90)
                return String.fromCodePoint(
                    0x1D5D4 + (code - 65),
                )

            if (code >= 97 && code <= 122)
                return String.fromCodePoint(
                    0x1D5EE + (code - 97),
                )

            return char
        })
        .join("")

const toItalic = (text: string) =>
    [...text]
        .map(char => {
            const code = char.charCodeAt(0)

            if (code >= 65 && code <= 90)
                return String.fromCodePoint(
                    0x1D608 + (code - 65),
                )

            if (code >= 97 && code <= 122)
                return String.fromCodePoint(
                    0x1D622 + (code - 97),
                )

            return char
        })
        .join("")

const toUnderline = (text: string) =>
    [...text]
        .map(char => `${char}\u0332`)
        .join("")

const toStrike = (text: string) =>
    [...text]
        .map(char => `${char}\u0336`)
        .join("")