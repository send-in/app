// #region imports
import { 
    Editor, 
    InformationCard
} from "@/components"

import {
	Button,
} from "@mui/material"
// #endregion

const buttonClass = `
	rounded-full text-white px-8 w-[25%]
	gap-2 font-mada font-medium normal-case
	transition-all ease-in-out delay-100 text-base
	tracking-tighter h-fit
`

const page = ({
}) => {
	return (
		<section
			className="w-[70%] flex flex-col gap-2 tracking-tighter ml-[5%] h-full"
		>
			<h1
				className="text-5xl text-blue-100 font-semibold mb-6"
			>
				Create default template
			</h1>

			<InformationCard
				description="
                    If you are not bulk scheduling, 
                    you are all set and can skip onboarding ! 
                    We use variables for templates, 
                    currently only {{company_name}} 
                    and {{username}} are supported.
                "
                styles="py-4"
			/>

			<aside
                className="w-full h-[30vh] my-5 mb-[15%]"
            >
                <Editor
                    noCopy
                />
            </aside>

			<aside
				className="flex items-start gap-2"
			>
				<Button
					className={`bg-charcoal-100 hover:bg-charcoal-200 ${buttonClass}`}
				>
					Save
				</Button>

				<Button
					variant="text"
					className="tracking-tighter normal-case font-mada text-grey-200 rounded-full text-base font-normal"
				>
					Skip this step
				</Button>
			</aside>
		</section>
	)
}

export default page