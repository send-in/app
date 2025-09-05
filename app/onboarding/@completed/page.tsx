// #region imports
import {
    Linkedin
} from "@/Icons"

import {
	Button,
} from "@/base"
// #endregion


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
				className="flex flex-col items-start gap-2 mt-8 w-[50%]"
			>
				<Button
					size="full"
					variant="secondary"
				>
					Select from connections
				</Button>

				<Button
					variant="primary"
					size="full"
					startIcon={<Linkedin/>}
				>
					Continue with LinkedIn
				</Button>
			</aside>
		</section>
	)
}

export default page
