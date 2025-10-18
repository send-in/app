"use client"

// #region Imports
import Image from "next/image"
import Link from "next/link"

import {
	redirect,
	usePathname
} from "next/navigation"

import { cn } from "@/utils"
import { Logo } from "@/icons"
import { IconButton } from "@/base"
import { useAccount } from "@/providers"
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
	const { data } = useAccount()
	const pathname = usePathname()

	return (
		<nav
			className="
				pl-4 desktop:pl-4 p-1 desktop:p-2 min-w-[50%] desktop:min-w-[30%]
				xlarge:text-base mb-4 flex items-center gap-10 z-100
				justify-between rounded-full font-medium text-white
				max-w-4xl bg-blue-100 absolute top-5 desktop:top-16 text-base
			"
		>
			<IconButton
				variant="transparent"
				onClick={()=>redirect("/dashboard")}
			>
				<Logo
					size={40}
				/>
			</IconButton>

			<aside
				className="flex gap-5 text-sm desktop:text-lg"
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
						transition-all ease-in-out delay-100 desktop:text-lg
					"
				>
					+ Schedule
				</Link>


				<Link
					href="/profile"
					className="
						bg-white border-2 border-white rounded-full
						transition-all ease-in-out delay-100 desktop:text-lg
						active:scale-98 focus:outline-none
						focus:ring-2 hover:ring-2 ring-white
					"
				>
					<Image
						className="rounded-full"
						alt={"profile"}
						src={data?.picture || "/profile.svg"}
						width={40}
						height={40}
					/>
				</Link>
			</aside>

		</nav>
	)
}

export default Navbar
