import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import {useState, useEffect} from "react";

export default function Header() {
  const router = useRouter();

    const [open, setOpen] = useState(false)

    useEffect(() => {
        setOpen(false)
    }, [router]);

    console.log(router)

  return (
    <header className="w-full flex justify-between items-center bg-white fixed shadow top-0 z-[1] py-4 md:px-24 xs:px-4">
      <div onClick={() => router.push("/")}>
        <Image src="/logo.png" width={200} height={70} alt="logo" priority />
      </div>
      <nav className="md:flex xs:hidden gap-4">
        {/*<Link className={router.asPath === "/profile" ? "font-bold" : undefined} href="/profile">PROFILE</Link>*/}
        <Link className={router.asPath === "/portfolio" ? "font-bold" : undefined} href="/portfolio">PORTFOLIO</Link>
        <Link className={router.asPath === "/skills" ? "font-bold" : undefined} href="/skills">SKILLS</Link>
        <Link className={router.asPath === "/contact" ? "font-bold" : undefined} href="/contact">CONTACT</Link>
      </nav>
        <Image src={"/hambuger.png"} width={25} height={15}
               alt={"hambuger"}
               onClick={() => setOpen(!open)}
               quality={100}
               className={"md:hidden xs:block cursor-pointer"}
        />
        {
            open && <div className={"flex flex-col justify-center items-center fixed w-screen h-screen bg-[#f8f8f8] left-0 top-0 gap-10 animate__animated animate__slideInRight animate__fast ease-in-out"}>
                <div className={"absolute top-10 right-5"}>
                    <Image src={"/close.png"} width={35} height={35}
                           alt={"close"}
                           onClick={() => setOpen(!open)}
                           quality={100}
                           className={"cursor-pointer"}
                    />
                </div>
                {/*<Link className={router.asPath === "/profile" ? "font-bold" : undefined} href="/profile">PROFILE</Link>*/}
                <Link className={`${router.asPath === "/portfolio" ? "font-bold" : undefined} text-[16px]`} href="/portfolio">PORTFOLIO</Link>
                <Link className={`${router.asPath === "/skills" ? "font-bold" : undefined} text-[16px]`}  href="/skills">SKILLS</Link>
                <Link className={`${router.asPath === "/contact" ? "font-bold" : undefined} text-[16px]`}  href="/contact">CONTACT</Link>
            </div>
        }
    </header>
  );
}

