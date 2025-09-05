// #region imports
import {
    Editor,
    InformationCard
} from "@/components"

import {
	Button,
} from "@/base"
// #endregion

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
					variant="secondary"
				>
					Save
				</Button>

				<Button
					variant="ghost"
				>
					Skip this step
				</Button>
			</aside>
		</section>
	)
}

export default page
