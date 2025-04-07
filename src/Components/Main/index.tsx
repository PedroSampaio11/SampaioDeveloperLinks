import { MainContainer } from "./styles";
import { IntroSection } from "../Intro/IntroSection";
import { MethodSection } from "../Method/methodSection";
import { VizionSection } from "../Vizion/vizionSection";
import { Slider } from "../Slider/sliderSection";

MethodSection;
export const Main: React.FC = () => {
  return (
    <MainContainer>
      <IntroSection />
      <VizionSection />
      <MethodSection />
      <Slider/>
    </MainContainer>
  );
};
