// #region imports
import Link from "next/link"

import {
    Linkedin
} from "@/icons"

import {
	Button,
} from "@/base"
// #endregion

const Completed = () => {
	return (
		<section
			className="w-fit space-y-2 ml-[5%] desktop:ml-[10%]"
		>
			<h1
				className="text-5xl desktop:text-6xl text-blue-100 font-semibold"
			>
				You&apos;re all set, Vishnu !
			</h1>

			<p
				className="text-base desktop:text-xl leading-6 w-[80%] text-grey-300"
			>
				Now head over to your connections page for bulk scheduling or open linkedIn for manual message !
			</p>

			<aside
				className="flex flex-col items-start gap-2 mt-8 w-[40%]"
			>
				<Link
					href="https://www.linkedin.com/in/williamhgates/"
					target="_blank"
					title="linkedin"
				>
					<Button
						variant="primary"
						size="full"
						startIcon={
							<Linkedin
								className = "fill-white-100"
							/>
						}
					>
						Continue on LinkedIn
					</Button>
				</Link>

				<Link
					href="/connections"
					title="connections"
				>
					<Button
						size="full"
						variant="secondary"
					>
						Bulk Schedule
					</Button>
				</Link>
			</aside>
		</section>
	)
}

export default Completed

