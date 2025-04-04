import { MainContainer } from "./styles";
import { IntroSection } from "../Intro/IntroSection";
import { MethodSection } from "../Method/MethodSection";
import { VizionSection } from "../Vizion/VizionSection";
MethodSection;
export const Main: React.FC = () => {
  return (
    <MainContainer>
      <IntroSection/>
      <VizionSection/>
      <MethodSection/>
    </MainContainer>
  );
};
