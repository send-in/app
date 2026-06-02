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
} from "@/icons"

import {
    IConnection,
    SORT_OPTIONS
} from "@/lib"
// #endregion

interface IConnectionFormProps {
    connections: IConnection[]
    q?: string
    sort?: string
    page?: number
    total?: number
}

export const ConnectionForm = ({
    connections,
    q,
    sort,
    page,
    total,
}: IConnectionFormProps) => {

    const router = useRouter()
    const searchParams = useSearchParams()

    const [selected, setSelected] =
        useState<string[]>([])

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

        router.push(
            `?${params.toString()}`
        )
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

        if (!selected.length)
            return

        router.push(
            `/options?ids=${selected.join(",")}`
        )
    }

    return (
        <>
            <aside className="
                flex w-full justify-between 
                px-2 items-center mb-8 
                desktop:mb-12
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
                    onBlur={(e) =>
                        updateQuery(
                            "q",
                            e.target.value
                        )
                    }
                    endIcon={<Search />}
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
            </aside>

            <div className="
                w-full gap-4
                grid grid-cols-5
                mb-3
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

            {!!total && total > 1 && (
                <Pagination
                    page={Number(page) ?? 1}
                    count={Number(total)}
                />
            )}

            {!!connections.length && (
                <aside className="
                    flex gap-10 max-w-max
                    rounded-full bg-white
                    shadow-sm sticky
                    bottom-10  p-2
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
        </>
    )
}