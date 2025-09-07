// #region imports
import { Logo } from "@/icons"
// #endregion

export default function Loading() {

	return (
		<main
			className="w-screen h-screen bg-mint flex flex-col items-center justify-center bg-white p-10"
		>
			<Logo
				className="fill-blue-100"
				size={100}
			/>

		</main>
	)
}
