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
	grid?:boolean
	component: (item: T) => ReactNode
}

const PaginationWrapper = <T extends any>({
	items,
	count = 8,
	grid = false,
	component,
}: PaginationWrapperProps<T>) => {

	const [page, setPage] = useState(1)

	const totalPages = Math.ceil(items.length / count)
	const startIndex = (page - 1) * count

	const paginatedItems = items.slice(
		startIndex,
		startIndex + count
	)

	return (
		<div
			className="w-full h-full justify-between flex flex-col items-end gap-4"
		>
			<div
				className="
					w-full h-full flex flex-col gap-3 data-[grid=true]:gap-4
					data-[grid=true]:grid data-[grid=true]:grid-cols-5
					data-[grid=true]:mb-3 items-center
				"
				data-grid={grid}
			>
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

export default PaginationWrapper
