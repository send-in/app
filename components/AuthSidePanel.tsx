// #region imports
import Image from "next/image"
// #endregion

const AuthSidePanel = () => (
    <section
        className="
            bg-blue-100 rounded-3xl p-10 
            relative h-full w-[50%] flex items-center
            justify-center
        "
    >
        <Image
            src="/others/timezone.svg" 
            alt="timezone" 
            height={300}
            width={300}
        />
        <Image
            className="xlarge:right-24 -ml-[20%] -mb-[30%]"
            src="/others/switch.svg"
            alt="switch"
            height={200}
            width={200}
        />
        <Image
            className="absolute top-5 right-5"
            src="/icons/logo.svg"
            alt="sendin"
            height={80}
            width={80}
        />
    </section>
)

export default AuthSidePanel