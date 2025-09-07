// #region imports
import Link from "next/link"

import {
	Button,
	TextField
} from "@/base"

import {
	Google,
	Linkedin
} from "@/icons"
// #endregion

const dividerClass = `
	bg-grey-100 rounded-full w-full h-[2px]
`

const page = ({
}) => {
	return (
		<section
			className="w-[50%] flex flex-col gap-6 ml-[5%]"
		>
			<div
				className="space-y-6 p-2"
			>
				<aside>
					<h1
						className="text-4xl text-blue-100 font-semibold"
					>
						Welcome !
					</h1>
					<p
						className="text-2xl font-semibold mt-1"
					>
						Log into your
						<span
							className="text-blue-100"
						>
							{" "}SendIn{" "}
						</span>
						account
					</p>
				</aside>

				<aside
					className="flex flex-col items-start gap-2"
				>
					<Button
						startIcon={<Google/>}
						variant="secondary"
						size="full"
					>
						Continue with Google
					</Button>

					<Button
						startIcon={<Linkedin/>}
						variant="primary"
						size="full"
					>
						Continue with LinkedIn
					</Button>
				</aside>
			</div>

			<aside
				className="flex gap-2 items-center justify-between"
			>
				<div className={dividerClass}/>

				<p
					className="text-grey-200 text-sm"
				>
					or
				</p>

				<div className={dividerClass}/>
			</aside>

			<aside
				className="flex flex-col gap-2 items-end"
			>
				<TextField
					className="!rounded-xl !py-1 !px-4"
					variant="filled"
					placeholder="Email"
					fullWidth
				/>

				<TextField
					variant="filled"
					className="!rounded-xl !py-1 !px-4"
					placeholder="Password"
					type="password"
					fullWidth
				/>

				<Link
					title="forgot password"
					href={"/forgot"}
					className="
						text-sm hover:text-blue-100
						transition-all ease-in-out delay-100
						text-grey-200 font-medium
					"
				>
					forgot password ?
				</Link>
			</aside>


			<aside>
				<Button
					variant="secondary"
					size="full"
				>
					Log into account

					{/* reset password */}
				</Button>

				<p
					className="text-grey-200 font-medium text-center mt-2 text-sm"
				>
					New to SendIn ?{" "}
					<Link
						title="signup"
						className="
							text-blue-100 hover:text-blue-200
							transition-all ease-in-out delay-100
							ml-1
						"
						href={"/signup"}
					>
						Sign up
					</Link>
				</p>
			</aside>
		</section>
	)
}

export default page
