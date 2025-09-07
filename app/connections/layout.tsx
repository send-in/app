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
				p-8 px-16 desktop:px-48 pt-[8%] flex items-start justify-center
				text-grey-200 text-base desktop:text-xl gap-12
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
