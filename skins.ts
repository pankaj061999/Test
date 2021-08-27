import styled from "styled-components";

export const CircularColorPalettesCon = styled.div`
  padding-top: 0.5rem;
  > span {
    vertical-align: super;
  }
`;

export const CircularColorPalettes = styled.div`
  display: inline-block;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  background-color: ${(props: any) => props.color || "#000000"};
  margin-right: 0.5rem;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
`;

export const ResponsiveImage = styled.img`
  width: calc(100% - 2rem);
  height: auto;
  margin: 1rem;
`;

export const MSelectItem = styled.div`
  display: flex;
  align-items: center;
  .image-con {
    display: inline-flex;
    margin-right: 1rem;
    img {
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
      object-fit: cover;
      object-position: top;
    }
  }
  .heading {
    color: #1f1f1f;
    font-weight: bold;
    line-height: 1.5;
  }
  .sub-label {
    color: #6e6263;
    font-size: 0.9rem;
  }
`;
