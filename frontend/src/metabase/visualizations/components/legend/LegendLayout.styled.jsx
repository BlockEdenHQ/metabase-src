import styled from "@emotion/styled";

export const LegendLayoutRoot = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: ${({ isVertical }) => (isVertical ? "row" : "column")};
  min-width: 0;
  min-height: 0;
  background: url("https://tp-misc.b-cdn.net/blockeden/block-eden-logo-pass-through.svg")
    no-repeat center;
  background-size: contain;
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
`;

export const MainContainer = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
`;

export const LegendContainer = styled.div`
  display: ${({ isVertical }) => (isVertical ? "block" : "flex")};
  max-width: ${({ isVertical }) => (isVertical ? "25%" : "")};
  max-width: ${({ isVertical }) => (isVertical ? "min(25%, 20rem)" : "")};
  margin-right: ${({ isVertical, isQueryBuilder }) =>
    isVertical ? (isQueryBuilder ? "2.5rem" : "0.5rem") : ""};
  margin-bottom: ${({ isVertical }) => (isVertical ? "" : "0.5rem")};
`;

export const ChartContainer = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
`;
