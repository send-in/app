"use client"

// #region imports
import {
    ReactNode,
    useState,
} from "react"

import {
    useRouter,
    useSearchParams,
} from "next/navigation"

import {
    Select,
    TextField,
} from "@/base"

import { Search } from "@/icons"
import { IConnection } from "@/lib"
// #endregion

interface ConnectionSearchProps {
    connections: IConnection[]
}

const ConnectionSearch = ({
    connections,
}: ConnectionSearchProps) => {

    const router = useRouter()
    const searchParams = useSearchParams()

    const [search, setSearch] =
        useState("")

    const handleSelect = (
        publicId: string
    ) => {

        const params =
            new URLSearchParams(searchParams)

        const ids =
            params
                .get("ids")
                ?.split(",")
                .filter(Boolean) ?? []

        if (!ids.includes(publicId))
            ids.push(publicId)

        params.set(
            "ids",
            ids.join(",")
        )

        router.push(
            `?${params.toString()}`
        )
    }

    return (
        <Select<string | ReactNode>
            className="
                dropdown-top
                text-base desktop:text-xl py-4
            "
            size="md"
            variant="neutral"
            placeholder="Add Connections"
            onChange={(value)=>{
                if (
                    typeof value === "string"
                )
                    handleSelect(value)
            }}
            options={[
                <div
                    key="search"
                    className="
                        sticky -top-2
                        bg-white py-2
                    "
                >
                    <TextField
                        className="min-w-56"
                        variant="filled"
                        placeholder="Search"
                        value={search}
                        onChange={(e)=>
                            setSearch(
                                e.target.value
                            )
                        }
                        endIcon={<Search />}
                    />
                </div>,
                ...connections
                    .filter(
                        ({ name }) =>
                            name.toLowerCase()
                                .includes(
                                    search.toLowerCase()
                                )
                    )
                    .map(({ name }) =>  name),
            ]}
        />
    )
}

export default ConnectionSearch