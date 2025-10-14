// #region imports
import { 
	login 
} from "@/actions/auth"

import {
	Button,
} from "@/base"

import {
	Linkedin
} from "@/icons"
// #endregion


const page = ({
}) => {
	return (
		<section
			className="w-[50%] desktop:w-[35%] flex flex-col gap-6 ml-[5%]"
		>
			<div
				className="space-y-6 p-4"
			>
				<aside>
					<h1
						className="text-4xl desktop:text-6xl text-white font-semibold"
					>
						Welcome !
					</h1>
					<p
						className="text-2xl desktop:text-3xl font-semibold mt-1 desktop:mt-4 text-white"
					>
						Get started instantly with SendIn
						<span
							className="text-blue-200"
						>
							{" "}No credit card required{" "}
						</span>
						
					</p>
				</aside>

				<form
					className="flex flex-col items-start gap-2"
					action={login}
				>
					<Button
						type="submit"
						startIcon={<Linkedin/>}
						variant="inverted"
						textClassName="font-semibold"
						size="full"
					>
						Continue with LinkedIn
					</Button>
				</form>
			</div>
		</section>
	)
}

export default page
