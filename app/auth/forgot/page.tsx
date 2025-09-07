// #region imports
import Link from "next/link"

import {
	Button,
	TextField
} from "@/base"
// #endregion

const page = ({
}) => {
	return (
		<section
			className="w-[50%] desktop:w-[35%] flex flex-col gap-6 ml-[5%] desktop:ml-[10%]"
		>
			<div
				className="space-y-6 p-2"
			>
				<aside>
					<h1
						className="text-4xl desktop:text-6xl text-blue-100 font-semibold"
					>
						Uh oh !
					</h1>
					<p
						className="text-2xl desktop:text-3xl font-semibold leading-7 mt-1 desktop:mt-4"
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
					className="text-grey-200 font-medium text-center mt-2 text-sm desktop:text-base"
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
	)
}

export default page
