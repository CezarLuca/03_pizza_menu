import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// const pizzaData = [
//     {
//         name: "Focaccia",
//         ingredients: "Bread with italian olive oil and rosemary",
//         price: 6,
//         photoName: "pizzas/focaccia.jpg",
//         soldOut: false,
//     },
//     {
//         name: "Pizza Margherita",
//         ingredients: "Tomato and mozarella",
//         price: 10,
//         photoName: "pizzas/margherita.jpg",
//         soldOut: false,
//     },
//     {
//         name: "Pizza Spinaci",
//         ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
//         price: 12,
//         photoName: "pizzas/spinaci.jpg",
//         soldOut: false,
//     },
//     {
//         name: "Pizza Funghi",
//         ingredients: "Tomato, mozarella, mushrooms, and onion",
//         price: 12,
//         photoName: "pizzas/funghi.jpg",
//         soldOut: false,
//     },
//     {
//         name: "Pizza Salamino",
//         ingredients: "Tomato, mozarella, and pepperoni",
//         price: 15,
//         photoName: "pizzas/salamino.jpg",
//         soldOut: true,
//     },
//     {
//         name: "Pizza Prosciutto",
//         ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
//         price: 18,
//         photoName: "pizzas/prosciutto.jpg",
//         soldOut: false,
//     },
// ];

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
    // const styles = {};

    return (
        <header className="header">
            <h1 style={styles}>Fast React Pizza GmbH.</h1>
        </header>
    );
}

function Menu() {
    return (
        <main className="menu">
            <h2>Our Menu</h2>
            <Pizza
                name="Pizza Prosciutto"
                ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
                photoName="pizzas/prosciutto.jpg"
                price={12}
            />
            <Pizza
                name="Pizza Margherita"
                ingredients="Tomato and mozarella"
                photoName="pizzas/margherita.jpg"
                price={8}
            />
            <Pizza
                name="Pizza Funghi"
                ingredients="Tomato, mozarella, mushrooms, and onion"
                photoName="pizzas/funghi.jpg"
                price={10}
            />
            <Pizza
                name="Pizza Salamino"
                ingredients="Tomato, mozarella, and pepperoni"
                photoName="pizzas/salamino.jpg"
                price={11}
            />
            <Pizza
                name="Pizza Spinaci"
                ingredients="Tomato, mozarella, spinach, and ricotta cheese"
                photoName="pizzas/spinaci.jpg"
                price={10}
            />
            <Pizza
                name="Focaccia"
                ingredients="Bread with italian olive oil and rosemary"
                photoName="pizzas/focaccia.jpg"
                price={6}
            />
        </main>
    );
}

function Pizza(props) {
    console.log(props);
    return (
        <div className="pizza">
            <img src={props.photoName} alt={props.name} />
            <div>
                <h3>{props.name}</h3>
                <p>{props.ingredients}</p>
                <span>{props.price + 1} €</span>
            </div>
        </div>
    );
}

function Footer() {
    const hour = new Date().getHours();
    // console.log(hour);
    // if (hour < 11 || hour > 20) {
    //     return <footer>Sorry, we're currently closed.</footer>;
    // }
    const openHour = 10;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    // console.log(isOpen);
    if (!isOpen) {
        return (
            <footer className="footer">
                <p>
                    {new Date().toLocaleTimeString()}, Sorry, we're currently
                    closed.
                </p>
                <p>© 2024 Fast React Pizza GmbH.</p>
            </footer>
        );
    } else {
        return (
            <footer>
                <p>{new Date().toLocaleTimeString()}, Welcome! We're open.</p>
                <p>© 2024 Fast React Pizza GmbH.</p>
            </footer>
        );
    }
    // return (
    //     <footer>
    //         <p>{new Date().toLocaleTimeString()}, {programMessage} </p>
    //         <p>© 2024 Fast React Pizza GmbH.</p>
    //     </footer>
    // );

    // return React.createElement("footer", null, "© 2024 Fast React Pizza GmbH.");
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
