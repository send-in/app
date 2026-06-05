"use client"

// #region imports
import { ITemplate } from "@/lib"
// #endregion

const TemplateCard = ({
	template,
	onChange,
	selected,
}:{
	template: ITemplate
	onChange?: (value: ITemplate) => void
	selected: boolean
}) => {

	return (
		<li
			className="
				list-none flex gap-10 text-base desktop:text-xl items-center w-full
				py-3 px-6 rounded-xl text-charcoal-100 desktop:py-4 border-2 border-grey-100
				bg-white hover:border-grey-200 active:border-grey-300 group/card 
                justify-between smooth cursor-pointer data-[selected=true]:border-blue-100    
			"
			onClick={()=>onChange?.(template)}
			data-selected={selected}
		>
			<p>
				{template.label}
			</p>

			<p
				className="
					smooth w-[60%] text-ellipsis 
                    truncate text-grey-200 
				"
			>
				{template.value}
			</p>
		</li>
	)
}

export default TemplateCard
