"use client"

// #region imports
import { useEffect, useState } from "react"

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
    Refresh,
} from "@/icons"

import {
    IConnection,
    syncConnections,
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
    syncUsed?: number
}

export const ConnectionForm = ({
    connections,
    syncLimit = 0,
    syncUsed = 0,

    q,
    sort,
    page,
    total,
}: IConnectionFormProps) => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const [error, setError] = useState<string | undefined>("")
    const [selected, setSelected] = useState<string[]>([])
    const [isSyncing, setIsSyncing] = useState(false)

    const handleResync = async () => {
        if (isSyncing)
            return

        setIsSyncing(true)

        try {
            const res = await syncConnections()
            if (!res.success) {
                setError(
                    res.error ??
                    "Failed to create messages",
                )
                return
            }
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
                my-10 min-h-[55vh] 
                auto-rows-min
                content-start
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
                rounded-full flex w-[80%] z-10
                bottom-10 sticky justify-between
                items-center bg-white 
                shadow-sm pr-4 p-1
            ">
                {!!connections.length && (
                    <aside className="
                        rounded-full bg-white
                        p-1
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


                {!!total && total > 1 && (
                    <Pagination
                        className="max-w-max mt-1"
                        page={Number(page) ?? 1}
                        count={Number(total)}
                    />
                )}

                 <aside className="
                    rounded-full bg-white max-h-max
                    p-1 pr-2 flex justify-center
                    items-center text-grey-300 gap-2
                ">
                    <Button
                        onClick={handleResync}
                        loading={isSyncing}
                        loadingText="Syncing..."
                        endIcon={<Refresh />}
                        variant="primary"
                        disabled={syncUsed >= syncLimit}
                    >
                        Resync
                    </Button>
                    {   
                        error ? 
                        <p className="
                            mr-auto animate-fade-in-fast 
                            text-red-800
                        ">
                            {error}
                        </p> :
                        <p>
                            {`${syncLimit-syncUsed} Remaining`} 
                        </p>
                    }
                </aside>
            </section>

        </>
    )
}