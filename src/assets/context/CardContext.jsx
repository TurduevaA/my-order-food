import { createContext, useReducer, useState } from "react";

export const cardContext = createContext({
  addedMeals: [],
  addedMealsHandler: () => {},
});

const ADDED_MEALS_TYPE = "ADDED_MEALS";
const INCREMENT = "INCREMENT";
const DECRIMENT = "DECRIMENT";

const reducer = (state, action) => {
  switch (action.type) {
    case ADDED_MEALS_TYPE: {
      const prevMeals = state.addedMeals;
      const mealAction = action.payload;

      if (prevMeals.length === 0) {
        return {
          ...state,
          addedMeals: [mealAction],
        };
      }
      const isMealExists = prevMeals.find((item) => item.id === mealAction.id);
      if (isMealExists === undefined) {
        return {
          ...state,
          addedMeals: [...prevMeals, mealAction],
        };
      }
      const newAddedMeals = prevMeals.map((meal) => {
        if (meal.id === mealAction.id) {
          return {
            ...meal,
            amount: meal.amount + mealAction.amount,
          };
        }
        return meal;
      });
      return {
        ...state,
        addedMeals: newAddedMeals,
      };
    }

    case INCREMENT: {
      const prevMeals = state.addedMeals;
      const mealId = action.payload;

      const newAddedMeals = prevMeals.map((meal) => {
        if (meal.id === mealId) {
          return {
            ...meal,
            amount: meal.amount + 1,
          };
        }

        return meal;
      });
      return {
        ...state,
        addedMeals: newAddedMeals,
      };
    }
    case DECRIMENT: {
      const prevMeals = state.addedMeals;
      const mealId = action.payload;

      const currentMeal = prevMeals.find((meal) => meal.id === mealId);

      if (currentMeal.amount === 1) {
        return {
          ...state,
          addedMeals: prevMeals.filter((meal) => meal.id !== currentMeal.id),
        };
      }

      const newAddedMeals = prevMeals.map((meal) => {
        if (meal.id === mealId) {
          return {
            ...meal,
            amount: meal.amount - 1,
          };
        }

        return meal;
      });
      return {
        ...state,
        addedMeals: newAddedMeals,
      };
    }
    default: {
      return state;
    }
  }
};

const initialState = {
  addedMeals: [],
};
export const CardProvider = ({ children }) => {
  const [cardState, dispatch] = useReducer(reducer, initialState);

  const addedMealsHandler = (newMeal) => {
    dispatch({ type: ADDED_MEALS_TYPE, payload: newMeal });
  };

  const increaseMealAmountHandler = (id) => {
    dispatch({ type: INCREMENT, payload: id });
  };
  const decreaseMealAmountHandler = (id) => {
    dispatch({ type: DECRIMENT, payload: id });
  };

  const totalAmount = cardState.addedMeals.reduce((acc, item) => {
    return acc + item.price * item.amount;
  }, 0);

  return (
    <cardContext.Provider
      value={{
        addedMeals: cardState.addedMeals,
        addedMealsHandler,
        onIncrease: increaseMealAmountHandler,
        onDecrease: decreaseMealAmountHandler,
        totalAmount,
      }}
    >
      {children}
    </cardContext.Provider>
  );
};
