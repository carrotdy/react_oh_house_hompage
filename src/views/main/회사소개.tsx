import React from "react";
import styled from "styled-components";
import {
  BorderBottomLineGray30,
  Container,
  SubTitle,
  Title,
} from "../components/Common";
import { Mobile, Tablet } from "../utils/CssUtil";
import IntroduceCompany from "../constants/data/IntroduceCompany";

const 회사소개: React.FunctionComponent = () => {
  return (
    <>
      <Container>
        <Title data-aos="fade-up">오늘의 발견,일상의 변화</Title>
        <SubTitle data-aos="fade-up">
          우리는 공간과 일상을 경험하는 방식을 새롭게 정의합니다.
          <br />
          모두의 라이프스타일에 영감을 줄 수 있도록 끊임없이 기술을 혁신하고,
          <br />
          모두가 자신의 공간, 나아가 삶을 사랑하게 만드는 유례없는 도전을 하고
          있습니다.
        </SubTitle>
        {IntroduceCompany.map((item, index) => {
          return (
            <div
              key={`${item.index} + ${index}`}
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <IntroductionCompanyDetailContainer
                style={{ whiteSpace: "pre-line" }}
              >
                <ContentImage src={item.image} />
                <DetailTitleContainer>
                  <Title>{item.title}</Title>
                  <SubTitle>{item.description}</SubTitle>
                </DetailTitleContainer>
              </IntroductionCompanyDetailContainer>
              {IntroduceCompany.length - 1 !== index && (
                <BorderBottomLineGray30 />
              )}
            </div>
          );
        })}
      </Container>
    </>
  );
};

const IntroductionCompanyDetailContainer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "100px 0",
  ...Tablet({
    display: "grid",
    padding: "60px 0",
  }),
  ...Mobile({
    display: "grid",
    padding: "30px 0",
  }),
});

const DetailTitleContainer = styled.div({});

const ContentImage = styled.img({
  width: "460px",
  height: "320px",
  marginRight: "60px",
  ...Tablet({
    width: "520px",
    height: "360px",
    marginRight: 0,
  }),
  ...Mobile({
    width: "350px",
    height: "243px",
    marginRight: 0,
  }),
});

export default 회사소개;
