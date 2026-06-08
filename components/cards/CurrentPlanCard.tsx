// #region imports
import { Button } from "@/base"
import { capitalize } from "@/utils"
// #endregion

interface ICurrentPlanProps {
	planName: string
	usedTokens: number
	totalTokens: number
	renewsAt?: string
	dailySyncsUsed?: number
	dailySchedulesUsed?: number
	lifetimeSyncsUsed?: number
	lifetimeMessagesUsed?: number
}

const CurrentPlan = ({
	planName,
	usedTokens,
	totalTokens,
	renewsAt,
	dailySyncsUsed = 0,
	dailySchedulesUsed = 0,
	lifetimeSyncsUsed = 0,
	lifetimeMessagesUsed = 0,
}: ICurrentPlanProps) => {
    const isFree = planName === "free"

	const remainingTokens = Math.max(
		totalTokens - usedTokens,
		0,
	)

	const percentageUsed = totalTokens > 0
    ? Math.min(
        (usedTokens / totalTokens) * 100,
        100,
    ) : 0

	return (
		<article
			className="
				bg-white border-grey-100
				rounded-xl p-6 w-[75%]
				border-2 flex flex-col
				gap-4 text-grey-200
			"
		>
			<section className="
				flex items-center
				justify-between
			">
				<aside>
					<p className="
						text-grey-200 text-sm
					">
						Current Plan
					</p>

					<h2 className="
						text-2xl font-semibold
						text-charcoal-100
					">
						{capitalize(planName)}{" "}
						Plan
					</h2>
				</aside>

				{
					!isFree &&
					<aside className="
						text-sm text-right
					">
						<p>
							Resets automatically
						</p>

						{
							renewsAt &&
							<p>{ renewsAt }</p>
						}
					</aside>
				}
			</section>

			{
                !isFree &&
                <section className="
				flex flex-col gap-2
			">
				<aside className="
					flex justify-between
				">
					<p className="
						text-grey-200 text-sm
					">
						Message Credits
					</p>

					<p className="
						text-charcoal-100
						font-medium
					">
						{
							remainingTokens.toLocaleString()
						}{" "}
						remaining
					</p>
				</aside>

				<aside
					className="
						h-3 bg-grey-100
						rounded-full
						overflow-hidden
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

				<p className="
					text-grey-200 text-sm
				">
					{usedTokens.toLocaleString()}
					{" / "}
					{totalTokens.toLocaleString()}
					{" used"}
				</p>
			    </section>
            }

			<div className="
				h-px bg-grey-100
			"/>

			<section className="
				grid grid-cols-6 w-full
                text-charcoal-100
			">
				{
					isFree ?
					<>
						<aside>
							<p className="
								text-sm text-grey-200
							">
								Messages Used
							</p>

							<p>
								{lifetimeMessagesUsed}
								{" / 5"}
							</p>
						</aside>

						<aside>
							<p className="
								text-sm text-grey-200
							">
								LinkedIn Sync
							</p>

							<p>
								{
									lifetimeSyncsUsed > 0
										? "Used"
										: "Available"
								}
							</p>
						</aside>
					</> :
					<>
						<aside>
							<p className="
								text-sm text-grey-200
							">
								Schedules Today
							</p>

							<p>
								{dailySchedulesUsed}
								{" / 10"}
							</p>
						</aside>

						<aside>
							<p className="
								text-sm text-grey-200
							">
								Syncs Today
							</p>

							<p>
								{dailySyncsUsed}
								{" / 5"}
							</p>
						</aside>
					</>
				}
			</section>
		</article>
	)
}

export default CurrentPlan