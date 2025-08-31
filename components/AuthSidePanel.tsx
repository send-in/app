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
			className="relative h-fit pr-12 xlarge:pr-32"
		>
			<Image
				src="/others/timezone.svg" 
				alt="timezone" 
				height={350}
				width={350}
			/>
			<Image
				className="absolute -bottom-[20%] left-[48%]"
				src="/others/switch.svg"
				alt="switch"
				height={250}
				width={250}
			/>
		</aside>
		<Image
			className="absolute top-5 right-5"
			src="/icons/logo.svg"
			alt="sendin"
			height={60}
			width={60}
		/>
	</section>
)

export default AuthSidePanel