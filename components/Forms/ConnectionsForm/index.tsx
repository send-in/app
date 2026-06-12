"use client"

// #region imports
import { useState } from "react"

import {
    useRouter,
    useSearchParams,
} from "next/navigation"

import {
    ConnectionCard,
} from "@/components"

import {
    Button,
    Pagination,
    Radio,
    Select,
    TextField,
} from "@/base"

import {
    Search,
    GoTo,
    Redo,
    Refresh,
} from "@/icons"

import {
    IConnection,
    resyncConnections,
    SORT_OPTIONS
} from "@/lib"
// #endregion

interface IConnectionFormProps {
    connections: IConnection[]
    q?: string
    sort?: string
    page?: number
    total?: number
    syncLimit?: number
}

export const ConnectionForm = ({
    connections,
    syncLimit = 0,

    q,
    sort,
    page,
    total,
}: IConnectionFormProps) => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [selected, setSelected] = useState<string[]>([])
    const [isSyncing, setIsSyncing] = useState(false)

    const handleResync = async () => {
        if (isSyncing)
            return

        setIsSyncing(true)

        try {
            await resyncConnections()
            router.refresh()
        } finally {
            setIsSyncing(false)
        }
    }

    const updateQuery = (
        key: string,
        value?: string
    ) => {
        const params =
            new URLSearchParams(searchParams)

        if (!value)
            params.delete(key)
        else
            params.set(key, value)
        
        params.delete("page")
        router.push(`?${params.toString()}`)
    }

    const handleSelect = (
        isSelected: boolean,
        publicId: string,
    ) => setSelected(
        prev =>
            isSelected
                ? prev.filter(
                    id => id !== publicId
                )
                : [publicId, ...prev]
    )

    const handleSelectAll = () =>
        setSelected(
            prev =>
                prev.length === connections.length
                    ? []
                    : connections.map(
                        item => item.publicId
                    )
        )

    const handleNavigate = () => {
        const params = new URLSearchParams()
        selected.forEach(id => params.append("ids", id))
        router.push(`/connections/options?${params.toString()}`)
        router.refresh()
    }

    return (
        <>
            <aside className="
                flex w-[92%] justify-between 
                items-center desktop:mb-12
            ">
                <Radio
                    checked={
                        !!selected.length &&
                        selected.length ===
                        connections.length
                    }
                    label="Select all"
                    onChange={() => ""}
                    onClick={handleSelectAll}
                />

                <TextField
                    defaultValue={q}
                    className="w-[30%]"
                    variant="filled"
                    placeholder="Search"
                    endIcon={<Search />}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.currentTarget.blur()

                            updateQuery(
                                "q",
                                e.currentTarget.value
                            )
                        }
                    }}
                    onBlur={(e) =>
                        updateQuery(
                            "q",
                            e.target.value
                        )
                    }
                />

                <Select
                    options={SORT_OPTIONS}
                    dropdownClassName="w-max!"
                    className="dropdown-end"
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
            </aside>

            <div className="
                gap-4 w-[92%]
                grid grid-cols-5
                my-10
            ">
                {
                    connections.map(
                        ({
                            publicId,
                            name,
                            picture,
                            bio,
                        }) => {
                            const isSelected =
                                selected.includes(
                                    publicId
                                )

                            return (
                                <ConnectionCard
                                    name={name}
                                    key={publicId}
                                    profile={publicId}
                                    selected={isSelected}
                                    bio={bio || "No bio"}
                                    picture={picture || "/profile.svg"}
                                    setSelected={() =>
                                        handleSelect(
                                            isSelected,
                                            publicId
                                        )
                                    }
                                />
                            )
                        }
                    )
                }
            </div>

            <section className="
                flex w-full
                bottom-10 sticky
                justify-between
            ">
                {!!connections.length && (
                    <aside className="
                        rounded-full bg-white
                        shadow-sm p-1
                    ">
                        <Button
                            disabled={!selected.length}
                            onClick={handleNavigate}
                            endIcon={<GoTo />}
                            variant="primary"
                        >
                            {
                                selected.length
                                    ? `${selected.length} Selected`
                                    : "Select a connect"
                            }
                        </Button>
                    </aside>
                )}

                 <aside className="
                    rounded-full bg-white
                    shadow-sm px-2 flex justify-center
                    items-center text-grey-300 gap-2
                ">
                    <Button
                        onClick={handleResync}
                        loading={isSyncing}
                        loadingText="Syncing..."
                        endIcon={<Refresh />}
                        variant="primary"
                        disabled={syncLimit >= 5}
                    >
                        Resync
                    </Button>
                    <p>{`${5-syncLimit} Remaining`} </p>
                </aside>
            </section>

            {!!total && total > 1 && (
                <Pagination
                    page={Number(page) ?? 1}
                    count={Number(total)}
                />
            )}
        </>
    )
}