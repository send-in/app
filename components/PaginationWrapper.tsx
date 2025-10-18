"use client"

// #region imports
import {
	ReactNode,
	useState
} from "react"

import Pagination from "@/base/Pagination"
// #endregion

interface PaginationWrapperProps<T> {
	items: T[]
	count?: number
	component: (item: T) => ReactNode
}

export default function PaginationWrapper<T>({
	items,
	count = 8,
	component,
}: PaginationWrapperProps<T>) {

	const [page, setPage] = useState(1)

	const totalPages = Math.ceil(items.length / count)
	const startIndex = (page - 1) * count

	const paginatedItems = items.slice(
		startIndex,
		startIndex + count
	)

	return (
		<div
			className="w-full h-[85%] justify-between flex flex-col items-start"
		>
			<div className="w-full flex flex-col gap-6">
				{
					paginatedItems.map(
						(item) => component(item)
					)
				}
			</div>

			{totalPages > 1 &&
				<Pagination
					page={page}
					count={totalPages}
					onChange={setPage}
				/>
			}
		</div>
	)
}
