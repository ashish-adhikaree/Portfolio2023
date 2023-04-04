import githubLogo from "$public/github.svg";
import linkedinLogo from "$public/linkedin.svg";
import facebookLogo from "$public/fb.svg";
import { SOCIALICON } from "../interface/layout";

export const SOCIALS: Array<SOCIALICON> = [
  {
    title: "Github",
    link: "/",
    logo: githubLogo,
  },
  {
    title: "Linkedin",
    link: "/",
    logo: linkedinLogo,
  },
  {
    title: "Facebook",
    link: "/",
    logo: facebookLogo,
  },
];

export const NAVLINKS = ["about", "skills", "projects", "experience"];
