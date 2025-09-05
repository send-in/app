// #region imports
import Link from "next/link"

import {
	Button,
	TextField,
} from "@/base"

import {
    Footer,
    AuthSidePanel
} from "@/components"
// #endregion

const page = ({
}) => {
	return (
		<>
			<main
				className="
					p-8 flex items-center justify-between h-screen
					tracking-tighter text-charcoal-100 text-base
				"
			>
				<section
					className="w-[24%] flex flex-col gap-6 ml-[5%]"
				>
					<div
						className="space-y-6 p-2 tracking-tighter"
					>
						<aside>
							<h1
								className="text-4xl text-blue-100 font-semibold"
							>
								Hey Vishnu !
							</h1>
							<p
								className="text-2xl font-semibold mt-1"
							>
								Please reset and confirm  your password
							</p>
						</aside>
					</div>

					<aside
						className="flex flex-col gap-2 items-end"
					>
						<TextField
							variant="filled"
							className="!rounded-xl !py-1 !px-4"
							placeholder="Password"
							type="password"
							fullWidth
						/>
						<TextField
							variant="filled"
							className="!rounded-xl !py-1 !px-4"
							placeholder="Confirm Password"
							type="password"
							fullWidth
						/>
					</aside>


					<aside>
						<Button
							variant="secondary"
							size="full"
						>
							Confirm
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

				<AuthSidePanel/>
			</main>

			<Footer/>
		</>
	)
}

export default page
