// #region imports
import {
	Editor,
	TemplateCard
} from "@/components"

import { 
	Button, 
	IconButton,
	Pagination
} from "@/base"

import { 
	getTemplates,
	parseQuery
} from "@/lib"
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
		success,
		data: templates = [],
	} = await getTemplates({
		limit: 18,
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
			<section
				data-length={(templates?.length || 0) > 0}
				data-single={(templates?.length || 0) < 10}
				className="
					flex flex-col gap-4 desktop:gap-6 w-[45%] 
					h-auto relative items-start group
					data-[length=false]:justify-center 
                    data-[length=false]:items-center 
					data-[length=false]:bg-bluewash 
                    rounded-2xl data-[length=false]:h-[90%]
				"
			>
                {
                    templates && templates?.length > 0 ? 
                    <section className="
                        w-full h-full justify-between 
                        flex flex-col items-end gap-4
                    ">
                        <aside className="
                            w-full h-full flex flex-col 
                            gap-3 items-center
                        ">
                            {
                                !!templates?.length &&
                                templates.map(
                                    (template, index) =>
                                        <TemplateCard
                                            key={index}
                                            template={template}
                                            selected={false}
                                        />
                                )
                            }
                        </aside>

                        {
                            templates && 
                            templates?.length > 18 &&
                            <Pagination
                                page={Number(query.page)}
                                count={Number(total)}
                            />
                        }
                    </section> :
                    <p className="
                        text-2xl desktop:text-6xl 
                        text-blue-100 font-semibold
                    ">
                        Create your first template 📜
                    </p>
                }

				{
					!!templates?.length &&
					<IconButton
						variant="neutral"
						disabled={!templates?.length}
						className="
							absolute bottom-0 left-4 
							group-data-[single=true]:-bottom-10
						"
					>
						+
					</IconButton>
				}


			</section>

			<section
				className="flex flex-col w-[45%] h-full gap-6"
			>
				<Editor/>

				<aside
					className="flex gap-2 w-full justify-end"
				>
					<Button
						disabled
						variant="secondary"
					>
						Delete
					</Button>

					<Button
						disabled
						variant="primary"
					>
						Save
					</Button>
				</aside>
			</section>
		</main>
	)
}

export default TemplatesPage