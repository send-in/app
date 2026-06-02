"use client"

// #region imports
import { useState } from "react"
import { IconButton } from "@/base"

import {
	Logo,
	Arrow
} from "@/icons"


import {
	Linkedin,
	Extension,
	Template,
	Completed
} from "."
// #endregion

const items = [
	"Connect with Linked In",
	"Integrate chrome extension",
	"Create message template ",
	"Lets schedule !",
]


const Onboarding = () => {
    const [selected, setSelected] = useState(0)
    const steps = () =>{
        switch (selected) {
            case 0:
                return <Linkedin
                    nextStep={()=>setSelected(1)}
                />
            case 1:
                return <Extension
                    nextStep={()=>setSelected(2)}
                />
            case 2:
                return <Template
                    nextStep={()=>setSelected(3)}
                />
            case 3:
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
                    relative h-full min-w-[30%] 
                    justify-center text-white 
                    text-base desktop:text-xl
                "
            >
                <ul className="
                    space-y-20
                ">
                    {
                        items.map(
                            (item,index)=>
                                <li
                                    key={index}
                                    className={`
                                        transition-all ease-in-out delay-100
                                        flex gap-5 items-center
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
                                            transition-all ease-in-out delay-100
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

                <aside className="
                    absolute bottom-5 
                    right-5 flex
                ">
                    <IconButton
                        disabled={!(selected > 0)}
                        onClick={
                            ()=>
                                selected > 0 && 
                                setSelected(prev=>--prev)
                        }
                    >
                        <Arrow
                            direction="up"
                        />
                    </IconButton>

                    <IconButton
                        disabled={!(selected < 3)}
                        onClick={
                            ()=> 
                                selected < 3 && 
                                setSelected(prev=>++prev)
                        }
                    >
                        <Arrow
                            direction="down"
                        />
                    </IconButton>
                </aside>

                <Logo
                    size={40}
                    className="
                        absolute top-8 right-5 
                        fill-white
                    "
                />
            </section>
        </>
    )
}

export default Onboarding
