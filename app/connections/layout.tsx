// #region imports
import { Navbar } from "@/components"
import { ReactNode } from "react"
// #endregion



const layout = ({
    connections,
	options,
}: Readonly<{
    connections: ReactNode,
    options: ReactNode,
}>) => {

	return (
		<main
            className="
				p-8 px-16 pt-[8%] flex items-start justify-center
				tracking-tighter text-grey-200 text-base gap-12
                h-screen
			"
        >
            <Navbar/>

			{connections}
            {/* {options} */}
		</main>
	)
}

export default layout
