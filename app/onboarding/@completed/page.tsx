// #region imports
import { 
    Linkedin 
} from "@/Icons"

import {
	Button,
} from "@mui/material"
// #endregion

const buttonClass = `
	rounded-full text-white px-6 w-[70%]
	gap-2 font-mada font-medium normal-case
	transition-all ease-in-out delay-100 text-base
	tracking-tighter h-fit
`

const page = ({
}) => {
	return (
		<section
			className="w-fit space-y-2 tracking-tighter ml-[5%]"
		>
			<h1
				className="text-5xl text-blue-100 font-semibold"
			>
				You&apos;re all set, Vishnu !
			</h1>

			<p
				className="text-base leading-6 w-[80%] text-grey-300"
			>
				Now head over to your connections page for bulk scheduling or open linkedIn for manual message !
			</p>

			<aside
				className="flex flex-col items-start gap-2 mt-8"
			>
				<Button
					className={`bg-charcoal-100 hover:bg-charcoal-200 ${buttonClass}`}
				>
					Select from connections
				</Button>

				<Button
					startIcon={<Linkedin/>}
					className={`bg-blue-100 hover:bg-blue-200 ${buttonClass}`}
				>
					Continue with LinkedIn
				</Button>
			</aside>
		</section>
	)
}

export default page