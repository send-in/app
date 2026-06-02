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
            pt-[8%] h-screen
            p-8 desktop:px-[5%]
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
