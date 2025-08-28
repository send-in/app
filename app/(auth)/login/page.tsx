// #region imports
import AuthSidePanel from "@/components/AuthSidePanel"
import Logo from "@/components/Icons/Logo"

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
						<h3>
							Welcome !
						</h3>
						<p>
							Log into your
							<span>
                                {" "}SendIn{" "}
                            </span> 
							account
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
						<Link
							href={""}
						>
							forgot password ?
						</Link>

						{<Input/>}
					</Stack>

					<Stack>
						<Button
							variant="contained"
						>
							Log into account

							{/* reset password */}
						</Button>

						<p>
							New to SendIn ?{" "}
							<Link
								href={""}
							>
								Sign up
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