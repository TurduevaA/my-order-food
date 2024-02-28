import { Header } from "./components/Header/Header";
import { MealsSummary } from "./components/meals/MealsSummary";
import { Meals } from "./components/meals/Meals";
import { Card } from "./components/card/Card";
import { useContext } from "react";
import { ModalContext } from "./assets/context/ModalContext";

function App() {
  const { isModalOpen, isAddMealOpen } = useContext(ModalContext);
  return (
    <>
      <Header />
      {isAddMealOpen && <AddMeals onAddNewMeal={onAddNewMeal} />}
      <MealsSummary />
      <Meals />
      {isModalOpen && <Card />}
    </>
  );
}
export default App;
