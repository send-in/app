// #region Imports
import Link from "next/link"

import { Logo } from "@/icons"
// #endregion

const links = [
	{
		title: "Solutions",
		items: [
			{
				name: "Chrome extension",
				href: "/blog/chrome-extension"
			},
			{
				name: "Bulk schedule",
				href: "/blog/bulk-schedule"
			},
			{
				name: "Message templates",
				href: "/blog/message-templates"
			},
			{
				name: "Timezone intelligence",
				href: "/blog/timezone-intelligence"
			},

		],
	},
	{
		title: "Resources",
		items: [
			{
				name: "Get started",
				href: "/getting-started"
			},
			{
				name: "Blogs",
				href: "/blogs"
			},
			{
				name: "Tutorials",
				href: "https://www.youtube.com/@SendInLinkedin"
			},
			{
				name: "Use Cases",
				href: "/use-cases"
			},
		],
	},
	{
		title: "Assistance",
		items: [
			{
				name: "Support",
				href: "/support"
			},
			{
				name: "Custom solution",
				href: "mailto:someone@example.com"
			},
			{
				name: "Cookie Policy",
				href: "/cookie-policy"
			},
		],
	},
	{
		title: "More",
		items: [
			{
				name: "Pricing",
				href: "/pricing"
			},
			{
				name: "Terms",
				href: "/terms-conditions"
			},
			{
				name: "Sitemap",
				href: "/sitemap.xml"
			},
            {
				name: "Press Kit",
				href: "/SendIn_PressKit.zip"
			},
		],
	},
]

const Footer = () => {
	return (
		<section
			className="
                w-full pt-2 text-charcoal-100
                relative z-0 p-8 small:pt-0 desktop:px-[5%]
            "
			id="footer"
		>
			<div
				className="
					flex flex-col items-center bg-bluewash bg-cover desktop:pt-24
					rounded-3xl p-10 gap-12 desktop:gap-24 relative overflow-hidden
				"
			>

				<aside
					className="
						flex small:flex-col  justify-between
						p-10 pt-5 mobile:px-4 w-[60%] mobile:w-full 
                        text-right font-normal mobile:p-2 mobile:gap-4 desktop:w-[50%]
					"
				>
					{links.map((category, index) => (
						<div
							key={index}
							className="
                                text-base desktop:text-xl flex
                                flex-col items-start mobile:w-fit
                            "
						>
							<p className="
                                text-2xl mobile:text-xl 
                                desktop:text-3xl mb-4
                            ">
								{category.title}
							</p>

							{category.items.map((link, idx) => (
								<Link
									className="
										smooth text-grey-300
										cursor-pointer
									"
                                    target="_blank"
                                    rel="noreferrer"
									href={link.href}
									key={idx}
								>
									{link.name}
								</Link>
							))}

						</div>
					))}
				</aside>


                <section className="
                    w-full flex justify-between
                    items-end px-4 text-grey-200
                ">
                    <aside>
                        <p>2025 © SendIn</p>
                        <p></p>
                        <Link
                            className="text-grey-300 hover:text-blue-200 smooth" 
                            href="mailto:support@sendin.com">
                            support@sendin.com
                        </Link>
                    </aside>


                    <div>
                        Made with &thinsp; 💙 &thinsp; at 
                        <Link
                            className="text-blue-100 hover:text-blue-200 smooth ml-2" 
                            href="https://www.opusco.dev">
                            OpusCo
                        </Link>
                    </div>
                </section>

			</div>


		</section>
	)
}

export default Footer
