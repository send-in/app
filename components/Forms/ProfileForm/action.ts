"use server"

// #region imports
import {
    IFormResponse,
    parseForm,
    validateForm,
    requireField,
    type IValidator,
} from "@/lib/common"

import {
    updateProfile,
} from "@/lib/api"
// #endregion


export interface IProfileForm {
    name: string
    timezone: string
}

export const profileAction = async (
    _prevState: IFormResponse<IProfileForm>,
    formData: FormData,
): Promise<IFormResponse<IProfileForm>> => {

    try {
        const data =
            parseForm<IProfileForm>(formData)

        const errors =
            validateForm(
                data,
                {}
            )

        if (errors)
            return {
                success: false,
                errors,
            }

        const {
            name,
            timezone,
        } = data

        const res = await updateProfile({
            name,
            timezone,
        })

        if (!res.success)
            return {
                success: false,
                errors: {
                    name:
                        res.error ??
                        "Unable to update profile",
                },
            }

        return {
            success: true,
        }

    } catch (e) {
        return {
            success: false,
            errors: {
                name:
                    e instanceof Error
                        ? e.message
                        : "Something went wrong",
            },
        }
    }
}