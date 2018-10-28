import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
  Prompt,
  Switch
} from "react-router-dom";
import "./App.css";

import PersonalInfo from "./PersonalInfo";
import SkillsAndLocation from "./SkillsAndLocation";
import Portfolio from "./Portfolio";
import ThankYou from "./ThankYou";

const Home = props => (
  <div>
    <h1>Welcome to our application form</h1>
    <button className="submit-button">
      <NavLink exact activeStyle={{ color: "orange" }} to="/personal-info">
        Go to Personal info page
      </NavLink>
    </button>
  </div>
);

const NotFound = () => {
  return <h2> The page was not found </h2>;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      phone: "",
      emailAddress: "",
      emailAddress2: "",
      address: "",
      city: "",
      state: "",
      country: "",
      zip: "",
      hearabout: "",
      cities: [],
      discipline: "",
      otherDisciplines: [],
      portfolio: ""
    };
    this.infoList1 = this.infoList1.bind(this);
    this.infoList2 = this.infoList2.bind(this);
    this.infoList3 = this.infoList3.bind(this);
  }
  infoList1(myInfo) {
    this.setState({
      ...myInfo
    });
  }
  infoList2(myInfo) {
    this.setState({
      ...myInfo
    });
  }
  infoList3(myInfo) {
    this.setState({
      ...myInfo
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <h1>Let’s talk</h1>
            <h2>Think you have what it takes? Show us.</h2>
            <div id="navigation">
              <ul>
                <li>
                  <NavLink exact activeStyle={{ color: "orange" }} to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    activeStyle={{ color: "orange" }}
                    to="/personal-info"
                  >
                    Personal info
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    activeStyle={{ color: "orange" }}
                    to="/skills-and-location"
                  >
                    Skills and location
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    activeStyle={{ color: "orange" }}
                    to="/portfolio"
                  >
                    Portfolio
                  </NavLink>
                </li>
              </ul>
            </div>

            <div id="my-form">
              <Switch>
                <Route exact strict path="/" component={Home} />
                <Route
                  exact
                  strict
                  path="/personal-info"
                  render={props => (
                    <PersonalInfo
                      infoList={this.infoList1}
                      {...props}
                      {...this.state}
                    />
                  )}
                />
                <Route
                  exact
                  strict
                  path="/skills-and-location"
                  render={props => (
                    <SkillsAndLocation
                      infoList={this.infoList2}
                      {...props}
                      {...this.state}
                    />
                  )}
                />
                <Route
                  exact
                  strict
                  path="/portfolio"
                  render={props => (
                    <Portfolio
                      infoList={this.infoList3}
                      {...props}
                      {...this.state}
                    />
                  )}
                />
                <Route
                  exact
                  strict
                  path="/thank-you"
                  render={props => <ThankYou {...this.state} />}
                />
                <Route component={NotFound} />
              </Switch>
            </div>

            <div id="footer">&copy; 2018 Christian Hamamdjian</div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
