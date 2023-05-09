import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { expenseActions } from "../store/expense-slice";
import { inputValueActions } from "../store/inputValue-slice";

import Card from "../UI/Card";
import Calendar from "./Calendar";

import classes from "./Expense.module.css";

import health from "../Icons/checklist.png";
import college from "../Icons/college.png";
import leisure from "../Icons/rocket.png";
import homeIcon from "../Icons/home.png";
import nutrition from "../Icons/clock.png";
import transportation from "../Icons/location.png";

const formatMoney = (value) => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
  return formatter.format((value / 100).toFixed(2));
};

const Expense = () => {
  const [isIncomeClicked, setIsIncomeClicked] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [inputExpense, setInputExpense] = useState("");

  const navigation = useNavigate();
  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      dispatch(expenseActions.addCategory(category));
      setSelectedCategory(category);
    }
  };

  const onInputExpenseHandler = (event) => {
    let value = event.target.value.replace(/\D/g, "");
    setInputExpense(formatMoney(value));
    dispatch(expenseActions.addValue(value));
  };

  const onInputHandler = () => {
    dispatch(inputValueActions.addValue(inputExpense));
    console.log(inputExpense, selectedCategory);
  };

  const onExpenseHandler = () => {
    setIsIncomeClicked(true);
  };

  const onIncomeHandler = () => {
    setIsIncomeClicked(false);
  };

  const onGetBackHandler = () => {
    navigation("/landingPage");
  };

  const onHistoryHandler = () => {
    navigation("/history");
  };

  return (
    <>
      {isIncomeClicked && (
        <div className={classes.financesDiv}>
          <button className={classes.buttonDiv} onClick={onGetBackHandler}>
            Voltar
          </button>
          <div className={classes.alternativeDiv}>
            <button className={classes.expenseBtn}>Custo</button>
            <button className={classes.incomeBtn} onClick={onIncomeHandler}>
              Renda
            </button>
          </div>
          <div>
            <h2 className={classes.data}>
              Data: <Calendar />
            </h2>
            <h2>
              Custo:
              <input
                type="text"
                id="text"
                value={inputExpense}
                onChange={onInputExpenseHandler}
                className={`${classes.inputExpense}`}
              />
            </h2>
          </div>
          <div>
            <h2>Categoria:</h2>
            <Card>
              <ul className={classes.unorderedList}>
                <li
                  className={`${classes.list} ${
                    selectedCategory === "casa" ? classes.selected : ""
                  }`}
                  onClick={() => handleCategoryClick("casa")}
                >
                  <div>
                    <img
                      src={homeIcon}
                      alt="Icone de uma casa"
                      className={classes.icon}
                    />
                    <p className={classes.paragraph}>Casa</p>
                  </div>
                </li>
                <li
                  className={`${classes.list} ${
                    selectedCategory === "lazer" ? classes.selected : ""
                  }`}
                  onClick={() => handleCategoryClick("lazer")}
                >
                  <div>
                    <img
                      src={leisure}
                      alt="Icone de um Foguete"
                      className={classes.icon}
                    />
                    <p className={classes.paragraph}>Lazer</p>
                  </div>
                </li>
                <li
                  className={`${classes.list} ${
                    selectedCategory === "saúde" ? classes.selected : ""
                  }`}
                  onClick={() => handleCategoryClick("saúde")}
                >
                  <div>
                    <img
                      src={health}
                      alt="Icone de uma planilha"
                      className={classes.icon}
                    />
                    <p className={classes.paragraph}>Saúde</p>
                  </div>
                </li>
                <li
                  className={`${classes.list} ${
                    selectedCategory === "educação" ? classes.selected : ""
                  }`}
                  onClick={() => handleCategoryClick("educação")}
                >
                  <div>
                    <img
                      src={college}
                      alt="Icone de formatura"
                      className={classes.icon}
                    />
                    <p className={classes.paragraph}>Educação</p>
                  </div>
                </li>
                <li
                  className={`${classes.list} ${
                    selectedCategory === "comida" ? classes.selected : ""
                  }`}
                  onClick={() => handleCategoryClick("comida")}
                >
                  <div>
                    <img
                      src={nutrition}
                      alt="Icone de um relógio"
                      className={classes.icon}
                    />
                    <p className={classes.paragraph}>Alimentação</p>
                  </div>
                </li>
                <li
                  className={`${classes.list} ${
                    selectedCategory === "transporte" ? classes.selected : ""
                  }`}
                  onClick={() => handleCategoryClick("transporte")}
                >
                  <div>
                    <img
                      src={transportation}
                      alt="Icone de um relógio"
                      className={classes.icon}
                    />
                    <p className={classes.paragraph}>Transporte</p>
                  </div>
                </li>
              </ul>
            </Card>
            <div>
              <button className={classes.lastButtons} onClick={onInputHandler}>
                Inserir Despesa
              </button>
              <button
                className={classes.lastButtons}
                onClick={onHistoryHandler}
              >
                Visualizar Despesa
              </button>
            </div>
          </div>
        </div>
      )}
      {!isIncomeClicked && (
        <div className={classes.financesDiv}>
          <button className={classes.buttonDiv} onClick={onGetBackHandler}>
            Voltar
          </button>
          <div className={classes.alternativeDiv}>
            <button
              className={classes.expenseReverseColorBtn}
              onClick={onExpenseHandler}
            >
              Custo
            </button>
            <button className={classes.incomeReverseColorBtn}>Renda</button>
          </div>
          <div>
            <h2 className={classes.data}>
              Data: <Calendar />
            </h2>
            <h2>
              Custo:
              <input
                type="text"
                id="text"
                value={inputExpense}
                onChange={onInputExpenseHandler}
                className={`${classes.inputExpense}`}
              />
            </h2>
          </div>
          <div>
            <h2>Categoria:</h2>
            <Card>
              <ul className={classes.unorderedList}>
                <li className={classes.list}>
                  <div>
                    <img
                      src={homeIcon}
                      alt="Icone de uma casa"
                      className={classes.icon}
                    />
                    <p className={classes.paragraph}>Casa</p>
                  </div>
                </li>
                <li className={classes.list}>
                  <div>
                    <img
                      src={leisure}
                      alt="Icone de um Foguete"
                      className={classes.icon}
                    />
                    <p className={classes.paragraph}>Lazer</p>
                  </div>
                </li>
                <li className={classes.list}>
                  <div>
                    <img
                      src={health}
                      alt="Icone de Planilha"
                      className={classes.icon}
                    />
                    <p className={classes.paragraph}>Saúde</p>
                  </div>
                </li>
                <li className={classes.list}>
                  <div>
                    <img
                      src={college}
                      alt="Icone de um chapéu de formatura"
                      className={classes.icon}
                    />
                    <p className={classes.paragraph}>Educação</p>
                  </div>
                </li>
                <li className={classes.list}>
                  <div>
                    <img
                      src={nutrition}
                      alt="Icone de um relógio"
                      className={classes.icon}
                    />
                    <p className={classes.paragraph}>Alimentação</p>
                  </div>
                </li>
                <li className={classes.list}>
                  <div>
                    <img
                      src={transportation}
                      alt="Icone de um localizador"
                      className={classes.icon}
                    />
                    <p className={classes.paragraph}>Transporte</p>
                  </div>
                </li>
              </ul>
            </Card>
            <div>
              <button className={classes.lastButtons}>Inserir Despesa</button>
              <button
                className={classes.lastButtons}
                onClick={onHistoryHandler}
              >
                Visualizar Despesa
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Expense;