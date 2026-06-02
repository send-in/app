// #region imports
import { Progress } from "@/base"
import { Logo } from "@/icons"
// #endregion

const Loading = () => (
	<main
		className="
			fixed top-0 left-0 w-screen h-screen flex flex-col
			items-center justify-center bg-paper p-10
			gap-16 z-9999 bg-white
		" 
	>
		<Logo
			className="text-red-100"
			size={80}
		/>

		<Progress
			className="w-[10vw]!"
		/>
	</main>
)

export default Loading
