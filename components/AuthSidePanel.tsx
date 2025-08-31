// #region imports
import Image from "next/image"
// #endregion

const AuthSidePanel = () => (
	<section
		className="
			bg-blue-100 rounded-4xl p-10 
			relative h-full w-[50%] flex items-center
			justify-center
		"
	>
		<aside
			className="relative h-fit pr-32"
		>
			<Image
				src="/others/timezone.svg" 
				alt="timezone" 
				height={450}
				width={450}
			/>
			<Image
				className="absolute -bottom-[20%] left-[48%]"
				src="/others/switch.svg"
				alt="switch"
				height={300}
				width={300}
			/>
		</aside>
		<Image
			className="absolute top-5 right-5"
			src="/icons/logo.svg"
			alt="sendin"
			height={100}
			width={100}
		/>
	</section>
)

export default AuthSidePanel