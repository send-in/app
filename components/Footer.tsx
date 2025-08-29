// #region Imports
import Logo from "./Icons/Logo"
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

const Footer = ({
    fixed=true
}) => {
	return (
		<section
			className={`
                w-full mt-4 small:mt-0 text-white bottom-0 
                small:relative z-10 p-4 xlarge:p-8 small:pt-0
                ${fixed?"fixed":"relative"}
            `}
			id="footer"
		>
			<div
				className="
					flex flex-col items-center bg-blue-100 bg-cover w-full
					rounded-3xl p-10 gap-12 xlarge:gap-24 relative overflow-hidden
				"
			>

				<Logo
					size={110}
				/>

				<aside 
					className="
						flex small:flex-col  justify-between 
						p-10 pt-5 small:px-4 w-[60%] small:w-full text-right font-normal
						small:p-2 small:gap-4 xlarge:w-[50%]
					"
				>
					{links.map((category, index) => (
						<div 
							key={index} 
							className="text-md xlarge:text-lg flex flex-col items-start small:w-fit"
						>
							<p 
								className="text-2xl small:text-xl xlarge:text-3xl"
							>
								{category.title}
							</p>

							{category.items.map((link, idx) => (
								<a
									className="
										transition-all ease-in-out delay-100 
										cursor-pointer
									"
                                    target="_blank"
                                    rel="noreferrer"
									href={link.href}
									key={idx}
								>
									{link.name}
								</a>
							))}

						</div>
					))}
				</aside>


				<p>2025 © SendIn.  support@sendin.com</p>
			</div>

			
		</section>
	)
}

export default Footer