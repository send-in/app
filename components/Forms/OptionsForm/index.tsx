"use client"

// #region imports
import { useRouter } from "next/navigation"
import { useState } from "react"
import { GoTo, Trash } from "@/icons"

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
    ITemplate,
} from "@/lib"
// #endregion


interface IOptionsFormProps {
    templates: ITemplate[]
    options: IConnection[]
}

export const OptionsForm = ({
    templates,
    options,
}: IOptionsFormProps) => {

    const router = useRouter()
    const [selected, setSelected] = useState<string[]>([])
    const [template, setTemplate] = useState<ITemplate>()

    const handleSelect = (
        isSelected: boolean,
        publicId: string,
    ) => setSelected(
        prev =>
            isSelected
                ? prev.filter(id => id !== publicId)
                : [publicId, ...prev]
    )

    const handleSelectAll = () => setSelected(
        prev =>
            prev.length === options.length
                ? []
                : options.map(item => item.publicId)
    )

    const handleDelete = () => {
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
    }
    return (
        <>
            <section className="
                flex w-[92%] justify-between
                items-center gap-12 
            ">
                <aside className="
                    flex gap-10 w-[40%]
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
                </aside>

                <aside className="flex gap-10">
                    <Select<ITemplate>
                        buttonClassName="w-42"
                        size="md"
                        variant="primary"
                        placeholder="Select Template"
                        disabled={!templates.length}
                        options={templates}
                        selected={template}
                        onChange={(value) =>
                            setTemplate(value as ITemplate)
                        }
                    />

                    <DateTime />
                </aside>
            </section>

            <ul className="
                flex flex-col justify-between
                items-center desktop:justify-start
                gap-4 h-full desktop:h-fit w-[92%] 
            ">
                {
                    options.map(
                        ({
                            firstName,
                            lastName,
                            picture,
                            bio,
                            country,
                            publicId,
                        }) => {

                            const isSelected =
                                selected.includes(publicId)

                            return (
                                <OptionsCard
                                    key={publicId}
                                    profile={publicId}
                                    name={`${firstName} ${lastName}` || "Unnamed"}
                                    picture={picture || "/profile.svg"}
                                    bio={bio}
                                    country={country}
                                    templates={templates}
                                    selected={isSelected}
                                    templateOverride={template}
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
            </ul>

            <aside className="
                flex gap-4 justify-between items-center
                w-max rounded-full bg-white shadow-sm
                sticky bottom-10 left-[5%] p-2 self-start
            ">
                <Button
                    disabled={!selected.length}
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