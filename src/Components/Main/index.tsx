import { MainContainer } from "./styles";
import { IntroSection } from "../Intro/IntroSection";
import { MethodSection } from "../Method/methodSection";
import { VizionSection } from "../Vizion/vizionSection";

MethodSection;
export const Main: React.FC = () => {
  return (
    <MainContainer>
      <IntroSection />
      <VizionSection />
      <MethodSection />
    </MainContainer>
  );
};
