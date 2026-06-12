"use client"

// #region imports
import { ITemplate } from "@/lib"
import { parseLexicalText } from "@/utils"
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
				bg-white hover:border-grey-200 active:border-grey-300 group/card min-w-0
                justify-between smooth cursor-pointer data-[selected=true]:border-blue-100
			"
			onClick={()=>onChange?.(template)}
			data-selected={selected}
		>
			<p className="shrink-0">
				{template.label}
			</p>

			<p
				className="
					smooth w-[60%] text-ellipsis 
                    truncate text-grey-200 
                    min-w-0 select-none
				"
			>
                {parseLexicalText(
                    template.value,
                )}
			</p>
		</li>
	)
}

export default TemplateCard
