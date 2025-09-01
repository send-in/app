// #region imports

// #endregion

const TemplateCard = ({
	name,
}:{
	name: string,
}) => {
	
	return (
		<li
			className="
				list-none flex gap-10 text-base items-center w-full
				p-3 px-6 tracking-tight text-grey-200 hover:text-white
				bg-grey-100 hover:bg-blue-100 active:bg-blue-200 group justify-between
				transition-all ease-in-out delay-100 cursor-pointer rounded-full
			"
		>
			<p
				className="
					text-charcoal-100 group-hover:text-white
					transition-all ease-in-out delay-100  font-medium
				"
			>
				{name}
			</p>
		</li>
	)
}

export default TemplateCard