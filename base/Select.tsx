// #region imports
import {
	ReactNode,
	forwardRef
} from "react"

import {
	cn
} from "@/utils/cn"
// #endregion

export interface SelectOption {
	label: ReactNode
	value: string
	disabled?: boolean
}

export interface SelectProps {
	options: SelectOption[]
	value: string
	placeholder?: string
	size?: "sm" | "md" | "lg"
	variant?: "primary" | "neutral"
	className?: string
	onChange: (value: string) => void
}

const sizeClasses = {
	sm: "text-sm px-3",
	md: "text-base px-4",
	lg: "text-lg  px-5",
}

const variantClasses = {
	primary: "bg-blue-100 text-white hover:bg-blue-200 focus:ring-blue-100",
	neutral: "bg-grey-100 text-grey-300 hover:bg-bluewash focus:ring-grey-200",
}

const Select = forwardRef<HTMLDivElement, SelectProps>(
	(
		{
			options,
			value,
			placeholder,
			size = "md",
			variant = "primary",
			className = "",
			onChange
		},
		ref
	) => {
		const selectedOption = options.find((opt) => opt.value === value)

		const wrapperClasses = cn("dropdown", className)

		const menuClasses = cn(
			"dropdown-content menu p-2 mt-2 shadow rounded-xl bg-white w-max space-y-1",
			"z-50"
		)

		const buttonClasses = cn(
			`
				btn rounded-full font-medium tracking-tighter transition-all duration-200
				border-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-100
			`,
			sizeClasses[size],
			selectedOption
				? variantClasses[variant]
				: "bg-white text-grey-300 hover:bg-grey-100 "
		)

		return (
			<div
				ref={ref}
				className={wrapperClasses}
			>
				<button
					type="button"
					tabIndex={0}
					className={buttonClasses}
				>
					{
						selectedOption?.label ||
						placeholder ||
						"Select"
					}

					<span className="ml-2">&#9662;</span>
				</button>

				<ul
					tabIndex={0}
					className={menuClasses}
				>
					{options.map((opt) => (
						<li
							key={opt.value}
							className={cn(
								"rounded-md px-4 py-1 cursor-pointer text-charcoal-100",
								opt.value === value ? "bg-grey-100" : "hover:bg-grey-100",
								opt.disabled && "opacity-50 cursor-not-allowed"
							)}
							onClick={() => {
								if (!opt.disabled) {
									onChange(opt.value)
								}
							}}
						>
							{opt.label}
						</li>
					))}
				</ul>
			</div>
		)
	}
)

Select.displayName = "Select"
export default Select
