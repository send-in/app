// #region imports
import AuthSidePanel from "@/components/AuthSidePanel"
import Logo from "@/Icons/Logo"

import Link from "next/link"

import {
	Box,
	Button, 
	Input,
	Stack,
} from "@mui/material"
// #endregion

const page = ({
}) => {
	return (
		<main>
			<Box>
				<Stack>
					<Stack>
						<h1>
							Hey !
						</h1>
						<p>
							Create your
							<span>
								{" "}SendIn{" "}
							</span> 
							account, No credit card required
						</p>
					</Stack>

					<Stack>
						<Button
							variant="contained"
							startIcon={<Logo/>}
						>
							Continue with Google
						</Button>

						<Button
							variant="contained"
							startIcon={<Logo/>}
						>
							Continue with LinkedIn
						</Button>
					</Stack>
				</Stack>

				<Stack>
					<div/>
					<p>or</p>
					<div/>
				</Stack>

				<Stack>
					<Stack >
						<Input/>
						<Input/>
						<Input/>
					</Stack>

					<Stack>
						<Button
							variant="contained"
						>
							Create new account
						</Button>

						<p>
							Already have an account ?{" "}
							<Link
								href={""}
							>
								Log in
							</Link>
						</p>
					</Stack>
				</Stack>
			</Box>

			<AuthSidePanel/>
		</main>
	)
}

export default page