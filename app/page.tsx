// #region imports
import { MessageForm } from "@/components"

import { 
    getMessages, 
    getTemplates, 
    parseQuery 
} from "@/lib"
// #endregion

const DashboardPage = async({ searchParams }:{
	searchParams?: Promise<{ 
        q?: string
        sort?: string
        page?: string
    }>
}) => {
    const { 
        q, page, sort 
    } =  await parseQuery(searchParams)

    const {
        total,
        data: messages = []
    } = await getMessages({ 
        limit: 7, q, page, sort 
    })

    const {
        data: templates = []
    } = await getTemplates()

    return (
        <main className="
            p-8 desktop:px-[5%] pt-[9%]
            text-grey-200 text-base
            desktop:text-xl h-screen 
        ">
            <MessageForm
                templates={templates}
                messages={messages}
                total={total}
                page={page}
                sort={sort}
                q={q}
            />
        </main>
    )
}
export default DashboardPage
