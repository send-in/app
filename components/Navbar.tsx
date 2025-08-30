// #region Imports
import Logo from './Icons/Logo';
// #endregion

const Navbar = ({
    bg="bg-white"
}) => {

	return (
		<nav 
			className={`
				p-2 pl-4 min-w-[50%] small:min-w-full xlarge:min-w-[30%] 
				text-sm xlarge:text-lg mb-4 flex items-center gap-10 small:gap-2 justify-between
				rounded-full font-medium text-charcoal-100 ${bg} max-w-4xl
			`}
		>
			<Logo 
				size={90}
				fill="#2F2F2F"
			/>

			<aside 
				className="flex gap-5 small:hidden"
			>
				<a
					href="/use-cases"
					className="
						opacity-70 hover:opacity-100
						transition-all ease-in-out delay-100 
						cursor-pointer
					"
				>
					Use Cases
				</a>
				<a
					href="/pricing"
					className="
						opacity-70 hover:opacity-100
						transition-all ease-in-out delay-100 
						cursor-pointer
					"
				>
					Pricing
				</a>
				<a
					href="/blogs"
					className="
						opacity-70 hover:opacity-100
						transition-all ease-in-out delay-100 
						cursor-pointer
					"
				>
					Resources
				</a>
			</aside>

			<a
				href="/"
				className="
					px-6 py-2 rounded-full
					text-white hover:bg-blue-200 bg-blue-100
					transition-all ease-in-out delay-100 
					cursor-pointer 
				"
			>
				Signup
			</a>
		</nav>
	)
}

export default Navbar