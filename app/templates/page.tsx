// #region imports
import { 
	getTemplates,
	parseQuery
} from "@/lib"

import {
    TemplateForm
} from "@/components"
// #endregion

const TemplatesPage = async({ searchParams }:{
	searchParams?: Promise<{ 
		page?: string
		sort?: string
	}>
}) => {

	const query = await parseQuery(
		searchParams
	)

	const {
		total,
        page,
		data: templates = [],
	} = await getTemplates({
		limit: 11,
		...query,
	})

	return (
		<main
			className="
				p-8 desktop:px-[5%] pt-[9%]
				flex items-start justify-center
				text-grey-200 text-base desktop:text-xl 
				gap-12 desktop:gap-12 h-[95vh]
			"
		>
			<TemplateForm
                templates={templates ?? []}
                page={page}
                total={total}
            />
		</main>
	)
}

export default TemplatesPage