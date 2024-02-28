import { useContext } from "react";
import { Modal } from "../UI/Modal";
import { CardItem } from "./CardItem";
import styled from "styled-components";
import { Button } from "../UI/Button";
import { ModalContext } from "../../assets/context/ModalContext";
import { cardContext } from "../../assets/context/CardContext";

export const Card = () => {
  const { closeModal } = useContext(ModalContext);
  const { addedMeals, totalAmount } = useContext(cardContext);
  return (
    <Modal closeModal={closeModal}>
      <Content>
        <ul>
          {addedMeals.map((item) => (
            <CardItem
              key={item.id}
              title={item.title}
              id={item.id}
              price={item.price}
              amount={item.amount}
            />
          ))}
        </ul>
        <TotalAmount>
          <h1>Total Amount</h1>
          <div className="price">
            <b>${Number(totalAmount.toFixed(2))}</b>
            <ActionsButton>
              <Button onClick={closeModal} variant="outlined">
                Close
              </Button>
              <Button>Order</Button>
            </ActionsButton>
          </div>
        </TotalAmount>
      </Content>
    </Modal>
  );
};

const Content = styled.section`
  background-color: white;
  border-radius: 20px;
  padding: 40px 32px;

  ul {
    list-style: none;
    display: flex;
    overflow-y: scroll;
    width: 674px;
    flex-direction: column;
  }
`;
const TotalAmount = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 29px;
  h1 {
    color: var(--Primary-black, #222);
    font-size: 20px;
    font-weight: 700;
  }
  b {
    color: #8a2b06;
    font-size: 22px;
    font-weight: 600;
    padding-left: 140px;
  }
  .price {
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 24px;
  }
`;
const ActionsButton = styled.div`
  display: flex;
  gap: 16px;
`;
