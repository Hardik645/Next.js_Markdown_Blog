import Image from "next/image"

export default function ProfilePicture() {
    return (
        <section className="w-full mx-auto">
            <Image
                className="border-4 border-black dark:border-deer drop-shadow-xl shadow-deer rounded-full mx-auto mt-8 hover:scale-105 transition-all duration-500 cursor-pointer"
                src="/image/Hardik-ProfilePic.jpg"
                width={200}
                height={200}
                alt="Hardik Sharma"
                priority={true}
            />
        </section>
    )
}