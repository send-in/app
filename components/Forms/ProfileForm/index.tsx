"use client"

// #region imports
import Image from "next/image"

import { useActionState } from "react"

import { LinkedinConnect } from "@/components"
import { Logo } from "@/icons"

import {
    Button,
    TextField,
} from "@/base"

import {
    logout,
    IFormResponse,
} from "@/lib"

import {
    IProfileForm,
    profileAction,
} from "./action"
// #endregion

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
            }
        )

    return (
        <form
            action={action}
            className="
                flex items-center justify-between
                gap-8 desktop:gap-12 h-full
            "
        >
            <section className="
                flex flex-col gap-4
                pl-10 items-start w-[42%]
            ">
                <Image
                    className="rounded-full"
                    alt="SendIn"
                    src={
                        picture ||
                        "/profile.svg"
                    }
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

                    {/* <TimeZone
                        name="timezone"
                        defaultValue={
                            timezone || ""
                        }
                    /> */}
                </aside>

                <TextField
                    name="name"
                    fullWidth
                    label="Full Name"
                    variant="filled"
                    defaultValue={name || ""}
                    className="!rounded-xl !px-4"
                    error={!!state.errors?.name}
                    helperText={state.errors?.name}
                />

                <TextField
                    className="!rounded-xl !px-4 mb-12"
                    disabled
                    fullWidth
                    label="Email"
                    variant="filled"
                    defaultValue={email || ""}
                />

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
                    type="submit"
                    variant="secondary"
                    loading={isPending}
                    loadingText="Saving"
                >
                    Save Changes
                </Button>

                {
                    state.success &&
                    <p className="
                        text-sm text-green-600
                    ">
                        Profile updated successfully
                    </p>
                }
            </section>

            <section
                className="
                    bg-blue-100 rounded-3xl
                    p-6 desktop:mt-[5%]
                    relative h-[90%] w-[30%]
                    flex items-end justify-end
                "
            >
                <Button
                    formAction={logout}
                    variant="ghost"
                    className="
                        !text-white
                        hover:!text-charcoal-100
                    "
                >
                    Log out ?
                </Button>

                <Logo
                    size={50}
                    className="
                        absolute top-8 right-5
                        fill-white
                    "
                />
            </section>
        </form>
    )
}