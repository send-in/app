// #region imports
import Image from "next/image"
// #endregion

export default function Loading() {

	return (
		<main 
			className="w-screen h-screen bg-mint flex flex-col items-center justify-center"
		>

			<section
				className="flex flex-col items-start justify-center gap-3"
			>
				{/* <Image
					src="/others/logo_bottom.svg"
					alt="boardly.io"
					height={200}
					width={200}
				/> */}
			</section>
			
		</main>
	)
}