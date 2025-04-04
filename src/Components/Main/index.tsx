import { MainContainer } from "./styles";
import { IntroSection } from "../Intro/IntroSection";
import { VizionSection } from "../Vizion/VizionSection";
export const Main: React.FC = () => {
  return (
    <MainContainer>
      <IntroSection/>
      <VizionSection/>
    </MainContainer>
  );
};
