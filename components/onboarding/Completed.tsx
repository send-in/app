// #region imports
import { redirect } from "next/navigation"

import { Linkedin } from "@/icons"
import { Button } from "@/base"

import { 
    onboarded, 
    updateProfile 
} from "@/lib"
// #endregion

const Completed = () => {

    const handleComplete = async (url: string) => {
        const {success} = await updateProfile({ 
            onboarding: true 
        })

        if(success){
            await onboarded()
            redirect(url)
        }
    }

	return (
		<section
			className="w-fit space-y-2"
		>
			<h1 className="
                text-5xl desktop:text-6xl 
                text-blue-100 font-semibold
            ">
				You&apos;re all set, Vishnu !
			</h1>

			<p className="
                text-base desktop:text-xl 
                w-[80%] text-grey-300
            ">
				Now head over to your connections page for bulk scheduling or 
                open linkedIn for manual message !
			</p>

			<aside
				className="
                    flex items-start 
                    gap-2 mt-8 w-[40%]
                "
			>
				<Button
                    variant="primary"
                    size="full"
                    onClick={
                        ()=>handleComplete("https://www.linkedin.com/in/williamhgates/")
                    }
                    startIcon={
                        <Linkedin
                            className="fill-white-100"
                        />
                    }
                >
                    Continue on LinkedIn
                </Button>

                <Button
                    size="full"
                    variant="secondary"
                    onClick={()=>handleComplete("/connections")}
                >
                    Bulk Schedule
                </Button>
			</aside>
		</section>
	)
}

export default Completed

