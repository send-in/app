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

	return (
		<main className="
            p-8 desktop:px-48 pt-[8%] flex flex-col 
            items-center justify-start gap-16
            text-grey-200 text-base 
            desktop:text-xl h-fit
        ">
            <OptionsForm
                templates={templates ?? []}
                options={options ?? []}
            />
		</main>
	)
}

export default OptionsPage
