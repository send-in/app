"use client"

// #region imports
import Image from "next/image"
import { useActionState, useEffect } from "react"

import { IFormResponse } from "@/lib"

import { 
    LinkedinConnect, 
    TimeZone 
} from "@/components"

import {
    Button,
    TextField,
} from "@/base"

import {
    IProfileForm,
    profileAction,
} from "./action"
// #endregion

const flexClass = `
    flex flex-col gap-4 w-full
`

export const ProfileForm = ({
    name = "",
	email = "",
	picture = "",
	timezone = "",
	token = "",
}: {
	name?: string
	email?: string
	picture?: string
	timezone?: string
	token?: string
}) => {
    const [state, action, isPending] = 
        useActionState<IFormResponse<IProfileForm>, FormData>(
            profileAction,
            {
                success: false,
                errors: {},
                data: {
                    name,
                    timezone
                }
            }
        )

    useEffect(
		() => {
            if(
                !!state.success && 
                !isPending && 
                !!window
            ){ window.location.reload() }
        },
		[state.success,isPending]
	)

    return (
        <form 
            action={action}
            className="
                flex flex-col gap-12
                pl-10 items-start w-[42%]
            "
        >
            <section className={flexClass}>
                <Image
                    src={picture || "/profile.svg"}
                    className="rounded-full"
                    alt="SendIn"
                    width={80}
                    height={80}
                />

                <aside className="
                    flex justify-between
                    items-center w-full
                ">
                    <h1
                        className="
                            text-3xl desktop:text-4xl
                            text-blue-100 font-semibold
                        "
                    >
                        Hey, {name} !
                    </h1>

                    <TimeZone
                        name="timezone"
                        value={timezone || ""}
                    />
                </aside>

                <TextField
                    name="name"
                    fullWidth
                    label="Full Name"
                    variant="filled"
                    defaultValue={name || ""}
                    placeholder={name || ""}
                    error={!!state.errors?.name}
                    helperText={state.errors?.name}
                />

                <TextField
                    disabled
                    fullWidth
                    label="Email"
                    variant="filled"
                    defaultValue={email || ""}
                    placeholder={email || ""}
                />
            </section>


            <section className={flexClass}>
                <LinkedinConnect 
                    token={token}
                    picture={picture}
                />

                <p className="
                    text-sm desktop:text-lg
                    text-grey-200
                ">
                    We take your li_at cookie and
                    user agent information...
                </p>

                <Button
                    className="max-w-max!"
                    type="submit"
                    variant="secondary"
                    loading={isPending}
                    loadingText="Saving"
                >
                    Save Changes
                </Button>
            </section>
        </form>
    )
}