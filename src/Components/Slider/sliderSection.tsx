import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styled from "styled-components";

const BrandImage = styled.img`
  height: 2.2rem;
  margin: 0;
  margin: 0;
`;
const SliderContainer = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  padding: 2rem 0;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0;
  @media screen and (max-width: 708px) {
    margin: 0;
    width: 100%;
  }
`;
const Container = styled.div`
  transition: 0.3s ease;
  opacity: 0.5;
  display: flex;
  align-items: center;
  padding: 0.4rem;
  gap: 1rem;
  justify-content: center;
  &:hover {
    opacity: 1;
    transform: scale(1.02);
    filter: brightness(1.1);
  }
`;
const Text = styled.p`
  font-size: 1.4rem;
  margin: 0;
  color: ${(props) => props.theme.colors.gray100};
  text-align: center;
`;

const animation = { duration: 25000, easing: (t: number) => t };

export const Slider: React.FC = () => {
  const numberOfCards = 14;
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    mode: "free",
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView:3, spacing: 1 },
      },
    },
    created(s) {
      s.moveToIdx(numberOfCards - 1, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + numberOfCards - 1, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + numberOfCards - 1, true, animation);
    },
  });

  return (
    <SliderContainer ref={sliderRef} className="keen-slider">
      <Slide className="keen-slider__slide">
        <Container>
          <Text>Sites</Text>
          <BrandImage src="/icons/heart.svg" />
        </Container>
      </Slide>
      <Slide className="keen-slider__slide">
        <Container>
          <Text>App`s</Text>
          <BrandImage src="/icons/heart.svg" />
        </Container>
      </Slide>
      <Slide className="keen-slider__slide">
        <Container>
          {" "}
          <Text>Softwares</Text>
          <BrandImage src="/icons/heart.svg" />
        </Container>
      </Slide>
      <Slide className="keen-slider__slide">
        <Container>
          {" "}
          <Text>Crm</Text>
          <BrandImage src="/icons/heart.svg" />
        </Container>
      </Slide>
      <Slide className="keen-slider__slide">
        <Container>
          {" "}
          <Text>IA</Text>
          <BrandImage src="/icons/heart.svg" />
        </Container>
      </Slide>
      <Slide className="keen-slider__slide">
        <Container>
          {" "}
          <Text>Consultoria</Text>
          <BrandImage src="/icons/heart.svg" />
        </Container>
      </Slide>
      <Slide className="keen-slider__slide">
        <Container>
          {" "}
          <Text>Suporte</Text>
          <BrandImage src="/icons/heart.svg" />
        </Container>
      </Slide>
    </SliderContainer>
  );
};
