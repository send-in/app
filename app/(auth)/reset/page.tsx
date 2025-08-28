// #region imports
import AuthSidePanel from "@/components/AuthSidePanel"
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
							Hey Vishnu !
						</h3>
						<p>
							Please reset and confirm your password
						</p>
					</Stack>
				</Stack>

				<Stack>
					<Stack >
						<Input/>
						<Input/>
					</Stack>

					<Stack>
						<Button
							variant="contained"
						>
							Continue
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