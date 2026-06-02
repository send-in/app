"use client"

// #region imports
import { useState } from "react"

import {
    DateTime,
    OptionsCard,
    ConnectionSearch
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
    connections: IConnection[]
}

export const OptionsForm = ({
    connections,
    templates,
    options,
}: IOptionsFormProps) => {

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

    return (
        <>
            <section className="
                flex w-full justify-between
                items-center gap-12 px-2
            ">
                <aside className="
                    flex gap-10 w-[40%] px-5
                ">
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

                <Button
                    variant="danger"
                    className="!w-[10%]"
                    size="auto"
                >
                    Delete
                </Button>
            </section>

            <ul className="
                flex flex-col justify-between
                items-center desktop:justify-start
                gap-4 h-full desktop:h-fit
            ">
                {
                    options.map(
                        ({
                            firstName,
                            lastName,
                            picture,
                            company,
                            country,
                            publicId,
                        }) => {

                            const isSelected =
                                selected.includes(publicId)

                            return (
                                <OptionsCard
                                    key={publicId}
                                    profile={publicId}
                                    name={
                                        `${firstName} ${lastName}` ||
                                        "Unnamed"
                                    }
                                    picture={
                                        picture ||
                                        "/profile.svg"
                                    }
                                    company={company}
                                    country={country}
                                    templates={templates}
                                    selected={isSelected}
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
                sticky bottom-10 ml-5 px-4
            ">
                <Button
                    disabled={!selected.length}
                    variant="primary"
                >
                    {
                        selected.length
                            ? `Schedule ${selected.length}`
                            : "Select to continue"
                    }
                </Button>

                <ConnectionSearch
                    connections={connections}
                />
            </aside>
        </>
    )
}