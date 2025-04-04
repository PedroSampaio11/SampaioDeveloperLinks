import { MainContainer } from "./styles";

import { VizionSection } from "../Vizion/VizionSection";
import { IntroSection } from "../Intro/IntroSection";
import { MethodSection } from "../Method/MethodSection";
MethodSection;
export const Main: React.FC = () => {
  return (
    <MainContainer>
      <IntroSection/>
      <VizionSection />
      <MethodSection/>
    </MainContainer>
  );
};
