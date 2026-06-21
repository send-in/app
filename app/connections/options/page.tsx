// #region imports
import { ErrorComponent, OptionsForm } from "@/components"

import {
    getConnections,
    getProfile,
    getTemplates,
    parseQuery
} from "@/lib"
// #endregion

const OptionsPage = async({ searchParams }:{
	searchParams?: Promise<{ ids?: string[]}>
}) => {
    const { ids } = await parseQuery(searchParams)
    // await enrichConnections(ids)

    const { data: options } = await getConnections({ids})
    const { data: templates } = await getTemplates()
    const { data: account } = await getProfile()

	return (
        account ?
		<main className="
            p-8 desktop:px-48 pt-[8%] flex flex-col 
            items-center justify-start gap-8
            text-grey-200 text-base 
            desktop:text-xl h-fit
        ">
            <OptionsForm
                templates={templates ?? []}
                options={options ?? []}
            />
		</main> :
        <ErrorComponent/>
	)
}

export default OptionsPage
