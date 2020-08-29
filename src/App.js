import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
// app components
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// app pages
import HomePage from "./pages/Home";

function App() {
	return (
		<Router>
			<Header>
				<NavBar />
			</Header>
			<HomePage />
			<Footer />
		</Router>
	);
}

export default App;
