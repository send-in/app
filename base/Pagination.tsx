"use client"

// #region imports
import { forwardRef, HTMLAttributes } from "react"
import { cn } from "@/utils/cn"
import { Chevron } from "@/icons"
// #endregion

const paginationVariants = {
	base: `
		flex items-center justify-center
		gap-2 select-none w-full text-charcoal-100
		font-normal text-base
	`,

	button: `
		btn btn-circle transition-all duration-500 ease-in-out bgb
		hover:scale-105 active:scale-95 focus:outline-none border-none
		disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
	`,

	variants: {
		default: `btn-ghost hover:btn-neutral`,
		active: `btn-primary text-primary-content bg-grey-100`,
		navigation: `btn-ghost hover:btn-neutral`,
	},

	sizes: {
		small: "btn-xs w-8 h-8 text-xs",
		medium: "btn-sm w-10 h-10 text-sm",
		large: "btn-md w-12 h-12 text-base",
	},

	ellipsis: `px-2 text-base-content/60 select-none pointer-events-none transition-all duration-500 ease-in-out`,
}

export interface PaginationProps
	extends Omit<HTMLAttributes<HTMLElement>, "onChange"> {
	page: number
	count: number
	siblingCount?: number
	size?: keyof typeof paginationVariants.sizes
	disabled?: boolean
	showFirstButton?: boolean
	showLastButton?: boolean
	onChange?: (value: number) => void
	className?: string
}

const range = (start: number, end: number): number[] =>
	Array.from({ length: end - start + 1 }, (_, i) => start + i)

const Pagination = forwardRef<HTMLElement, PaginationProps>(
	(
		{
			page,
			count,
			siblingCount = 1,
			size = "medium",
			disabled = false,
			showFirstButton = false,
			showLastButton = false,
			onChange,
			className = "",
			...props
		},
		ref
	) => {
		const handleClick = (value: number) => () => {
			if (!disabled && value !== page) onChange?.(value)
		}

		const totalNumbers = siblingCount * 2 + 5
		const pages: (number | "ellipsis")[] =
			count <= totalNumbers
				? range(1, count)
				: (() => {
					const left = Math.max(page - siblingCount, 2)
					const right = Math.min(page + siblingCount, count - 1)
					const arr: (number | "ellipsis")[] = [1]

					if (left > 2) arr.push("ellipsis")
					arr.push(...range(left, right))
					if (right < count - 1) arr.push("ellipsis")
					arr.push(count)
					return arr
				})()

		const containerClasses = cn(paginationVariants.base, className)
		const navBtnClasses = cn(
			paginationVariants.button,
			paginationVariants.variants.navigation,
			paginationVariants.sizes[size]
		)
		const pageBtnClasses = (active: boolean) =>
			cn(
				paginationVariants.button,
				active ? paginationVariants.variants.active : paginationVariants.variants.default,
				paginationVariants.sizes[size]
			)
		const ellipsisClasses = cn(paginationVariants.ellipsis)

		return (
			<nav
				ref={ref}
				className={containerClasses}
				role="navigation"
				aria-label="Pagination"
				{...props}
			>
				{showFirstButton && (
					<button
						className={navBtnClasses}
						disabled={disabled || page === 1}
						onClick={handleClick(1)}
						aria-label="Go to first page"
					>
						<Chevron direction="left" size={12} />
						<Chevron direction="left" size={12} />
					</button>
				)}

				<button
					className={navBtnClasses}
					disabled={disabled || page === 1}
					onClick={handleClick(page - 1)}
					aria-label="Go to previous page"
				>
					<Chevron direction="left" size={14} />
				</button>

				{pages.map((p, idx) =>
					p === "ellipsis" ? (
						<span key={idx+p} className={ellipsisClasses}>
							…
						</span>
					) : (
						<button
							key={p}
							className={pageBtnClasses(p === page)}
							disabled={disabled}
							onClick={handleClick(p)}
							aria-label={`Go to page ${p}`}
							aria-current={p === page ? "page" : undefined}
						>
							{p}
						</button>
					)
				)}

				<button
					className={navBtnClasses}
					disabled={disabled || page === count}
					onClick={handleClick(page + 1)}
					aria-label="Go to next page"
				>
					<Chevron direction="right" size={14} />
				</button>

				{showLastButton && (
					<button
						className={navBtnClasses}
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
