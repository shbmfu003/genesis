import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.scss";
import { MainLayoutRoute, HeroLayoutRoute } from "./routes";
import HomeView from "./views/home";
import AboutView from "./views/about";
import ContactView from "./views/contact";
import FeaturesView from "./views/features";

function App() {
	return (
		<Router>
			<Switch>
				<HeroLayoutRoute exact path='/' component={HomeView} />
				<MainLayoutRoute exact path='/about' component={AboutView} />
				<MainLayoutRoute exact path='/contact' component={ContactView} />
				<MainLayoutRoute exact path='/features' component={FeaturesView} />
			</Switch>
		</Router>
	);
}

export default App;
