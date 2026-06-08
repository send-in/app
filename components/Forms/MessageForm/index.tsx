"use client"

// #region imports
import Image from "next/image"
import Link from "next/link"

import {
	useCallback,
	useEffect,
	useState,
} from "react"

import {
	useRouter,
	useSearchParams,
} from "next/navigation"

import {
	DateTime,
	TimeZone,
	DashboardCard,
	Editor,
} from "@/components"

import {
	Button,
	Pagination,
	Select,
	TextField,
} from "@/base"

import { Search } from "@/icons"

import {
    deleteMessage,
	IMessage,
	ITemplate,
    SORT_OPTIONS,
    updateMessage,
} from "@/lib"
// #endregion

interface IMessageFormProps {
	messages: IMessage[]
	templates: ITemplate[]
	total?: number
	page?: number
	sort?: string
	q?: string
}

export const MessageForm = ({
	messages,
	templates,
	total,
	page,
	sort,
	q,
}: IMessageFormProps) => {
	const router = useRouter()
	const searchParams = useSearchParams()

    const [items, setItems] = 
        useState<IMessage[]>(messages)
	const [message, setMessage] = 
        useState<IMessage | undefined>(messages?.[0])
        
	const [timezone, setTimezone] = 
        useState<string | undefined>(message?.timezone)
	const [template, setTemplate] = 
        useState<ITemplate | undefined>(message?.template)
    const [value, setValue] = 
        useState<string>(
            message?.message ?? template?.value ?? ""
        )

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

    const handleDelete = useCallback(
        async () => {
            if (!message) return

            const previousItems = items
            const previousMessage = message

            const index = items.findIndex(
                item => item.id === message.id,
            )

            const nextItems = items.filter(
                item => item.id !== message.id,
            )

            setItems(nextItems)

            setMessage(
                nextItems.length
                    ? nextItems[
                        Math.min(
                            index,
                            nextItems.length - 1,
                        )
                    ]
                    : undefined,
            )

            const res = await deleteMessage(
                message.id,
            )

            if (!res.success) {
                setItems(previousItems)
                setMessage(previousMessage)
            }
        },
        [
            items,
            message,
        ],
    )

    const handleSave = useCallback(
        async () => {
            if (!message) return
            
            const isTemplate = 
                template?.id && 
                template.value.trim() === value.trim()

            const res = await updateMessage(
                message.id,
                {
                    timezone,
                    scheduleTime:
                        message.scheduledAt.toISOString(),
                    ...(
                        isTemplate ?
                        { templateId: template?.id } :
                        { message: value }
                    ),
                },
            )

            if (!res.success || !res.data)
                return

            setItems(prev =>
                prev.map(item =>
                    item.id === message.id
                        ? res.data!
                        : item,
                ),
            )

            setMessage(res.data)
            setTemplate(res.data.template)
        },
        [
            message,
            template,
            timezone,
            value,
        ],
    )

	useEffect(
		() => {
			if (!message) return
            setTimezone(message.timezone)

            if(message.template){
                setTemplate(message.template)
                setValue(message.template.value)
            }

            else if(message.message){
                setTemplate(undefined)
                setValue(message?.message)
            }

		},
		[message]
	)

    useEffect(
		() => {
			if (!messages) return
            setItems(messages)
		},
		[messages]
	)

    const originalValue =
        message?.message ??
        message?.template?.value ??
        ""

    const hasChanges =
        originalValue !== value ||
        (message?.templateId ?? undefined) !== template?.id ||
        (message?.timezone ?? "") !== (timezone ?? "")

    const isValid =
        Boolean(template?.id) ||
        Boolean(value.trim())

	return (
		<main className="
			flex items-start justify-center
            gap-12 h-full
		">
			<section
				data-length={messages.length > 0}
				className="
					w-[45%] h-full flex flex-col
					items-start gap-6 peer rounded-2xl
					data-[length=false]:bg-bluewash 

					data-[length=false]:justify-center
					data-[length=false]:items-center
					data-[length=false]:h-[90%]
				"
			>
				{
                    items && items.length > 0 ?
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
                                    items.map(
                                        (item, index) =>
                                            <DashboardCard
                                                key={index}
                                                data={item}
                                                selected={(item.id === message?.id)}
                                                onClick={()=>
                                                    setMessage(item)
                                                }
                                            />
                                    )
                                }
                            </aside>

                            {
                                !!total && total > 11 &&
                                <Pagination
                                    page={Number(page) || 1}
                                    count={Number(total)}
                                />
                            }
                        </section> 
                    </>:
                    <p className="
						text-2xl desktop:text-6xl
						text-blue-100 font-semibold
					">
						No messages found 📭
					</p>
				}
			</section>

			<section
				className="
					flex flex-col gap-4
					desktop:gap-6
					w-[45%] h-full
				"
			>
				<Link
					className="
						flex gap-2 items-center
						desktop:gap-6 w-fit
					"
					href={message?.profile || ""}
					target="_blank"
					title={
						`${message?.name} LinkedIn profile`
					}
				>
					<Image
						className="
							rounded-full
							desktop:scale-120
							data-[picture=true]:border-3 
                            border-blue-100
						"
						alt="SendIn"
                        data-picture={!!message?.picture}
						src={
							message?.picture ||
							"/profile.svg"
						}
						width={50}
						height={50}
					/>

					<div>
						<h2 className="
							text-2xl text-blue-100
							desktop:text-3xl
						">
							{
								message?.name ||
								"No message selected"
							}
						</h2>

						<p>
							{
								(message?.company || "company") +
								",\u2002" +
								(message?.timezone || "timezone")
							}
						</p>
					</div>
				</Link>

				<aside
					className="
						w-full flex
						justify-between items-center
					"
				>
					<Select<ITemplate | undefined>
						size="md"
						variant="primary"
						placeholder="Select Template"
						options={templates}
						selected={template}
						onChange={(value) => {
                            const next = value as ITemplate
                            setTemplate(next)
                            setValue(next.value)
                        }}
					/>

					<div className="flex gap-4">
						<DateTime scheduledAt={
                            message?.scheduledAt
                        }/>

						<TimeZone
							value={timezone}
							onChange={setTimezone}
						/>
					</div>
				</aside>

				<Editor
                    noTemplate
                    onValueChange={
                        (val) => setValue(val)
                    }
                    initialValue={
                        message?.message ??
                        template?.value
                    }
                />

				<aside
					className="
						mt-2 flex w-full
						gap-2 desktop:gap-4
						justify-end
					"
				>
					<Button
                        onClick={handleDelete}
                        variant="secondary"
                        disabled={!message}
                    >
                        Delete
                    </Button>

                    <Button
                        onClick={handleSave}
                        variant="primary"
                        disabled={
                            !message ||
                            !isValid ||
                            !hasChanges
                        }
                    >
                        Reschedule
                    </Button>
				</aside>
			</section>
		</main>
	)
}