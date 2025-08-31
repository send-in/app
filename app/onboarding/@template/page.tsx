// #region imports
import Editor from "@/components/Editor"
import InformationCard from "@/components/InformationCard"
import {
	Button,
} from "@mui/material"
// #endregion

const buttonClass = `
	rounded-full text-white px-8 w-[25%]
	gap-2 font-mada font-medium normal-case
	transition-all ease-in-out delay-100 text-lg
	tracking-tight h-fit
`

const page = ({
}) => {
	return (
		<section
			className="w-[70%] space-y-2 tracking-tighter ml-[5%]"
		>
			<h1
				className="text-5xl text-blue-100 font-semibold mb-6"
			>
				Create default template
			</h1>

			<InformationCard
				description="If you are not bulk scheduling, you are all set and can skip onboarding ! We use variables for templates, currently only {{company_name}} and {{username}} are supported."
			/>

			{/* <Editor/> */}

			<aside
				className="flex flex-col items-start gap-2 mt-8"
			>
				<Button
					className={`bg-charcoal-100 hover:bg-charcoal-200 ${buttonClass}`}
				>
					Save
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