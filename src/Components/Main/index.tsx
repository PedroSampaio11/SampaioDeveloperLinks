import { MainContainer } from "./styles";
import { IntroSection } from "../Intro/introSection";
import { VizionSection } from "../Vizion/VizionSection";
import { MethodSection } from "../Method/MethodSection";
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
