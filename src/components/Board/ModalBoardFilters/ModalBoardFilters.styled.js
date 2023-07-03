import styled from '@emotion/styled';

export const FiltersTitle = styled.h3`
  color: var(--filtersTitleColor);
  font-size: var(--fontSize18);
  margin-bottom: 14px;
`;

export const BackgroundTitle = styled.h4`
  color: var(--filtersTitleColor);
  font-size: var(--fontSize14);
  margin-top: 14px;
`;

export const LabelTitle = styled.h4`
  color: var(--filtersTitleColor);
  font-size: var(--fontSize14);
  margin-top: 24px;
`;

export const BackgroundContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  width: calc(8 * 28px + 7 * 4px);
  margin-bottom: 14px;
`;

export const SvgIcon = styled.svg`
  --color1: var(--createBoardIconsFill);
`;

export const Line = styled.span`
  display: block;
  height: 1px;
  width: 100%;
  background-color: var(--lineColor);
  /* margin: 21px 0 14px 0; */
`;

export const InputField = styled.input`
  position: fixed;
  opacity: 0;
  pointer-events: none;
`;

export const RadioLabelShowAll = styled.label`
  font-size: var(--fontSize12);
  color: var(--filtersTextColor);
  text-decoration-line: underline;
  /* width: 14px;
  height: 14px;
  margin-right: 8px;
  border: 2px solid ${props => props.buttoncolor};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center; */
  cursor: pointer;
  & input {
    display: none;
  }
`;

export const RadioLabel = styled.label`
  /* font-size: var(--fontSize12); */
  /* color: var(--filtersTextColor); */
  width: 14px;
  height: 14px;
  margin-right: 8px;
  border: 2px solid ${props => props.buttoncolor};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  & input {
    display: none;
  }

  & input:checked + span {
    width: calc(100% - 4px);
    height: calc(100% - 4px);
  }
`;

export const Checkmark = styled.span`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${props => props.buttoncolor};
  display: inline-block;
  opacity: 1;
  transition: opacity 0.25s ease;
`;

export const RadioButCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const BackgroundImgCont = styled.div`
  cursor: pointer;
`;

export const NoImgCont = styled.div`
  cursor: pointer;
  padding: 6px;
`;

export const BackgroundImg = styled.img`
  width: 28px;
  height: 28px;
`;

export const LabelShowAllCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
