// #region imports
import { redirect } from "next/navigation"
import { getProfile } from "@/lib"
import { ProfileForm } from "@/components"
// #endregion

const ProfilePage = async () => {
	const {
        success,
		data: account
	} = await getProfile()

	const {
		name,
		picture,
		email,
		timezone,
        token,
	} = account || {}

    if(!success)
        redirect("/")

	return (
        <main className="
            p-8 desktop:px-[5%] pt-[5%] pb-0
            text-charcoal-100 text-base 
            h-screen desktop:text-xl
        ">  
            <ProfileForm
                token={token}
                name={name}
                picture={picture}
                email={email}
                timezone={timezone}
            />
		</main>
	)
}

export default ProfilePage

