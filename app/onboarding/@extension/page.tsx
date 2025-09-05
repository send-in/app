// #region imports
import {
    InformationCard
} from "@/components"

import {
    Google
} from "@/Icons"

import {
	Button,
} from "@/base"
// #endregion

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
                styles="py-4"
			/>

			<aside
				className="flex flex-col items-start gap-2"
			>
				<Button
					startIcon={<Google/>}
					variant="secondary"
				>
					Install the chrome extension
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
