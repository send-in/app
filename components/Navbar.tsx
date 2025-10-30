"use client"

// #region Imports
import Image from "next/image"
import Link from "next/link"

import {
	redirect,
	usePathname
} from "next/navigation"

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
		href: "/templates",
		label: "Templates"
	},
	{
		href: "/connections",
		label: "Connections"
	},
]

const Navbar = () => {
	const { data } = useAccount()
	const pathname = usePathname()

	return (
		<nav
			className="
				pl-4 desktop:pl-4 p-1 desktop:p-2 w-full
				xlarge:text-base mb-4 flex items-center gap-10 z-100
				justify-between rounded-full font-medium text-charcoal-200
				max-w-[55%] bg-bluewash absolute top-5 desktop:top-16 text-base
			"
		>
			<IconButton
				variant="secondary"
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
						data-selected={pathname === href}
                        className="
							hover:text-charcoal-100 text-grey-300
							transition-all ease-in-out delay-100
							cursor-pointer data-[selected=true]:text-charcoal-100
						"
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
						text-white hover:bg-blue-200 bg-blue-100
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
						src={data?.account?.picture || "/profile.svg"}
						width={40}
						height={40}
					/>
				</Link>
			</aside>

		</nav>
	)
}

export default Navbar
