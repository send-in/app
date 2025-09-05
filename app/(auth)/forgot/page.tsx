// #region imports
import Link from "next/link"

import {
	Button,
	TextField
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
								Uh oh !
							</h1>
							<p
								className="text-2xl font-semibold leading-7 mt-1"
							>
								Forgot password,
								<span
									className="text-blue-100"
								>
									{" "}Dont worry !{" "}
								</span>
							</p>
						</aside>
					</div>

					<TextField
						className="!rounded-xl !py-1 !px-2"
						variant="filled"
						placeholder="Email"
						fullWidth
					/>

					<aside>
						<Button
							variant="secondary"
							size="full"
						>
							Reset password
						</Button>

						<p
							className="text-grey-200 font-medium text-center mt-2 text-sm"
						>
							Already have an account ?{" "}
							<Link
								title="login"
								className="
									text-blue-100 hover:text-blue-200
									transition-all ease-in-out delay-100
									ml-1
								"
								href={"/login"}
							>
								Log in
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
