// #region imports
import { ReactNode } from "react"
import { 
    Box,
    Button
} from "@mui/material"
import Image from "next/image"
// #endregion

const layout = ({
	email,
	oauth,
}: Readonly<{
	email: ReactNode,
	oauth: ReactNode,
}>) => {

	// logic for steps
	return (
		<main>
			<Box>
				{email}
				{oauth}
			</Box>

            <Box
                className="
                    bg-blue-100 rounded-3xl p-10 
                    relative h-full w-[50%] flex items-center
                    justify-center
                "
            >
                <Button>
                </Button>

                <Image
                    className="absolute top-5 right-5"
                    src="/icons/logo.svg"
                    alt="sendin"
                    height={80}
                    width={80}
                />
            </Box>
		</main>
	)
}

export default layout