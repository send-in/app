"use client"

// #region imports
import {
	InputHTMLAttributes,
	ReactNode,
	forwardRef
} from "react"

import { cn } from "@/utils/cn"
// #endregion


const textFieldVariants = {
	base: `
		font-mada px-6 py-1 rounded-full
		font-normal text-base tracking-tighter h-fit text-base
		transition-all ease-in-out delay-100
		disabled:opacity-50 disabled:cursor-not-allowed
	`,
	variants: {
		standard: `
			bg-transparent border-none border-grey-200 rounded-none
			focus-within:ring-none text-grey-300 focus:outline-none
		`,
		filled: `
			bg-grey-100 hover:bg-grey-150
			focus-within:bg-white
			focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-inset
		`,
		outlined: `
			bg-white border border-grey-200
			focus-within:border-blue-500
			focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-inset
		`
	},
	sizes: {
		sm: "text-sm py-1 px-2",
		md: "text-base py-2 px-3",
		lg: "text-lg py-3 px-4"
	},
	colors: {
		default: "text-charcoal-100",
		disabled: "text-grey-300",
		error: "text-red-500",
		success: "text-green-500"
	}
}

export interface TextFieldProps
extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
	variant?: keyof typeof textFieldVariants.variants
	size?: keyof typeof textFieldVariants.sizes
	disabled?: boolean
	fullWidth?: boolean

	color?: keyof typeof textFieldVariants.colors

	label?: string
	helperText?: string
	startIcon?: ReactNode
	endIcon?: ReactNode

	slotProps?: {
		input?: {
			disableUnderline?: boolean
			className?: string
		}
	}
	className?: string
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
	(
		{
			variant = "outlined",
			size = "md",
			disabled = false,
			fullWidth = false,
			label,
			helperText,
			startIcon,
			endIcon,
			slotProps,
			className = "",
			...props
		},
		ref
	) => {
		// Wrapper styles (takes focus)
		const wrapperClasses = cn(
			"flex flex-col gap-1 relative",
			textFieldVariants.base,
			textFieldVariants.variants[variant],
			textFieldVariants.sizes[size],
			fullWidth && "w-full",
			label && "mt-4",
			className
		)

		// Input styles (unstyled except spacing/text)
		const inputClasses = cn(
			"flex-1 bg-transparent outline-none",
			slotProps?.input?.disableUnderline && "border-none",
			slotProps?.input?.className
		)

		return (
			<div className={wrapperClasses}>
				{label && (
					<label className="text-sm text-grey-200 font-medium absolute -top-6">
						{label}
					</label>
				)}

				<div className="flex items-center gap-2">
					{startIcon && (
						<span className="flex-shrink-0">{startIcon}</span>
					)}

					<input
						ref={ref}
						className={inputClasses}
						disabled={disabled}
						{...props}
					/>

					{endIcon && (
						<span className="flex-shrink-0">{endIcon}</span>
					)}
				</div>

				{helperText && (
					<p className="text-xs">{helperText}</p>
				)}
			</div>
		)
	}
)

TextField.displayName = "TextField"
export default TextField
