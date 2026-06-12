// #region imports
import { 
    ConnectionForm, 
    ErrorComponent
} from "@/components"

import { 
    getConnections,
    getProfile,
    parseQuery 
} from "@/lib"
// #endregion

const ConnectionsPage = async({ searchParams }:{
	searchParams?: Promise<{ 
        q?: string
        sort?: string
    }>
}) => {
    const { q, sort, page } =
    await parseQuery(searchParams)

    const { data: account } = await getProfile()
    const { data: connections = [], total } = await getConnections({
        q,
        sort,
        page,
    })

    return (
        account ?
        <main className="
            pt-[8%] p-8 flex flex-col 
            items-center h-auto min-h-[55vh] 
            relative
        ">
            <ConnectionForm
                q={q}
                sort={sort}
                page={page}
                total={total}
                connections={connections}
                syncLimit={account.dailySyncsUsed}
            />
        </main>:
        <ErrorComponent/>
    )
}
export default ConnectionsPage
