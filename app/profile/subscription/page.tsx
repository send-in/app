// #region imports
import { redirect } from "next/navigation"
import { CurrentPlan, PlanCard } from "@/components"
import { getProfile, IPlan } from "@/lib"
// #endregion

const planData: {
    plan: IPlan
    buttonText: string
    highlighted?: boolean
    slider: boolean
    color?: 
        | "blue-100" 
        | "charcoal-200"
        | "purple-200"
}[] = [
    {
        plan: {
            id: "free",
            title: "Free Plan",
            price: 0,
            messages: 20,
            features: [
                "Chrome extension",
                "Inbox dashboard",
                "Timezone intelligence",
                "1 Custom template",
                "Bulk scheduling from connection",
            ],
        },
        buttonText: "Get Started",
        color: "charcoal-200",
        slider: false
    },
    {
        plan: {
            id: "pro",
            title: "Pro Plan",
            price: 25,
            messages: 25,
            minMessages: 25,
            maxMessages: 200,
            step: 25,
            features: [
                "Chrome extension",
                "Inbox dashboard",
                "Timezone intelligence",
                "5 Custom templates",
                "Bulk scheduling from connection",
            ]
        },
        buttonText: "Replenish",
        color: "blue-100",
        slider: true,
    },
    {
        plan: {
            id: "enterprise",
            title: "Enterprise Plan",
            features: [
                "Chrome extension",
                "Inbox dashboard",
                "Timezone intelligence",
                "∞ Custom templates",
                "Bulk scheduling from connection",
            ],
        },
        buttonText: "Connect with us",
        color: "purple-200",
        slider: false
    }
]

const PricingPage = async () => {
    const {
        success,
        data: account
    } = await getProfile()

    const {
        plan = "free",
        planCredits = 0,
        creditsRemaining = 0,
        renewAt,

        dailySyncsUsed = 0,
        dailySchedulesUsed = 0,

        lifetimeSyncsUsed = 0,
        lifetimeMessagesUsed = 0,
    } = account || {}

    if(!success)
        redirect("/")
    return (
        <section
            id="pricing"
            className="
                font-mada py-6 px-4 flex flex-col
                items-center gap-4 max-mobile:px-0 
                desktop:py-10 mt-24 min-h-[80vh]
            "
        >
            <CurrentPlan
                planName={plan}
                usedTokens={planCredits-creditsRemaining}
                totalTokens={planCredits}
                renewsAt={renewAt?.toDateString()}
                dailySyncsUsed={dailySyncsUsed}
                dailySchedulesUsed={dailySchedulesUsed}
                lifetimeSyncsUsed={lifetimeSyncsUsed}
                lifetimeMessagesUsed={lifetimeMessagesUsed}
            />
            <aside className="
                flex w-[75%] justify-between
                max-mobile::flex-col gap-4
                max-mobile:w-full 
            ">
                {planData.map((data, index) => (
                    <PlanCard
                        key={index}
                        plan={data.plan}
                        buttonText={data.buttonText}
                        color={data.color}
                        highlighted={data.plan.id === plan}
                        slider={data.slider}
                    />
                ))}
            </aside>

        </section>
    )
}

export default PricingPage