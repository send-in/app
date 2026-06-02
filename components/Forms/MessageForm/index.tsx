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
	IMessage,
	ITemplate,
    SORT_OPTIONS,
} from "@/lib"
// #endregion

interface IMessageFormProps {
	messages: IMessage[]
	templates: ITemplate[]
	total?: number
	page?: number
	q?: string
	sort?: string
}

export const MessageForm = ({
	messages,
	templates,
	total,
	page,
	q,
	sort,
}: IMessageFormProps) => {
	const router = useRouter()
	const searchParams = useSearchParams()

	const [message, setMessage] = useState<IMessage | undefined>(
		messages?.[0]
	)

	const [timezone, setTimezone] = useState<string | undefined>(
		messages?.[0]?.timezone
	)

	const [template, setTemplate] = useState<ITemplate | undefined>(
		templates.find(
			t => t.label === 
			messages?.[0]?.template?.label
		)
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

	useEffect(
		() => {
			if (!message)
				return

			setTemplate(
				templates.find(
					t => t.label === 
					message.template?.label
				)
			)

			setTimezone(
				message.timezone
			)
		},
		[message, templates]
	)


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
                    messages && messages.length > 0 ?
                    <>
                        <section className="
                            w-full flex items-center 
                            justify-between gap-24
                        ">
                            <TextField
                                defaultValue={q}
                                fullWidth
                                className="
                                    desktop:!text-xl
                                    desktop:!py-2
                                "
                                variant="filled"
                                placeholder="Search"
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
                                    messages.map(
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
                                !!total && total > 1 &&
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
					<Select<ITemplate>
						size="md"
						variant="primary"
						placeholder="Select Template"
						options={templates}
						selected={template}
						onChange={(value)=>
							setTemplate(
								value as ITemplate
							)
						}
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
				/>

				<aside
					className="
						mt-2 flex w-full
						gap-2 desktop:gap-4
						justify-end
					"
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
						Reschedule
					</Button>
				</aside>
			</section>
		</main>
	)
}