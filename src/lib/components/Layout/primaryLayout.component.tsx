import { SOCIALS } from "@/lib/ts/constants/layout";
import Link from "next/link";
import { Header } from "./header.component";
import { SocialIcon } from "../Blocks/socialIcon.component";
import { USER } from "@/lib/ts/constants";
type PROPS = {
  children: React.ReactNode;
};
export const PrimaryLayout: React.FC<PROPS> = ({ children }) => {
  return (
    <div className="">
      <Header />
      <main className="">
        <div className="fixed bottom-0 left-0 difference px-5">
          <div className=" flex flex-col gap-4">
            {SOCIALS.map((item, index) => (
              <SocialIcon key={index} {...item} />
            ))}
            <div className="h-40 w-[2px] bg-primary-green mx-auto"></div>
          </div>
        </div>
        <div className="fixed bottom-0 right-0 difference px-5">
          <p className="text-primary-green w-[40px] -rotate-90 pl-5">
            <Link href={`mailto:${USER.email}`}>{USER.email}</Link>
          </p>{" "}
          <div className="h-40 w-[2px] bg-primary-green mx-auto"></div>
        </div>
        {children}
      </main>
    </div>
  );
};
