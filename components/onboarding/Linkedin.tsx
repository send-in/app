// #region imports
import {
	LinkedinConnect
} from "@/components"

import {
	Button,
	Information,
} from "@/base"
// #endregion

const Linkedin = ({
	nextStep
}:{
	nextStep: Function
}) => {
	return (
		<section
			className="w-[70%] desktop:w-[60%] space-y-8 ml-[5%] desktop:ml-[10%]"
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

			<LinkedinConnect/>

			<p
				className="text-sm text-grey-200 desktop:text-base"
			>
				We take your li_at cookie and user agent information,
				If you have the extension installed you can update your cookie
				for it too. You can manually enter your cookie using chrome dev tools
			</p>

			<Button
				variant="secondary"
				onClick={()=>nextStep()}
			>
				Save
			</Button>
		</section>
	)
}

export default Linkedin

