// #region imports
import { 
	IconButton 
} from "@mui/material"
import Image from "next/image"
import Arrow from "../Icons/Arrow"
// #endregion

const items = [
	"Connect with Linked In",
	"Integrate chrome extension",
	"Create message template ",
	"Lets schedule !",
]

const OnboardingSidePanel = ({
	selected = 0
}:{
	selected: number
}) => (
	<section
		className="
			bg-blue-100 rounded-3xl p-10 
			relative h-full min-w-[30%] flex items-center
			justify-center text-white text-base
		"
	>
		<ul
			className="space-y-16"
		>

			{
				items.map(
					(item,index)=>
						<li
							key={index}
							className={`
								flex gap-5 items-center
								${index===selected ? "text-white" : "text-grey-100"}
								transition-all ease-in-out delay-100
							`}
						>
							<div 
								className={`
									w-4 h-4 bg-white p-2 rounded-full
									${index===selected ? "scale-150" : ""}
									transition-all ease-in-out delay-100
								`}
							/>
							<p>{item}</p>
						</li>
				)
			}
		</ul>

		<aside
			className="absolute bottom-5 right-5 flex"
		>
			<IconButton 
				size="medium"
				className="!w-12 !h-12 flex items-center justify-center"
			>
				<Arrow
					direction="up"
					active={false}
				/>
			</IconButton>

			<IconButton 
				size="medium"
				className="!w-12 !h-12 flex items-center justify-center"
			>
				<Arrow
					direction="down"
					active={true}

				/>
			</IconButton>
		</aside>

		<Image
			className="absolute top-5 right-5"
			src="/icons/logo.svg"
			alt="sendin"
			height={60}
			width={60}
		/>
	</section>
)

export default OnboardingSidePanel