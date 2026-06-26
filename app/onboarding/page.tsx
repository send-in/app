// #region imports
import { Onboarding } from "@/components"
import { getProfile } from "@/lib"
import { redirect } from "next/navigation"
// #endregion

const OnboardingPage = async () => {
    const {data: profile} = await getProfile()

    if(!profile)
        redirect("/auth")

    return (
        <main className="
            h-screen w-screen flex items-center 
            justify-center p-8 pt-[8%] gap-[12%]
        ">
            <Onboarding 
                profile={profile}
            />
        </main>
    )
}

export default OnboardingPage
