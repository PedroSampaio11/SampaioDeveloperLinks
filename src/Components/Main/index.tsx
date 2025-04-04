import { MainContainer } from "./styles";
import { IntroSection } from "../Intro/IntroSection";
import { VizionSection } from "../Vizion/VizionSection";
import { MethodSection } from "../Method/methodSection";
MethodSection
export const Main: React.FC = () => {
  return (
    <MainContainer>
      <IntroSection/>
      <VizionSection/>
      <MethodSection/>
    </MainContainer>
  );
};
