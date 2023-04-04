import React from "react";
import { Description, SectionWrapper, Title } from "$components";
import Image from "next/image";
import { USER } from "../ts/constants";

export const About = () => {
  return (
    <SectionWrapper id="about" height="calc(100vh - 6rem)" className="pt-10">
      <div className="flex items-center justify-between">
        <div className="self-center">
          <Description className="text-primary-green">
            Hi, my name is
          </Description>
          <Title>{USER.name}.</Title>
          <Title className="text-transparent bg-gradient-to-b from-primary-green to-primary-white/50 bg-clip-text">
            {USER.title}
          </Title>
          <Description>{USER.description}</Description>
        </div>
        <Image
          width={400}
          height={400}
          alt="Portfolio Owner's Photo"
          src={USER.image}
        />
      </div>
    </SectionWrapper>
  );
};
