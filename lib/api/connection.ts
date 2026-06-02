"use server"

// #region imports
import { _CONNECTIONS_URL } from "@/constants"
import { parseFilters } from "@/lib/common"

import {
    _GET,
	_POST,
	IResponse,
} from "@/lib/api"

import {
    IConnection,
	IRawConnection,
	serializeConnection,
} from "@/lib/types"
// #endregion

export const getConnections = async(params?: {
    ids?: string[],
    q?: string,
    sort?: string,
    page?: number
}): Promise<IResponse<IConnection[]>> => {

    const res = await _GET<IRawConnection[]>(
        _CONNECTIONS_URL,
        { ...parseFilters(params) },
        { withAuth: true }
    )

    if (res.success && res.data) {
        return {
            success: true,
            data: res.data.map(serializeConnection),
        }
    }

    return {
        success: false,
        error: res.error,
    }
}

export const enrichConnections = async(
	ids: string[],
): Promise<IResponse<IConnection[]>> => {

	const res = await _POST<IRawConnection[]>(
		_CONNECTIONS_URL,{},
		{
			withAuth: true,
			body: JSON.stringify({
				ids,
			}),
		},
	)

	if (res.success && res.data) {
		return {
			success: true,
			data: res.data.map(
				serializeConnection,
			),
		}
	}

	return {
		success: false,
		error: res.error,
	}
}
