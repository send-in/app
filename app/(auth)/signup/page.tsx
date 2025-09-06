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

import {
    Footer,
    AuthSidePanel
} from "@/components"
// #endregion

const dividerClass = `
	bg-grey-100 rounded-full w-full h-[2px]
`

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
								Hey !
							</h1>
							<p
								className="text-2xl font-semibold leading-7 mt-1"
							>
								Create your
								<span
									className="text-blue-100"
								>
									{" "}SendIn{" "}
								</span>
								account, No credit-card required
							</p>
						</aside>

						<aside
							className="flex flex-col items-start gap-2"
						>
							<Button
								variant="secondary"
								size="full"
								startIcon={<Google/>}
							>
								Continue with Google
							</Button>

							<Button
								variant="primary"
								size="full"
								startIcon={<Linkedin/>}
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
							variant="filled"
							className="!rounded-xl !py-1 !px-4"
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
							size="full"
							variant="secondary"
						>
							Create new account
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
