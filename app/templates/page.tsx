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
        q?: string
		page?: string
		sort?: string
	}>
}) => {

	const { 
        q, page, sort 
    } = await parseQuery(searchParams)

	const {
		total,
		data: templates = [],
	} = await getTemplates({ 
        limit: 11, q, page, sort 
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
                total={total}
                page={page}
                sort={sort}
                q={q}
            />
		</main>
	)
}

export default TemplatesPage