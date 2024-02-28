import React, { useContext } from "react";
import { IconButton } from "../UI/IconButton";
import styled from "styled-components";
import { cardContext } from "../../assets/context/CardContext";

export const CardItem = ({ title, price, amount, id }) => {
  const { onIncrease, onDecrease } = useContext(cardContext);
  return (
    <ListItem>
      <StyledContainerName>
        <h2>{title}</h2>
        <WrapperPrice>
          <b>${price}</b>
          <span>x{amount}</span>
        </WrapperPrice>
      </StyledContainerName>
      <ActionsButton>
        <IconButton
          Icon
          onClick={() => onDecrease(id)}
          disabled={amount === 0}
        />
        <IconButton onClick={() => onIncrease(id)} />
      </ActionsButton>
    </ListItem>
  );
};

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #d6d6d6;
  padding-bottom: 24px;
`;
const StyledContainerName = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    color: #222;
    font-size: 20px;
    font-weight: 600px;
    font-family: Poppins;
    /* gap: 12px; */
  }
`;

const WrapperPrice = styled.div`
  display: flex;
  gap: 47px;
  align-items: center;
  b {
    color: #ad5502;
    font-size: 18px;
    font-weight: 600px;
  }
  span {
    width: 46px;
    height: 2rem;
    border: 1px solid #d6d6d6;
    display: grid;
    place-items: center;
    text-align: center;
  }
`;
const ActionsButton = styled.div`
  display: flex;
  align-items: end;
  gap: 14px;
  transform: translateY(20px);
`;
