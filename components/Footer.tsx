import Link from "next/link";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex justify-between md:px-24 xs:px-4 py-10 text-xs bg-[#f9f9f9]">
      <div className="flex flex-col gap-3 text-[#718096] whitespace-pre-wrap">
        <div>
            {`대표 서준형    | ㅇ   사업자등록번호 52-9300-1453    |    이메일 juniversesoft@gmail.com`}
        </div>
        <div>서울특별시 강남구 선릉로148길 36-5</div>
      </div>

      {/* <div className="flex gap-2">
        <Image src="/logo/github.png" width={32} height={32} alt="github" />
        <Image src="/logo/insta.jpeg" width={32} height={32} alt="insta" />
      </div> */}
    </footer>
  );
}
