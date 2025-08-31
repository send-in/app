// #region imports
import InformationCard from "@/components/InformationCard"
import Google from "@/Icons/Google"
import {
	Button,
	Stack,
} from "@mui/material"
// #endregion

const buttonClass = `
	rounded-full text-white px-6 w-[40%]
	gap-2 font-mada font-medium normal-case
	transition-all ease-in-out delay-100 text-lg
	tracking-tight h-fit
`

const page = ({
}) => {
	return (
		<section
			className="w-[70%] space-y-8 tracking-tighter ml-[5%]"
		>
			<h1
				className="text-5xl text-blue-100 font-semibold"
			>
				Install our extension
			</h1>

			<InformationCard
				description="
					If you don’t wish to use bulk sending we highly recommend you to 
					install our chrome extension ! Bulk scheduling is only accessible 
					via the web application. Otherwise feel free to skip this step.
				"
			/>

			<aside
				className="flex flex-col items-start gap-2"
			>
				<Button
					startIcon={<Google/>}
					className={`bg-charcoal-100 hover:bg-charcoal-200 ${buttonClass}`}
				>
					Install the chrome extension
				</Button>
				<Button
					variant="text"
					className="tracking-tight normal-case font-mada text-grey-200 rounded-full underline underline-offset-4 text-lg font-normal"
				>
					Skip
				</Button>
			</aside>
		</section>
	)
}

export default page