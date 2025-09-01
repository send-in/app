// #region imports
import Link from "next/link"

import {
	Button, 
	TextField,
} from "@mui/material"

import { 
    Footer, 
    AuthSidePanel 
} from "@/components"
// #endregion

const buttonClass = `
	rounded-full text-white px-6 w-full
	gap-2 font-mada font-medium normal-case
	transition-all ease-in-out delay-100 text-lg
	tracking-tight max-h-fit
`

const inputClass = `
	font-mada px-3 bg-grey-100 rounded-lg 
	font-medium text-lg tracking-tight max-h-fit
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
					tracking-tight text-charcoal-100 text-lg
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
					</aside>


					<aside>
						<Button
							className={`bg-charcoal-100 hover:bg-charcoal-200 ${buttonClass}`}
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