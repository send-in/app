// #region imports
import { Button } from "@/base"
import { Logo } from "@/icons"
// #endregion

const ProfileSidePanel = () => (
	<section
		className="
			bg-blue-100 rounded-3xl p-6
			relative h-[90%] w-[50%] flex items-end
			justify-end self-end
		"
	>
		<Button
			variant="ghost"
			className="!text-white hover:!text-charcoal-100"
		>
			Log out ?
		</Button>

		<Logo
			className="absolute top-8 right-5 fill-white"
			size={40}
		/>
	</section>
)

export default ProfileSidePanel
