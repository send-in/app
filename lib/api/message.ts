"use server"

// #region imports
import { _MESSAGES_URL } from "@/constants"
import { parseFilters } from "@/lib/common"

import {
	_GET,
	_POST,
	_DELETE,
	IResponse,
} from "@/lib/api/utils"

import {
	IMessage,
	IRawMessage,
	serializeMessage,
} from "@/lib/types"
// #endregion

export const getMessages = async(params?: {
    q?: string,
    sort?: string,
    page?: number
}): Promise<IResponse<IMessage[]>> => {
	const res = await _GET<IRawMessage[]>(
		_MESSAGES_URL,
        { ...parseFilters(params) },
		{ withAuth: true },
	)

    console.log(res.data)

	if (res.success && res.data) {
		return {
			success: true,
            total: res?.total ?? 0,
            page: res.page ?? 1,
			data: res.data.map(
				serializeMessage,
			),
		}
	}

	return {
		success: false,
		error: res.error,
	}
}

export const createMessage = async(
	payload: {
		name: string
		profile: string
		picture?: string
		company?: string
		timezone?: string
		message?: string
		templateId?: string
	},
): Promise<IResponse<boolean>> => {

	const res = await _POST(
		_MESSAGES_URL,{},
		{
			withAuth: true,
			body: JSON.stringify(payload),
		},
	)

	if (res.success) {
		return {
			success: true,
			data: true,
		}
	}

	return {
		success: false,
		error: res.error,
	}
}

export const deleteMessage = async(
	id: string,
): Promise<IResponse<boolean>> => {

	const res = await _DELETE(
		`${_MESSAGES_URL}/${id}`,{},
		{
			withAuth: true,
		},
	)

	if (res.success) {
		return {
			success: true,
			data: true,
		}
	}

	return {
		success: false,
		error: res.error,
	}
}