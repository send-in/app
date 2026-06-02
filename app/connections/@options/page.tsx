// #region imports
import { OptionsForm } from "@/components"

import { 
    getConnections,
    getTemplates,
    parseQuery
} from "@/lib"
// #endregion

const OptionsPage = async({ searchParams }:{
	searchParams?: Promise<{ ids?: string[]}>
}) => {
    const { ids } = await parseQuery(searchParams)
    const { data: templates } = await getTemplates()
    const { data: options } = await getConnections({ids})
    const { data: connections } = await getConnections()

	return (
		<main className="
            p-8 px-16 desktop:px-48 pt-[8%] 
            flex items-start justify-center
            text-grey-200 text-base 
            desktop:text-xl gap-12 h-fit
        ">
			<section className="
                w-full h-full flex flex-col 
                justify-between gap-8 
                desktop:justify-start desktop:gap-16
            ">
				<OptionsForm
                    connections={connections ?? []}
                    templates={templates ?? []}
                    options={options ?? []}
                />
			</section>
		</main>
	)
}

export default OptionsPage
