// #region imports
import { redirect } from "next/navigation"
import { getProfile, logout } from "@/lib"
import { ProfileForm } from "@/components"
import { Button } from "@/base"
import { Logo } from "@/icons"
import Link from "next/link"
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
            h-screen desktop:text-xl flex 
            items-center justify-between
            gap-8 desktop:gap-12
        ">  
            <ProfileForm
                token={token}
                name={name}
                picture={picture}
                email={email}
                timezone={timezone}
            />

             <section
                className="
                    bg-blue-100 rounded-3xl
                    p-6 desktop:mt-[5%]
                    relative h-[90%] w-[30%]
                    flex items-end justify-between
                "
            >
                <Link href="/profile/subscription">
                    <Button
                        variant="ghost"
                        className="
                            !text-white
                            hover:!text-charcoal-100
                        "
                    >
                        Manage Subscription
                    </Button>
                </Link>

                 <Button
                    onClick={logout}
                    variant="ghost"
                    className="
                        !text-white/50
                        hover:!text-charcoal-100
                    "
                >
                    Log out ?
                </Button>


                <Logo
                    size={50}
                    className="
                        absolute top-8 right-5
                        fill-white
                    "
                />
            </section>
		</main>
	)
}

export default ProfilePage

