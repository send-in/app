// #region imports
import {
	Google
} from "@/icons"

import {
	Button,
	Information
} from "@/base"
import Link from "next/link"
// #endregion

const Extension = ({
	nextStep
}:{
	nextStep: Function
}) => {
	return (
		<section
			className="w-[70%] space-y-8 ml-[5%] desktop:ml-[10%]"
		>
			<h1
				className="text-5xl desktop:text-6xl text-blue-100 font-semibold"
			>
				Install our extension
			</h1>

			<Information
				description="
					If you don't wish to use bulk sending we highly recommend you to
					install our chrome extension ! Bulk scheduling is only accessible
					via the web application. Otherwise feel free to skip this step.
				"
                styles="py-4"
			/>

			<aside
				className="flex items- justify-start gap-2"
			>
				<Link
					href="/link-to-chrome-store"
					title="Install sendin extension"
					target="_blank"
				>
					<Button
						startIcon={<Google/>}
						variant="secondary"
					>
						Install extension
					</Button>
				</Link>
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

export default Extension

