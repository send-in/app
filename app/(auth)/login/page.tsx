// #region imports
import Link from "next/link"

import {
	Button, 
	TextField,
} from "@mui/material"

import { 
    Google, 
    Linkedin 
} from "@/Icons"

import { 
    Footer, 
    AuthSidePanel 
} from "@/components"
// #endregion

const buttonClass = `
	rounded-full text-white px-6 w-full
	gap-2 font-mada font-medium normal-case
	transition-all ease-in-out delay-100 text-base
	tracking-tighter h-fit
`

const inputClass = `
	font-mada px-3 bg-grey-100 rounded-lg 
	font-medium text-base tracking-tighter h-fit 
    focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-inset
    transition-all ease-in-out delay-100 cursor-pointer
`

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
								className={`bg-charcoal-100 hover:bg-charcoal-200 ${buttonClass}`}
							>
								Continue with Google
							</Button>

							<Button
								startIcon={<Linkedin/>}
								className={`bg-blue-100 hover:bg-blue-200 ${buttonClass}`}
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
						<div
							className="space-y-2"
						>
							<TextField
								variant="standard"
								placeholder="email"
								fullWidth
								slotProps={{
									input: {
									disableUnderline: true,
										className: inputClass
									}
								}}
							/>

							<TextField
								variant="standard"
								placeholder="password"
								type="password"
								fullWidth
								slotProps={{
									input: {
									disableUnderline: true,
										className: inputClass
									}
								}}
							/>
						</div>

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
							className={`bg-charcoal-100 hover:bg-charcoal-200 ${buttonClass}`}
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
				
				<AuthSidePanel/>
			</main>

			<Footer/>
		</>
	)
}

export default page