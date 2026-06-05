"use client"

// #region imports
import { useCallback, useEffect, useState } from "react"
import { deleteTemplate, ITemplate } from "@/lib"

import {
	Editor,
	TemplateCard
} from "@/components"

import { 
	Button, 
	IconButton,
	Pagination
} from "@/base"
// #endregion

const PAGE_SIZE = 11

interface ITemplateForm {
    templates: ITemplate[]
    page?: number
    total?: number
}

export const TemplateForm = ({
    templates,
    page,
    total,
}: ITemplateForm) => {
    const [items, setItems] = useState(templates)
    const [selected, setSelected] = useState<ITemplate | undefined>(
        templates?.at(0)
    )

    const handleCreate = useCallback(
        () => {
            const template: ITemplate = {
                id: `temp-${Date.now()}`,
                label: "Untitled Template",
                value: "",

                createdAt: new Date(),
                updatedAt: new Date(),
            }

            setItems(prev =>
                [
                    template,
                    ...prev,
                ].slice(0, PAGE_SIZE)
            )

            setSelected(template)
        }, 
        []
    )

    const handleDelete = useCallback(
        async () => {
            if (!selected)
                return

            const prevItems = items
            const prevSelected = selected

            const index = items.findIndex(
                item => item.id === selected.id
            )

            const nextItems = items.filter(
                item => item.id !== selected.id
            )

            setItems(nextItems)
            setSelected(
                nextItems.length
                    ? nextItems[
                        Math.min(index, nextItems.length - 1)
                    ] : undefined
            )

            if (selected.id.startsWith("temp-"))
                return

            const res = await deleteTemplate(
                selected.id
            )

            if (!res.success) {
                setItems(prevItems)
                setSelected(prevSelected)
            }
        },
        [items, selected]
    )

    useEffect(
        () => setItems(templates),
        [templates]
    )

	return (
		<>
			<section
				data-length={(items?.length || 0) > 0}
				data-single={(items?.length || 0) < 10}
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
                    items && items?.length > 0 ? 
                    <section className="
                        w-full h-full justify-between 
                        flex flex-col items-end gap-4
                    ">
                        <aside className="
                            w-full h-full flex flex-col 
                            gap-3 items-center
                        ">
                            {
                                !!items?.length &&
                                items.map(
                                    (template, index) =>
                                        <TemplateCard
                                            key={index}
                                            template={template}
                                            selected={
                                                selected?.id === template.id
                                            }
                                            onChange={() =>
                                                setSelected(template)
                                            }
                                        />
                                )
                            }
                        </aside>

                        {
                            items && 
                            items?.length > 18 &&
                            <Pagination
                                page={Number(page)}
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
					!!items?.length &&
					<IconButton
						variant="neutral"
						disabled={!items?.length}
                        onClick={handleCreate}
						className="
							absolute bottom-0 left-4 text-2xl!
							group-data-[single=true]:-bottom-15
						"
					>
						+
					</IconButton>
				}


			</section>

			<section
				className="flex flex-col w-[45%] h-full gap-6"
			>
				<Editor

                />

				<aside
					className="flex gap-2 w-full justify-end"
				>
					<Button
						disabled={!selected}
                        variant="secondary"
                        onClick={handleDelete}
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
		</>
	)
}