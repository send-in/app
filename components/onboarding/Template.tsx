"use client"

// #region imports
import { 
    useState, 
    useCallback, 
    useEffect
} from "react"

import { 
    Editor 
} from "@/components"

import {
	Button,
	Information
} from "@/base"

import { createTemplate } from "@/lib"
// #endregion

const Template = ({
	nextStep
}:{
	nextStep: Function
}) => {
    const [title, setTitle] = useState("My First Template")
    const [value, setValue] = useState("")
    const [error, setError] = useState<string>()

    const handleSave = useCallback(async () => {
        const res = await createTemplate(title, value)

        if (!res.success) {
            setError(res.error)
            return
        }

        nextStep()
    }, [title, value, nextStep])

    useEffect(() => {
        if (!error) return

        const timer = setTimeout(
            () => setError(undefined),
            3000
        )

        return () => clearTimeout(timer)
    }, [error])

	return (
		<section
			className="w-[70%] flex flex-col gap-2 h-full"
		>
			<h1 className="text-5xl desktop:text-6xl text-blue-100 font-semibold mb-6">
                Create your first template
            </h1>

            <Information
                description="
                    Templates help you send personalized outreach faster.
                    You can use variables like {{name}} and {{company}}.
                    Don't worry, you can edit or create more templates later.
                "
                styles="py-4"
            />

			<aside
                className="w-full h-[30vh] desktop:h-[35vh] my-5"
            >
                <Editor
                    title={title}
                    onTitleChange={(val)=>setTitle(val)}
                    onValueChange={(val)=>setValue(val)}
                />
            </aside>

			<aside className="flex gap-2 items-center">
                <Button
                    variant="primary"
                    onClick={handleSave}
                    disabled={!title.trim() || !value.trim()}
                >
                    Save & Continue
                </Button>

                <Button
                    variant="ghost"
                    onClick={() => nextStep()}
                >
                    Skip for now
                </Button>

                {
                    error &&
                    <p className="
                        text-red-800 text-sm
                        ml-auto animate-fade-in-fast
                        text-nowrap
                    ">
                        {error}
                    </p>
                }
            </aside>
		</section>
	)
}

export default Template

