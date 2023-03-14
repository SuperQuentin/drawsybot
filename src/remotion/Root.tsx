import React from "react";
import { Composition } from "remotion";
import { WelcomeComposition } from "./Composition";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Welcome"
        component={WelcomeComposition}
        durationInFrames={60}
        fps={30}
        width={1080}
        height={1080}
      />
    </>
  );
};
