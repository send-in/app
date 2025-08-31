// #region imports
import Link from "next/link"
import {
	Button, 
	TextField,
} from "@mui/material"

import Google from "@/Icons/Google"
import Linkedin from "@/Icons/Linkedin"

import Footer from "@/components/Footer"
import AuthSidePanel from "@/components/AuthSidePanel"
// #endregion

const buttonClass = `
	rounded-full text-white px-6 w-full
	gap-2 font-mada font-medium normal-case
	transition-all ease-in-out delay-100 text-lg
	tracking-tight h-fit
`

const inputClass = `
	font-mada px-3 bg-grey-100 rounded-lg 
	font-medium text-lg tracking-tight h-fit
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

						<TextField
							variant="standard"
							placeholder="confirm password"
							type="password"
							fullWidth
							slotProps={{
								input: {
								disableUnderline: true,
									className: inputClass
								}
							}}
						/>
					</aside>


					<aside>
						<Button
							className={`bg-charcoal-100 hover:bg-charcoal-200 ${buttonClass}`}
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