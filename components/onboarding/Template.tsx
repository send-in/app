// #region imports
import {
    Editor,
} from "@/components"

import {
	Button,
	Information
} from "@/base"
// #endregion

const Template = ({
	nextStep
}:{
	nextStep: Function
}) => {
	return (
		<section
			className="w-[70%] flex flex-col gap-2 ml-[5%] desktop:ml-[10%] h-full"
		>
			<h1
				className="text-5xl desktop:text-6xl text-blue-100 font-semibold mb-6"
			>
				Create default template
			</h1>

			<Information
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
                className="w-full h-[30vh] desktop:h-[35vh] my-5"
            >
                <Editor
                    noCopy
                />
            </aside>

			<aside
				className="flex items-start gap-2"
			>
				<Button
					variant="secondary"
				>
					Save
				</Button>

				<Button
					variant="ghost"
					onClick={()=>nextStep()}
				>
					Skip this step
				</Button>
			</aside>
		</section>
	)
}

export default Template

