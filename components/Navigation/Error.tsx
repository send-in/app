const mainClass = `
    w-screen h-screen fixed flex 
    flex-col text-base items-center 
    justify-center text-grey-200
    desktop:text-lg z-1000 bg-paper
    top-0 bg-white
`

export const ErrorComponent = ({
    className
}:{ className?: string }) => (
	<main 
		className={className ?? mainClass}
	>
		<h1 className="
			text-3xl text-charcoal-100
		">
			No Results Found :(
		</h1>

		<p>
			please refresh
		</p>
	</main>
)

export default ErrorComponent