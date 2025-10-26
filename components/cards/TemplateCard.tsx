// #region imports
import { Template } from "@/providers"
// #endregion


const TemplateCard = ({
	template,
	onChange,
	selected,
}:{
	template: Template
	onChange: (value: Template) => void
	selected: boolean
}) => {

	return (
		<li
			className="
				list-none flex gap-10 text-base desktop:text-xl items-center w-full
				p-3 px-6 rounded-full text-charcoal-100 hover:text-white desktop:py-4
				bg-white hover:bg-blue-100 active:bg-blue-200 group/card justify-between
				transition-all ease-in-out delay-50 cursor-pointer
				data-[selected=true]:outline-blue-100 data-[selected=true]:outline-2
			"
			onClick={()=>onChange(template)}
			data-selected={selected}
		>
			<p>
				{template.label}
			</p>

			<p
				className="
					transition-all ease-in-out delay-50
					w-[60%] text-ellipsis truncate text-grey-200 group-hover/card:text-white
				"
			>
				{template.value}
			</p>
		</li>
	)
}

export default TemplateCard
