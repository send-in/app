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
            items-center h-auto relative
        ">
            <ConnectionForm
                q={q}
                sort={sort}
                page={page}
                total={total}
                connections={connections}
                syncUsed={
                    account.plan === "free" ?
                    account.lifetimeSyncsUsed :
                    account.dailySyncsUsed
                }
                syncLimit={
                    account.plan === "free" ?
                    1 : 5
                }
            />
        </main>:
        <ErrorComponent/>
    )
}
export default ConnectionsPage
