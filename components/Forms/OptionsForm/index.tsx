"use client"

// #region imports
import { 
    useCallback, 
    useEffect, 
    useMemo, 
    useState 
} from "react"

import { useRouter } from "next/navigation"

import { 
    GoTo, 
    Trash 
} from "@/icons"

import {
    DateTime,
    OptionsCard,
} from "@/components"

import {
    Button,
    Radio,
    Select,
} from "@/base"

import {
    IConnection,
    IScheduledConnection,
    ITemplate,
} from "@/lib"
import { toDateTimeLocal } from "@/utils"
// #endregion


interface IOptionsFormProps {
    templates: ITemplate[]
    options: IConnection[]
    timezone: string
}

export const OptionsForm = ({
    templates,
    options,
    timezone
}: IOptionsFormProps) => {

    const router = useRouter()

    const [items, setItems] = useState<IScheduledConnection[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    const [selected, setSelected] = useState<string[]>([])
    const [template, setTemplate] = useState<ITemplate>()

    const handleSelect = useCallback(
        (isSelected: boolean, publicId: string) => setSelected(
            prev =>
                isSelected
                    ? prev.filter(id => id !== publicId)
                    : [publicId, ...prev]
        ), 
        []
    )

    const handleSelectAll = useCallback(
        () => setSelected(
            prev =>
                prev.length === options.length
                    ? []
                    : options.map(item => item.publicId)
        ),
        [options]
    )

    const handleDelete = useCallback(
        () => {
            const params = new URLSearchParams(
                window.location.search
            )

            const ids = params.getAll("ids")
            const remaining = ids.filter(
                id => !selected.includes(id)
            )

            setSelected([])
            params.delete("ids")
            remaining.forEach(id => params.append("ids", id))
            router.push(`${window.location.pathname}?${params.toString()}`)
            router.refresh()
        },
        [
            selected,
            router
        ]
    )

    const handleSave = useCallback(
        async () => {
            if (!selected.length) return
            setLoading(true)

            try {
                const payload = items
                .filter(item => selected.includes(
                    item.publicId,
                ))
                .map(item => ({
                    profile: item.publicId,
                    templateId: item.template?.id,
                    timezone: item.timezone,
                    scheduleTime: item.dateTime,
                }))
                console.log(payload)
                // await createMessages(payload)

            } finally {
                setLoading(false)
            }
        },
        [
            items,
            selected,
            router
        ]
    )

    const isScheduleDisabled = useMemo(
        () =>
            !selected.length || items
            .filter(
                item =>
                    selected.includes(
                        item.publicId,
                    ),
            )
            .some(
                item =>
                    !item.template?.id ||
                    !item.dateTime ||
                    !item.timezone,
            ),
        [
            selected,
            items
        ],
    )

    const handleUpdate = useCallback(
        (id: string, updates: Partial<IScheduledConnection>) => 
            {
                setItems(
                    prev => prev.map(
                        item => item.publicId === id ? 
                        { ...item, ...updates} : 
                        item,
                    ),
                )
            },
        [],
    )

    const handleTemplate = useCallback(
        (next?: ITemplate) => {
            setTemplate(next)
            setItems(prev =>
                prev.map(item =>
                    selected.includes(item.publicId) ? 
                    { ...item, template: next} : 
                    item,
                ),
            )
        },
        [selected],
    )

    const handleTimezone = useCallback(
        (next: string) => {
            setItems(prev =>
                prev.map(item =>
                    selected.includes(item.publicId) ? 
                    { ...item, timezone: next } : 
                    item,
                ),
            )
        },
        [selected],
    )

    const handleDate = useCallback(
        (next: string) => {
            setItems(prev =>
                prev.map(item =>
                    selected.includes(item.publicId) ? 
                    { ...item, dateTime: next } :
                    item,
                ),
            )
        },
        [selected],
    )

    useEffect(
        ()=>setItems(options),
        [options]
    )
    
    return (
        <>
            <section className="
                flex w-[92%] justify-between
                items-center
            ">
                <aside className="
                    flex gap-10 w-[40%]
                    items-center
                ">
                     <Button
                        size="auto"
                        variant="danger"
                        disabled={!selected.length}
                        startIcon={<Trash/>}
                        onClick={handleDelete}
                    >
                        Delete
                    </Button>

                    <Radio
                        label="Select all"
                        onChange={() => ""}
                        onClick={handleSelectAll}
                        checked={
                            !!selected.length &&
                            selected.length === options.length
                        }
                    />

                    {error && 
                        <p className="
                            mr-auto animate-fade-in-fast 
                            text-red-800
                        ">
                            Error: {error}
                        </p>
                    }
                </aside>

                <aside className="flex gap-10">
                    <Select<ITemplate>
                        buttonClassName="w-56"
                        size="md"
                        variant="primary"
                        placeholder="Select Template"
                        disabled={!templates.length}
                        options={templates}
                        selected={template}
                        onChange={handleTemplate}
                    />

                    <DateTime 
                        onDateChange={handleDate}
                        onTimezoneChange={handleTimezone}
                        scheduledAt={new Date()}
                        profile={{timezone}}
                    />
                </aside>
            </section>

            <ul className="
                flex flex-col min-h-[55vh]
                items-center desktop:justify-start
                gap-4 h-full desktop:h-fit w-[92%]
            ">
                {
                    items.map(
                        ({
                            name,
                            picture,
                            bio,
                            country,
                            publicId,

                            template,
                            dateTime,
                            timezone
                        }) => {

                            const isSelected =
                                selected.includes(publicId)

                            return (
                                <OptionsCard
                                    bio={bio}
                                    key={publicId}
                                    country={country}
                                    profile={publicId}
                                    templates={templates}
                                    name={name || "Unnamed"}
                                    picture={picture || "/profile.svg"}
                                    
                                    selected={isSelected}
                                    handleUpdate={handleUpdate}
                                    setSelected={() => handleSelect(
                                        isSelected, 
                                        publicId
                                    )}

                                    timeOverride={dateTime}
                                    timezoneOverride={timezone}
                                    templateOverride={template}
                                />
                            )
                        }
                    )
                }
            </ul>

            <aside className="
                flex gap-4 justify-between items-center
                w-max rounded-full bg-white shadow-sm
                sticky bottom-10 left-[5%] p-1 self-start
            ">
                <Button
                    disabled={isScheduleDisabled}
                    onClick={handleSave}
                    loading={loading}
                    loadingText="Scheduling"
                    endIcon={<GoTo/>}
                    variant="primary"
                >
                    {
                        selected.length
                            ? `Schedule ${selected.length}`
                            : "Select to continue"
                    }
                </Button>
            </aside>
        </>
    )
}