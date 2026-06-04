// #region imports
import { CurrentPlan, PlanCard } from "@/components"
import { IPlan } from "@/lib"
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
            planId: "free_plan",
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
        highlighted: false,
        slider: false
    },
    {
        plan: {
            planId: "pro_plan",
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
        highlighted: true,
        slider: true,
    },
    {
        plan: {
            planId: "enterprise_plan",
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
        highlighted: false,
        slider: false
    }
]

const PricingPage = () => {
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
                planName={"Pro Plan"}
                usedTokens={25}
                totalTokens={75}
                renewsAt={"25-04-2027"}
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
                        highlighted={data.highlighted}
                        slider={data.slider}
                    />
                ))}
            </aside>

        </section>
    )
}

export default PricingPage