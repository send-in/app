// #region imports
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
		<main>
			{connections}
            {options}
		</main>
	)
}

export default layout