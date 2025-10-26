"use client"

// #region imports
import {
	forwardRef,
	ReactNode
} from "react"

import {
	cn
} from "@/utils"
// #endregion

const toggleVariants = {
	base: `
		inline-flex items-center justify-center select-none
		transition-all duration-150 ease-in-out rounded-full
		focus:outline-none focus:ring-2 focus:ring-offset-2
		disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer
		font-medium desktop:text-lg desktop:px-4
	`,
	variants: {
		neutral: {
			active: "text-grey-300 bg-grey-100 focus:ring-grey-200",
			inactive: "text-grey-300 hover:bg-grey-100 focus:ring-grey-200"
		},
		primary: {
			active: "bg-blue-100 text-white focus:ring-blue-100",
			inactive: "bg-none text-grey-200 hover:bg-grey-100 focus:ring-blue-100"
		}
	},
	shape: {
		pill: "px-4 rounded-full text-lg",
		rounded: "w-8 h-8 rounded-full text-sm",
		normal: "px-5 py-3 rounded-md text-lg"
	}
}

export interface ToggleOption {
	label: ReactNode
	value: string
	disabled?: boolean
}

export interface ToggleGroupProps {
	options: ToggleOption[]
	value: string
	variant?: keyof typeof toggleVariants.variants
	shape?: keyof typeof toggleVariants.shape
	className?: string
	onChange: (value: string) => void
}

const ToggleGroup = forwardRef<HTMLDivElement, ToggleGroupProps>(
	(
		{
			options,
			value,
			variant = "primary",
			shape = "pill",
			className = "",
			onChange
		},
		ref
	) => {

		const handleToggle = (val: string) =>
			onChange(value === val ? "" : val)

		const wrapperClasses = cn(
			"inline-flex gap-2 flex-wrap shrink-0 my-1",
			className
		)

		return (
			<div
				ref={ref}
				className={wrapperClasses}
			>
				{options.map((opt) => (
					<button
						key={opt.value}
						type="button"
						disabled={opt.disabled}
						onClick={() => handleToggle(opt.value)}
						className={cn(
							toggleVariants.base,
							toggleVariants.shape[shape],
							opt.value === value
								? toggleVariants.variants[variant].active
								: toggleVariants.variants[variant].inactive,
						)}
					>
						{opt.label}
					</button>
				))}
			</div>
		)
	}
)

ToggleGroup.displayName = "ToggleGroup"
export default ToggleGroup
