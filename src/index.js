import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
        keyId: 1,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
        keyId: 2,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
        keyId: 3,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
        keyId: 4,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
        keyId: 5,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
        keyId: 6,
    },
];

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    const styles = {
        color: "red",
        fontSize: "32px",
        textTransform: "uppercase",
    };
    return (
        <header className="header">
            <h1 style={styles}>Fast React Pizza GmbH.</h1>
        </header>
    );
}

function Menu() {
    const pizzas = pizzaData;
    const noPizzasChecker = pizzas.length > 0;
    return (
        <main className="menu">
            <h2>Our Menu</h2>

            {noPizzasChecker ? (
                <ul className="pizzas">
                    {pizzaData.map((pizza) => (
                        <Pizza key={pizza.keyId} pizzaObj={pizza} />
                    ))}
                </ul>
            ) : (
                <p>
                    We're still working on our menu. Please come back later :)
                </p>
            )}
        </main>
    );
}

function Pizza(props) {
    // console.log(props);

    if (props.pizzaObj.soldOut) return null;

    return (
        <li className="pizza">
            <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
            <div>
                <h3>{props.pizzaObj.name}</h3>
                <p>{props.pizzaObj.ingredients}</p>
                <span>{props.pizzaObj.price + 1} €</span>
            </div>
        </li>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 10;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className="footer">
            {isOpen ? (
                <OrderButton closeHours={closeHour} />
            ) : (
                <p>
                    Sorry, we're currently closed. We open at {openHour}:00
                    tomorrow.
                </p>
            )}
        </footer>
    );
}

function OrderButton(props) {
    return (
        <div className="order">
            <p>
                Welcome! We're open until {props.closeHours}:00. Come visit us
                or order online.
            </p>
            <button className="btn">Order now</button>
        </div>
    );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
