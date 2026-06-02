// #region imports
import Image from "next/image"
import { login } from "@/lib"
import { Button } from "@/base"
import { Linkedin, Logo } from "@/icons"
// #endregion

const AuthPage = () => (
    <main className="
        flex h-screen p-8 desktop:px-[5%] 
        items-center justify-between
        text-charcoal-100 text-base 
        desktop:text-xl
    ">
        <section className="
                bg-blue-100 rounded-3xl p-24
                relative h-full w-full flex items-center
                justify-center
        ">
            <section className="
                w-[50%] desktop:w-[32%] 
                flex flex-col gap-6 ml-[10%]
            ">
                <div
                    className="space-y-6 p-4"
                >
                    <aside>
                        <h1 className="
                            text-4xl desktop:text-6xl 
                            text-white font-semibold
                        ">
                            Welcome !
                        </h1>
                        <p className="
                            text-2xl desktop:text-3xl 
                            font-semibold mt-1 
                            desktop:mt-4 text-white
                        ">
                            Get started instantly with SendIn
                        </p>
                        <span className="
                            text-blue-200 text-2xl 
                            desktop:text-3xl font-semibold 
                            mt-1 desktop:mt-4
                        ">
                            {" "}No credit card required{" "}
                        </span>
                    </aside>

                    <Button
                        type="submit"
                        startIcon={<Linkedin/>}
                        variant="inverted"
                        textClassName="font-semibold"
                        size="full"
                        onClick={login}
                    >
                        Continue with LinkedIn
                    </Button>
                </div>
            </section>

            <aside className="
                relative h-fit pr-12 
                desktop:pr-[10%] 
                desktop:scale-120
            ">
                <Image
                    src="/timezone.svg"
                    alt="timezone"
                    height={500}
                    width={500}
                />
                <Image
                    src="/switch.svg"
                    alt="switch"
                    height={300}
                    width={300}
                    className="
                        absolute -bottom-[20%] left-[50%] 
                        desktop:left-[40%]
                    "
                />
            </aside>

            <Logo
                size={60}
                className="
                    absolute top-8 right-5 fill-white 
                    desktop:scale-110 desktop:top-12 
                    desktop:right-8
                "
            />
        </section>
    </main>
)

export default AuthPage