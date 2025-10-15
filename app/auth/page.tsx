// #region imports
import {
	login
} from "@/server/auth"

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
			className="w-[50%] desktop:w-[32%] flex flex-col gap-6 ml-[10%]"
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
					</p>
					<span
						className="text-blue-200 text-2xl desktop:text-3xl font-semibold mt-1 desktop:mt-4"
					>
						{" "}No credit card required{" "}
					</span>
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
