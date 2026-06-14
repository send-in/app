"use client"

// #region imports
import { useCallback, useState } from "react"

import { Subscription } from "@/components"
import { IPlan } from "@/lib/types"
import { Button } from "@/base"
import Link from "next/link"
import Unsubscribe from "../Buttons/Unsubscribe"
// #endregion

export interface IPlanCard {
    plan: IPlan
    slider: boolean
    buttonText: string
    highlighted?: boolean
    planCredits: number
    onClick?: ()=>void
    color?: 
        | "blue-100" 
        | "charcoal-200"
        | "purple-200"
}

const PlanCard = ({
    plan: {
        step,
        id,
        title,
        price,
        messages,
        features,
        description,
        minMessages,
        maxMessages
    },
    slider,
    buttonText,
    highlighted = false,
    planCredits,
    color = "charcoal-200",
}: IPlanCard) => {

    const [sliderValue, setSliderValue] = useState(planCredits)
    const displayPrice = Math.round(
        (sliderValue / (messages ?? 1)) * 
        (price ?? 1)
    )

    const getButton = () => {
        switch(id){
            case "free":
                return (
                    !highlighted &&
                    <Unsubscribe/>
                )
            case "pro":
                return (
                    <Subscription 
                        credits={sliderValue}
                    />
                )
            case "enterprise":
                return (
                    <Link href="mailto:sendin@gmai.com">
                        <Button 
                            variant={color} 
                            className="mt-2"
                        >
                            {buttonText}
                        </Button>
                    </Link>
                )
        }
    }

    return (
        <article className={`
            bg-white rounded-xl p-4 w-full
            flex flex-col items-center text-center
            transition font-normal tracking-tighter
            desktop:p-6 border-2 min-h-104 ${
                highlighted ? 
                `border-${color}` : 
                "border-grey-100"
            }
        `}>
            <h3 className={`
                text-xl font-semibold
                text-${color}
                desktop:text-3xl
            `}>
                {title}
            </h3>

            <aside className="
                w-full border-t border-grey-100
                my-3 desktop:my-6
            "/>

            <p className={`
                text-3xl font-medium mt-4
                items-center text-${color}
            `}>
                {
                    description ? description :  
                    `$${displayPrice} / mo`
                }
            </p>

            <p className="
                text-md text-grey-300 
                desktop:text-lg mt-2
            ">
                <span className="text-charcoal-100">
                    { messages !== undefined ?
                        sliderValue :
                        "∞"
                    }
                </span>{" "}
                scheduled messages / month
            </p>

            {
                slider &&
                minMessages &&
                maxMessages &&
                (
                    <input
                        type="range"
                        min={minMessages}
                        max={maxMessages}
                        step={step ?? 100}
                        value={sliderValue}
                        onChange={(e) =>
                            setSliderValue(Number(e.target.value))
                        }
                        className=" 
                            w-[90%] my-2
                            accent-blue-100
                            cursor-pointer
                        "
                    />
                )
            }

            <aside className="mt-auto">
                { getButton() }
            </aside>

            <aside className="
                w-full border-t border-grey-100
                my-4 desktop:my-6
            "/>

            <ul
                className="
                    space-y-3 text-grey-300
                    text-left w-full text-sm
                "
            >
                {features.map(
                    (feature, index) => (
                        <li
                            key={index}
                            className="
                                flex items-start gap-2
                            "
                        >
                            •{" "}{feature}
                        </li>
                    )
                )}
            </ul>
        </article>
    )
}

export default PlanCard