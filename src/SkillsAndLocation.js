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

class SkillsAndLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: props.cities || [],
      discipline: props.discipline || "",
      otherDisciplines: props.otherDisciplines || []
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    const myInfo = {
      cities: this.state.cities,
      discipline: this.state.discipline,
      otherDisciplines: this.state.otherDisciplines
    };
    console.log(myInfo);
    this.props.infoList(myInfo);
    this.props.history.push("/portfolio");
  };
  handleCityCheck = e => {
    const value = e.target.value;
    const index = this.state.cities.indexOf(value);
    index === -1
      ? this.setState(prevState => ({ cities: [...prevState.cities, value] }))
      : this.setState(prevState => {
          return {
            cities: [
              ...prevState.cities.slice(0, index),
              ...prevState.cities.slice(index + 1)
            ]
          };
        });
  };
  handleDiscipline = e => {
    const value = e.target.value;
    this.setState({ discipline: value });
  };
  handleOtherDisciplines = e => {
    const value = e.target.value;
    const index = this.state.otherDisciplines.indexOf(value);
    index === -1
      ? this.setState(prevState => ({
          otherDisciplines: [...prevState.otherDisciplines, value]
        }))
      : this.setState(prevState => {
          return {
            otherDisciplines: [
              ...prevState.otherDisciplines.slice(0, index),
              ...prevState.otherDisciplines.slice(index + 1)
            ]
          };
        });
  };
  isSubmitDisabled = errors => {
    return Object.values(errors).some(errMsg => {
      return errMsg;
    });
  };

  validate = (cities, discipline) => {
    const errors = {
      cities: cities.length ? "" : "Pick at least one city",
      discipline: discipline.length ? "" : "Choose a discipline"
    };
    return errors;
  };

  render() {
    const { cities, discipline, otherDisciplines } = this.state;
    const errors = this.validate(cities, discipline);

    return (
      <div className="skills-and-location">
        <form className="my-form" onSubmit={this.handleSubmit}>
          <div className="skills">
            <h3>2. Skills and location</h3>
            <hr />

            <h4>Which is your primary design discipline? *</h4>
            <div className="err-msg">{errors.discipline}</div>
            <div className="radio-block">
              <input
                type="radio"
                name="discipline"
                id="design-research"
                value="design-research"
                checked={discipline.includes("design-research")}
                onChange={this.handleDiscipline}
              />

              <label htmlFor="design-research">Design Research</label>

              <input
                type="radio"
                name="discipline"
                id="visual-design"
                value="visual-design"
                checked={discipline.includes("visual-design")}
                onChange={this.handleDiscipline}
              />

              <label htmlFor="visual-design">Visual Design</label>

              <input
                type="radio"
                name="discipline"
                id="ux-design"
                value="ux-design"
                checked={discipline.includes("ux-design")}
                onChange={this.handleDiscipline}
              />

              <label htmlFor="ux-design">UX Design</label>

              <input
                type="radio"
                name="discipline"
                id="front-end-dev"
                value="front-end-dev"
                checked={discipline.includes("front-end-dev")}
                onChange={this.handleDiscipline}
              />

              <label htmlFor="front-end-dev">Front-end Dev</label>

              <div className="clearfix" />
            </div>
          </div>

          <div className="skills-left">
            <h4>Do you have experience with any other disciplines?</h4>

            <div className="checkboxes-block">
              <label htmlFor="other-visual-design">Visual Design</label>
              <input
                id="other-visual-design"
                type="checkbox"
                name="otherDisciplines"
                value="other-visual-design"
                onChange={this.handleOtherDisciplines}
                checked={otherDisciplines.includes("other-visual-design")}
              />

              <label htmlFor="other-ux-design">UX Design</label>
              <input
                id="other-ux-design"
                type="checkbox"
                name="otherDisciplines"
                value="other-ux-design"
                onChange={this.handleOtherDisciplines}
                checked={otherDisciplines.includes("other-ux-design")}
              />

              <label htmlFor="other-front-end-development">
                Front-end Development
              </label>
              <input
                id="other-front-end-development"
                type="checkbox"
                name="otherDisciplines"
                value="other-front-end-development"
                onChange={this.handleOtherDisciplines}
                checked={otherDisciplines.includes(
                  "other-front-end-development"
                )}
              />
            </div>
          </div>

          <div className="skills-right">
            <h4>Where are you interested in working? *</h4>

            <span>
              You must be legally authorized to work without visa sponsorship in
              the location you choose.
            </span>
            <div className="err-msg">{errors.cities}</div>
            <div className="checkboxes-block">
              <label htmlFor="a">Austin, Texas</label>

              <input
                id="a"
                className="checkbox"
                type="checkbox"
                value="austin-texas"
                name="option"
                onChange={this.handleCityCheck}
                checked={cities.includes("austin-texas")}
              />

              <label htmlFor="b">New York, New York</label>

              <input
                id="b"
                className="checkbox"
                type="checkbox"
                value="new-york-new-york"
                name="option"
                onChange={this.handleCityCheck}
                checked={cities.includes("new-york-new-york")}
              />

              <label htmlFor="c">Toronto, Canada</label>

              <input
                id="c"
                className="checkbox"
                type="checkbox"
                value="toronto-canada"
                name="option"
                onChange={this.handleCityCheck}
                checked={cities.includes("toronto-canada")}
              />

              <label htmlFor="d">Shanghai, China</label>

              <input
                id="d"
                className="checkbox"
                type="checkbox"
                value="shanghai-china"
                name="option"
                onChange={this.handleCityCheck}
                checked={cities.includes("shanghai-china")}
              />

              <label htmlFor="e">Dublin, Ireland</label>

              <input
                id="e"
                className="checkbox"
                type="checkbox"
                value="dublin-ireland"
                name="option"
                onChange={this.handleCityCheck}
                checked={cities.includes("dublin-ireland")}
              />

              <label htmlFor="f">Hursley, United Kingdom</label>

              <input
                id="f"
                className="checkbox"
                type="checkbox"
                value="hursley-united-kingdom"
                name="option"
                onChange={this.handleCityCheck}
                checked={cities.includes("hursley-united-kingdom")}
              />

              <label htmlFor="g">Boebingen, Germany</label>

              <input
                id="g"
                className="checkbox"
                type="checkbox"
                value="boebingen-germany"
                name="option"
                onChange={this.handleCityCheck}
                checked={cities.includes("boebingen-germany")}
              />

              <label htmlFor="h">Somewhere else</label>

              <input
                id="h"
                className="checkbox"
                type="checkbox"
                value="somewhere-else"
                name="option"
                onChange={this.handleCityCheck}
                checked={cities.includes("somewhere-else")}
              />
            </div>
          </div>
          <div className="clearfix" />
          <div className="submit">
            <button
              className="submit-button"
              type="submit"
              title="submit"
              value="submit"
              disabled={this.isSubmitDisabled(errors)}
            >
              Go to Portfolio page
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SkillsAndLocation;
