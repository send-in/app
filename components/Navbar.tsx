// #region Imports
import Image from "next/image"
import Logo from "./Icons/Logo"
import Link from "next/link"
// #endregion

const Navbar = () => {

	return (
		<nav 
			className="
				p-2 pr-4 min-w-[50%] small:min-w-full xlarge:min-w-[30%] 
				text-lg mb-4 flex items-center gap-10 small:gap-2 
				justify-between rounded-full font-medium text-white 
				max-w-4xl bg-blue-100
			"
		>
			<Logo 
				size={100}
				fill="#FFF"
			/>

			<aside 
				className="flex gap-5 small:hidden"
			>
				<Link
					href="/dashboard"
					className="
						opacity-70 hover:opacity-100
						transition-all ease-in-out delay-100 
						cursor-pointer
					"
				>
					Dashboard
				</Link>
				<Link
					href="/connections"
					className="
						opacity-70 hover:opacity-100
						transition-all ease-in-out delay-100 
						cursor-pointer
					"
				>
					Connections
				</Link>
				<Link
					href="/templates"
					className="
						opacity-70 hover:opacity-100
						transition-all ease-in-out delay-100 
						cursor-pointer
					"
				>
					Templates
				</Link>
			</aside>

			<aside
				className="flex gap-5 items-center"
			>
				<Link
					href="/connections"
					className="
						px-6 py-1 rounded-full cursor-pointer 
						text-blue-100 hover:bg-blue-200 hover:text-white bg-white
						transition-all ease-in-out delay-100
					"
				>
					+ Schedule
				</Link>


				<Link
					href="/profile"
					className="border-2 border-white rounded-full"
				>	
					<Image
						className="rounded-full"
						alt={"profile"}
						src={"https://media.licdn.com/dms/image/v2/D5603AQH2-Le-GLYQfQ/profile-displayphoto-crop_800_800/B56ZhyEAK4HUAI-/0/1754260309150?e=1759363200&v=beta&t=tSQG_CnXVrLuWg8REMJh1uWrk1NRL7iDLXG_WGKIwYA"}
						width={40}
						height={40}
					/>
				</Link>
			</aside>

		</nav>
	)
}

export default Navbar