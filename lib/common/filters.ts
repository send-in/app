// #region imports
import { isKeyOf } from "@/utils"
// #endregion

export const SORT_OPTIONS = [
	{ label: "A-Z", value: "A-Z" },
	{ label: "Z-A", value: "Z-A" },
	{ label: "Recents", value: "Recents" },
]

export const parseFilters = (
	params?: Record<string, unknown>
): Record<string, unknown> => {

    if(!params) return {}

	const { 
        sort,
        ...rest 
    } = params

	const query: Record<string, unknown> = { 
        ...rest 
    }

	if (isKeyOf(SORT_OPTIONS, sort))
		query.sort = SORT_OPTIONS[sort]

	return query
}

export const parseQuery = async (
  searchParams?: Promise<{
    page?: string
    sort?: string
    gender?: string
    flag?: string
    q?: string
    ids?: string[]
  }>
) => {
  const search = await searchParams

  return {
    page: Number(search?.page ?? 1),
    sort: search?.sort ?? "",
    gender: search?.gender ?? "",
    flag: search?.flag ?? "",
    q: search?.q ?? "",
    ids: search?.ids ?? []
  }
}