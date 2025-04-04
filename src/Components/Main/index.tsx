import { MainContainer } from "./styles";

import { VizionSection } from "../Vizion/VizionSection";
import { MethodSection } from "../Method/MethodSection";
import { IntroSection } from "../Intro/IntroSection";
MethodSection;
export const Main: React.FC = () => {
  return (
    <MainContainer>
      <IntroSection/>
      <VizionSection />
      <MethodSection />
    </MainContainer>
  );
};
