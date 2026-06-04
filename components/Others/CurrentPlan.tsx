

// #region imports
// #endregion

import { Button } from "@/base"

interface ICurrentPlanProps {
    planName: string
    usedTokens: number
    totalTokens: number
    renewsAt: string
}

const CurrentPlan = ({
    planName,
    usedTokens,
    totalTokens,
    renewsAt,
}: ICurrentPlanProps) => {
    const remainingTokens = Math.max(
        totalTokens - usedTokens,
        0
    )

    const percentageUsed = Math.min(
        (usedTokens / totalTokens) * 100,
        100
    )

    return (
        <article
            className="
                bg-white border-grey-100
                rounded-xl p-6 w-[75%] border-2
                flex flex-col gap-2 text-grey-200
            "
        >
            <section className="flex items-center justify-between">
                <aside>
                    <p className="text-grey-200 text-sm">
                        Current Plan
                    </p>

                    <h2 className="text-2xl font-semibold text-charcoal-100">
                        {planName}
                    </h2>
                </aside>

                <aside className="text-sm text-right">
                    <p>Resets automatically</p>
                    <p> {renewsAt} </p>
                </aside>
            </section>

            <section>
                <aside className="flex justify-between">
                    <p className="text-grey-200 text-sm">
                        Token Usage
                    </p>

                    <p className="text-charcoal-100 font-medium">
                        {remainingTokens.toLocaleString()} remaining
                    </p>
                </aside>

                <aside
                    className="
                        h-3 bg-grey-100
                        rounded-full overflow-hidden
                    "
                >
                    <div
                        className="
                            h-full bg-blue-100
                            transition-all
                        "
                        style={{
                            width: `${percentageUsed}%`,
                        }}
                    />
                </aside>

                <p className="text-grey-200 text-sm mt-2">
                    {usedTokens.toLocaleString()} /{" "}
                    {totalTokens.toLocaleString()} used
                </p>
            </section>
        </article>
    )
}

export default CurrentPlan