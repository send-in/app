"use client"

// #region imports
import { useState } from "react"

import {
	Linkedin,
	Template,
	Completed
} from "."

import { IAccount } from "@/lib"
// #endregion

const items = [
	"Connect with Linked In",
	"Create message template ",
	"Lets schedule !",
]


const Onboarding = ({ profile }:{
    profile: IAccount
}) => {
    const initial = profile?.token ? 1 : 0
    const [selected, setSelected] = useState(initial)

    const steps = () =>{
        switch (selected) {
            case 0:
                return <Linkedin
                    token={profile.token}
                    picture={profile.picture}
                    nextStep={()=>setSelected(1)}
                />
            case 1:
                return <Template
                    nextStep={()=>setSelected(2)}
                />
            case 2:
                return <Completed/>
        }
    }

    return (
        <>

            <section className="w-[60%]">
                { steps() }
            </section>
            
            <section
                className="
                    flex items-center
                    bg-blue-100 rounded-3xl p-10
                    relative h-full min-w-[20%] 
                    justify-center text-white 
                    text-base desktop:text-xl
                "
            >
                <ul className="
                    space-y-12
                ">
                    {
                        items.map(
                            (item,index)=>
                                <li
                                    key={index}
                                    className={`
                                        smooth flex gap-5 items-center
                                        ${
                                            index===selected ? 
                                            "text-white" : 
                                            "text-grey-100"
                                        }
                                    `}
                                >
                                    <div
                                        className={`
                                            w-3 h-3 bg-white rounded-full
                                            smooth 
                                            ${
                                                index===selected ? 
                                                "scale-150" : ""
                                            }
                                        `}
                                    />
                                    <p>{item}</p>
                                </li>
                        )
                    }
                </ul>
            </section>
        </>
    )
}

export default Onboarding
