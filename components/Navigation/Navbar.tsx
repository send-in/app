"use client"

// #region Imports
import Link from "next/link"

import {
	redirect,
	usePathname
} from "next/navigation"

import { Logo } from "@/icons"
import { IconButton } from "@/base"
// #endregion

const links = [
	{
		href: "/",
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
    {
		href: "/profile",
		label: "Account"
	},
]


const Navbar = () => {
    
	const pathname = usePathname()
    console.log(pathname)

	return (
        pathname !== "/auth" &&
		<nav
            data-path={pathname}
			className="
				px-4 desktop:px-4 p-1 desktop:p-2 w-full
				xlarge:text-base mb-4 flex items-center 
                gap-10 z-100 justify-between rounded-full 
                font-medium text-charcoal-200 max-w-[55%]
                bg-bluewash absolute top-8 desktop:top-16 
                text-base left-1/2 -translate-x-1/2
                data-[pathname=auth]:hidden
			"
		>
			<IconButton
				variant="secondary"
				onClick={()=>redirect("/")}
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
							smooth 
							cursor-pointer data-[selected=true]:text-charcoal-100
						"
                    >
                        {label}
                    </Link>
                ))}
			</aside>


            <Link
                href="/connections"
                className="
                    px-6 py-1 rounded-full cursor-pointer
                    text-white hover:bg-blue-200 bg-blue-100
                    smooth desktop:text-lg
                "
            >
                + Schedule
            </Link>

		</nav>
	)
}

export default Navbar
