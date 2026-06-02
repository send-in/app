"use server"

// #region imports
import 
    nodemailer, 
    { type SentMessageInfo } 
from 'nodemailer'

import { IResponse } from '@/lib/api'
import { 
    _EMAIL_PASS, 
    _EMAIL_USER 
} from '@/constants'
// #endregion

export interface IEmailRequest {
    subject: string
    html: string
}

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: _EMAIL_USER,
        pass: _EMAIL_PASS
    }
})

export const sendEmail = async ({
    subject,
    html,
}: IEmailRequest): Promise<IResponse<SentMessageInfo>> => {
    try {
        const info = await transporter.sendMail({
            to: _EMAIL_USER,
            from: _EMAIL_USER,
            subject,
            html,
        })

        return { 
            success: true, 
            data: info 
        }
    } 
    catch (error) {
        return { 
            success: false,
            error: JSON.stringify(error)
        }
    }
}