// #region imports
import {
	IconButton
} from "@/base"

import {
	Logo,
	Arrow
} from "@/icons"
// #endregion

const items = [
	"Connect with Linked In",
	"Integrate chrome extension",
	"Create message template ",
	"Lets schedule !",
]

const SidePanel = ({
	selected = 0,
	setSelected
}:{
	selected: number,
	setSelected: (value: (prev: number) => number) => void
}) => (
	<section
		className="
			bg-blue-100 rounded-3xl p-10
			relative h-full min-w-[30%] flex items-center
			justify-center text-white text-base desktop:text-xl
		"
	>
		<ul
			className="space-y-20"
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
									w-3 h-3 bg-white rounded-full
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
				onClick={()=>selected > 0 && setSelected(prev=>--prev)}
				disabled={!(selected > 0)}
			>
				<Arrow
					direction="up"
				/>
			</IconButton>

			<IconButton
				onClick={()=> selected < 3 && setSelected(prev=>++prev)}
				disabled={!(selected < 3)}
			>
				<Arrow
					direction="down"
				/>
			</IconButton>
		</aside>

		<Logo
			className="absolute top-8 right-5 fill-white"
			size={40}
		/>
	</section>
)

export default SidePanel
