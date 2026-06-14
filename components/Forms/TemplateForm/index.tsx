"use client"

// #region imports
import {
    useCallback,
    useEffect,
    useState 
} from "react"

import {
	useRouter,
	useSearchParams,
} from "next/navigation"

import { 
    compareLexicalText, 
} from "@/utils"

import { 
    createTemplate,
    deleteTemplate, 
    ITemplate,
    SORT_OPTIONS,
    updateTemplate
} from "@/lib"

import { Search } from "@/icons"

import {
    Editor,
	TemplateCard
} from "@/components"

import { 
	Button, 
	IconButton,
	Pagination,
    Select,
    TextField
} from "@/base"

// #endregion

const PAGE_SIZE = 11

interface ITemplateForm {
    templates: ITemplate[]
    page?: number
    total?: number
	sort?: string
    q?: string
}

export const TemplateForm = ({
    templates,
    page,
    total,
	sort,
    q,
}: ITemplateForm) => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const [error, setError] = useState<string | undefined>("")
    const [items, setItems] = useState<ITemplate[]>(templates)
    const [selected, setSelected] = useState<ITemplate | undefined>(
        templates?.at(0)
    )

    const [title, setTitle] = useState<string>(selected?.label || "")
    const [value, setValue] = useState<string>(selected?.value || "")

    const updateQuery = useCallback((
		key: string,
		value?: string
	) => {
		const params =
			new URLSearchParams(searchParams)

		!value ?
			params.delete(key) :
			params.set(key, value)

		if (key !== "page")
			params.delete("page")

		router.push(`?${params.toString()}`)

	}, [searchParams])

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
                setError(res?.error)
                setItems(prevItems)
                setSelected(prevSelected)
            }
        },
        [items, selected]
    )

    const handleSave = useCallback(
        async () => {
            if (!selected)
                return

            if (selected.id.startsWith("temp-")) {
                const res = await createTemplate(
                    title,
                    value,
                )

                if (!res.success || !res.data){
                    setError(res?.error)
                    return
                }

                setItems(prev =>
                    prev.map(item =>
                        item.id === selected.id
                            ? res.data!
                            : item,
                    ),
                )

                setSelected(res.data)
                return
            }

            const res = await updateTemplate(
                selected.id,
                title,
                value,
            )

            if (!res.success || !res.data){
                setError(res?.error)
                return
            }

            setItems(prev =>
                prev.map(item =>
                    item.id === selected.id
                        ? res.data!
                        : item,
                ),
            )

            setSelected(res.data)
        },
        [
            selected,
            title,
            value,
        ],
    )

    useEffect(
        () => setItems(templates),
        [templates]
    )

    useEffect(
        () => {
            setTitle(selected?.label || "")
            setValue(selected?.value || "")
        },[selected]
    )

    useEffect(() => {
        if (!error) return

        const timer = setTimeout(
            () => setError(undefined),
            3000
        )

        return () => clearTimeout(timer)
    }, [error])

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
                    <>
                        <section className="
                            w-full flex items-center 
                            justify-between gap-48
                        ">
                            <TextField
                                defaultValue={q}
                                fullWidth
                                className="
                                    desktop:!text-xl
                                    desktop:!py-2
                                    text-black!
                                "
                                variant="filled"
                                placeholder="Search"
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        e.currentTarget.blur()

                                        updateQuery(
                                            "q",
                                            e.currentTarget.value
                                        )
                                    }
                                }}
                                onBlur={(e)=>
                                    updateQuery(
                                        "q",
                                        e.target.value
                                    )
                                }
                                endIcon={
                                    <Search
                                        className="desktop:scale-120"
                                    />
                                }
                            /> 
                             <Select
                                options={SORT_OPTIONS}
                                dropdownClassName="w-max!"
                                placeholder="Sort"
                                variant="neutral"
                                size="md"
                                selected={
                                    SORT_OPTIONS.find(
                                        option =>
                                            option.value === sort
                                    )
                                }
                                onChange={(value) =>
                                    updateQuery(
                                        "sort",
                                        value?.value
                                    )
                                }
                            />
                        </section>
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
                        </section>
                    </> :
                    <section className="flex flex-col items-center gap-2">
                        <p className="
                            text-2xl desktop:text-6xl 
                            text-blue-100 font-semibold
                        ">
                            Create your first template 📜
                        </p>

                        <Button
                            variant="primary"
                            onClick={handleCreate}
                        >
                            + Add Template
                        </Button>
                    </section>
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

			<section className="
                flex flex-col 
                w-[45%] h-full 
                gap-6
            ">
				<Editor
                    title={title}
                    key={selected?.id}
                    initialValue={selected?.value || ""}
                    onTitleChange={(val)=>setTitle(val)}
                    onValueChange={(val)=>setValue(val)}
                />

				<aside className="
                    flex gap-2 w-full 
                    justify-end
                ">
                    {error && 
                        <p className="
                            mr-auto animate-fade-in-fast 
                            text-red-800
                        ">
                            {error}
                        </p>
                    }

					<Button
						disabled={!selected}
                        variant="secondary"
                        onClick={handleDelete}
					>
						Delete
					</Button>

					<Button
                        variant="primary"
                        onClick={handleSave}
						disabled={
                            selected?.label === title &&
                            compareLexicalText(selected?.value) === 
                            compareLexicalText(value)
                        }
					>
						Save
					</Button>
				</aside>
			</section>
		</>
	)
}