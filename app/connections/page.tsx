// #region imports
import { 
    ConnectionForm 
} from "@/components"

import { 
    getConnections,
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

    const {
        data: connections = [],
        total,
    } = await getConnections({
        q,
        sort,
        page,
    })

    return (
        <main className="
            pt-[8%] p-8 flex flex-col 
            items-center h-auto min-h-[52vh] 
            relative
        ">
            <ConnectionForm
                q={q}
                sort={sort}
                page={page}
                total={total}
                connections={connections}
            />
        </main>
    )
}
export default ConnectionsPage
