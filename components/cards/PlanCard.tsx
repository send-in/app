"use client"

// #region imports
import { useState } from "react"
import { IPlan } from "@/lib/types"
import { Button } from "@/base"
// #endregion

export interface IPlanCard {
    plan: IPlan
    slider: boolean
    buttonText: string
    highlighted?: boolean
    color?: 
        | "blue-100" 
        | "charcoal-200"
        | "purple-200"
}

const PlanCard = ({
    plan: {
        step,
        title,
        price,
        planId,
        messages,
        features,
        minMessages,
        maxMessages
    },
    slider,
    buttonText,
    highlighted = false,
    color = "charcoal-200",
}: IPlanCard) => {

    const [sliderValue, setSliderValue] = useState(
        messages ?? minMessages ?? 0
    )

    const displayPrice = Math.round(
        (sliderValue / (messages ?? 1)) * 
        (price ?? 1)
    )

    return (
        <div className={`
            bg-white rounded-xl p-4 w-full
            flex flex-col items-center text-center
            transition font-normal tracking-tighter
            desktop:p-6 border-2
            ${ price !== undefined ? 
                "justify-between" : 
                "h-fit" 
            }
            ${
                highlighted ? 
                `border-${color}` : 
                "border-grey-100"
            }
        `}>
            <h3 className={`
                text-xl font-medium
                text-${color}
                desktop:text-3xl
            `}>
                {title}
            </h3>

            {
                price !== undefined &&
                <div className="
                    w-full border-t border-grey-100 
                    my-2 desktop:my-4
                "/>
            }

            {
                price !== undefined &&
                <div className={`
                    text-3xl desktop:text-4xl
                    font-semibold flex flex-col 
                    items-center text-${color}
                `}>
                    <p>${displayPrice}</p>
                    <span className="
                        text-xl font-normal 
                        desktop:text-2xl
                    ">
                        /month
                    </span>
                </div>
            }

            {
                messages !== undefined &&
                <p className="
                    text-md text-grey-200 
                    desktop:text-lg  mb-auto
                ">
                    <span className="text-charcoal-100">
                        {sliderValue}
                    </span>{" "}
                    scheduled messages / month
                </p>
            }

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
                            w-[90%] my-4  mb-auto
                            accent-blue-100
                            cursor-pointer
                        "
                    />
                )
            }

            <Button 
                variant={color} 
                className="mt-4"
            >
                {buttonText}
            </Button>

            <div className="
                w-full border-t border-grey-100 
                my-4 desktop:my-6
            "/>

            <ul
                className="
                    space-y-3 text-grey-200
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
                            ✔ {feature}
                        </li>
                    )
                )}
            </ul>
        </div>
    )
}

export default PlanCard