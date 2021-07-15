import React from "react";
import styled from "styled-components";
import { SearchInput } from "../../styles/StyledComps";
import { blueArrow } from "../../assets";

export interface MsHeaderProps {}

export const MobileSearchHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 75px;
  background-color: white;
  border: 1px solid #d9dbe9;
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
`;
export const ArrowImg = styled.img`
  width: 20px;
  height: 20px;
  padding: 10px;
  margin-left: 10px;
`;

const MsHeader: React.FC<MsHeaderProps> = ({}) => {
  return (
    <MobileSearchHeader>
      <ArrowImg src={blueArrow} />
      <SearchInput placeholder="Search" />
    </MobileSearchHeader>
  );
};

export default MsHeader;
