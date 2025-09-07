"use client"

// #region Imports
import Image from "next/image"
import Link from "next/link"

import {
	cn
} from "@/utils"

import {
	usePathname
} from "next/navigation"

import {
	Logo
} from "@/icons"
// #endregion

const links = [
	{
		href: "/dashboard",
		label: "Dashboard"
	},
	{
		href: "/connections",
		label: "Connections"
	},
	{
		href: "/templates",
		label: "Templates"
	},
]

const Navbar = () => {
	const pathname = usePathname()

	return (
		<nav
			className="
				pl-4 p-1 min-w-[50%] small:min-w-full xlarge:min-w-[30%]
				xlarge:text-base mb-4 flex items-center gap-10 small:gap-2
				justify-between rounded-full font-medium text-white
				max-w-4xl bg-blue-100 fixed top-5 text-base
			"
		>
			<Logo
				size={35}
			/>

			<aside
				className="flex gap-5 small:hidden text-sm"
			>
				{links.map((
					{
						href,
						label
					}) => (
                    <Link
                        key={href}
                        href={href}
                        className={
							cn(
								`
									opacity-70 hover:opacity-100
									transition-all ease-in-out delay-100
									cursor-pointer
								`,
								pathname === href && "opacity-100"
                        	)
						}
                    >
                        {label}
                    </Link>
                ))}
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
