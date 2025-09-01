// #region imports
import { 
    InformationCard, 
    LinkedinConnect 
} from "@/components"

import {
	Button,
} from "@mui/material"
// #endregion

const buttonClass = `
	rounded-full text-white px-8 w-[25%]
	gap-2 font-mada font-medium normal-case
	transition-all ease-in-out delay-100 text-lg
	tracking-tight h-fit
`

const page = ({
}) => {
	return (
		<section
			className="w-[70%] space-y-8 tracking-tighter ml-[5%]"
		>
			<h1
				className="text-5xl text-blue-100 font-semibold"
			>
				Let’s get started...
			</h1>

			<InformationCard
				description="
					To connect your LinkedIn account, we’ll need your session token. 
					This token lets Send In securely send your messages automatically. 
					Every time you log out on your browser a new cookie is created for your session, 
					if you log out the cookie expires
				"
			/>

			<LinkedinConnect
			/>

			<p
				className="text-sm text-grey-200"
			>
				We take your li_at cookie and user agent information, 
				If you have the extension installed you can update your cookie 
				for it too. You can manually enter your cookie using chrome dev tools
			</p>

			<Button
				className={`bg-charcoal-100 hover:bg-charcoal-200 ${buttonClass}`}
			>
				Save
			</Button>
			
		</section>
	)
}

export default page