"use client"

// #region imports
import {
	HTMLAttributes,
	forwardRef
} from "react"

import {
	cn
} from "@/utils/cn"

import {
	Chevron
} from "@/icons"
// #endregion


const paginationVariants = {
	base: `
		flex items-center gap-2 select-none
	`,

	button: `
		btn btn-circle btn-sm transition-all ease-in-out duration-200
		hover:scale-105 active:scale-95 focus:outline-none
		disabled:opacity-50 disabled:cursor-not-allowed
		disabled:hover:scale-100
	`,

	variants: {
		default: `
			btn-ghost hover:btn-neutral
		`,

		active: `
			btn-primary text-primary-content
		`,

		navigation: `
			btn-ghost hover:btn-neutral
		`,
	},

	sizes: {
		small: "btn-xs w-8 h-8 text-xs",
		medium: "btn-sm w-10 h-10 text-sm",
		large: "btn-md w-12 h-12 text-base",
	},

	ellipsis: `
		px-2 text-base-content/60 select-none pointer-events-none
	`
}

export interface PaginationProps
extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
	page: number
	count: number
	siblingCount?: number
	size?: keyof typeof paginationVariants.sizes
	variant?: 'default' | 'active' | 'navigation'
	disabled?: boolean
	showFirstButton?: boolean
	showLastButton?: boolean

	onChange?: (
		event: React.MouseEvent<HTMLButtonElement>,
		value: number
	) => void

	className?: string
}

function range(start: number, end: number): number[] {
	return Array.from({ length: end - start + 1 }, (_, i) => start + i)
}

const Pagination = forwardRef<HTMLElement, PaginationProps>(
	(
		{
			page,
			count,
			siblingCount = 1,
			size = "medium",
			variant = "default", // eslint-disable-line @typescript-eslint/no-unused-vars
			disabled = false,
			showFirstButton = false,
			showLastButton = false,
			onChange,
			className = "",
			...props
		},
		ref
	) => {

		const handleClick = (value: number) => (
			event: React.MouseEvent<HTMLButtonElement>
		) => {
			if (onChange && !disabled && value !== page) {
				onChange(event, value)
			}
		}

		// Build pages array like MUI
		const totalNumbers = siblingCount * 2 + 5 // first + last + current + 2*siblings + 2 dots
		const pages: (number | "start-ellipsis" | "end-ellipsis")[] = []

		if (count <= totalNumbers) {
			pages.push(...range(1, count))
		} else {
			const leftSibling = Math.max(page - siblingCount, 2)
			const rightSibling = Math.min(page + siblingCount, count - 1)

			pages.push(1)
			if (leftSibling > 2) pages.push("start-ellipsis")

			for (let i = leftSibling; i <= rightSibling; i++) {
				pages.push(i)
			}

			if (rightSibling < count - 1) pages.push("end-ellipsis")
			pages.push(count)
		}

		const navigationClasses = cn(
			paginationVariants.button,
			paginationVariants.variants.navigation,
			paginationVariants.sizes[size]
		)

		const pageButtonClasses = (isActive: boolean) => cn(
			paginationVariants.button,
			isActive
				? paginationVariants.variants.active
				: paginationVariants.variants.default,
			paginationVariants.sizes[size]
		)

		const containerClasses = cn(
			paginationVariants.base,
			className
		)

		const ellipsisClasses = cn(
			paginationVariants.ellipsis
		)

		return (
			<nav
				ref={ref}
				className={containerClasses}
				role="navigation"
				aria-label="Pagination"
				{...props}
			>

				{/* First Button */}
				{showFirstButton && (
					<button
						className={navigationClasses}
						disabled={disabled || page === 1}
						onClick={handleClick(1)}
						aria-label="Go to first page"
					>
						<Chevron direction="left" size={12} />
						<Chevron direction="left" size={12} />
					</button>
				)}

				{/* Previous Button */}
				<button
					className={navigationClasses}
					disabled={disabled || page === 1}
					onClick={handleClick(page - 1)}
					aria-label="Go to previous page"
				>
					<Chevron direction="left" size={14} />
				</button>

				{/* Page Numbers */}
				{pages.map((p, idx) =>
					p === "start-ellipsis" || p === "end-ellipsis" ? (
						<span
							key={idx}
							className={ellipsisClasses}
							aria-hidden="true"
						>
							…
						</span>
					) : (
						<button
							key={p}
							className={pageButtonClasses(p === page)}
							disabled={disabled}
							onClick={handleClick(p)}
							aria-label={`Go to page ${p}`}
							aria-current={p === page ? "page" : undefined}
						>
							{p}
						</button>
					)
				)}

				{/* Next Button */}
				<button
					className={navigationClasses}
					disabled={disabled || page === count}
					onClick={handleClick(page + 1)}
					aria-label="Go to next page"
				>
					<Chevron direction="right" size={14} />
				</button>

				{/* Last Button */}
				{showLastButton && (
					<button
						className={navigationClasses}
						disabled={disabled || page === count}
						onClick={handleClick(count)}
						aria-label="Go to last page"
					>
						<Chevron direction="right" size={12} />
						<Chevron direction="right" size={12} />
					</button>
				)}

			</nav>
		)
	}
)

Pagination.displayName = "Pagination"
export default Pagination
