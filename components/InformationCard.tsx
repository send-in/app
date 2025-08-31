// #region imports
import Information from "./Icons/Information"
// #endregion

const InformationCard = ({
	description
}:{
	description: string
}) => {
	return (
		<aside
			className="rounded-2xl bg-purple-100 p-2 px-4 flex items-start gap-4 font-medium justify-center"
		>
			<div 
				className="py-0.5"
			>
				<Information/>
			</div>

			<p
				className="text-purple-200"
			>
				{description}
			</p>
		</aside>
	)
}

export default InformationCard