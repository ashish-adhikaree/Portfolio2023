import React from "react";
import { SOCIALICON } from "@/lib/ts/interface/layout";
import Link from "next/link";
import Image from "next/image";

export const SocialIcon: React.FC<SOCIALICON> = ({ logo, link, title }) => {
  return (
    <Link href={link} title={title}>
      <Image height={30} width={30} alt={`${title}'s logo`} src={logo} />
    </Link>
  );
};
