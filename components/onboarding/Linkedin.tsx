"use client"

// #region imports
import { LinkedinConnect } from "@/components"

import {
	Button,
	Information,
} from "@/base"
// #endregion

interface ILinkedin {
	nextStep: Function
    token: string
    picture: string
}

const Linkedin = ({ 
    nextStep, 
    token, 
    picture 
}: ILinkedin) => {
	return (
		<section
			className="w-[70%] desktop:w-[60%] space-y-8"
		>
			<h1
				className="text-5xl desktop:text-6xl text-blue-100 font-semibold"
			>
				Let's get started...
			</h1>

			<Information
				description="
					To connect your LinkedIn account, we'll need your session token.
					This token lets Send In securely send your messages automatically.
					Every time you log out on your browser a new cookie is created for your session,
					if you log out the cookie expires
				"
                styles="py-4"
			/>

			<LinkedinConnect 
                picture={picture}
                token={token}
            />

			<p
				className="text-sm text-grey-200 desktop:text-base"
			>
				We take your li_at cookie and user agent information,
				You will have to install our extension to sync cookie.
			</p>

			<Button
				variant="secondary"
                disabled={!token}
				onClick={()=>nextStep()}
			>
				Save
			</Button>
		</section>
	)
}

export default Linkedin

