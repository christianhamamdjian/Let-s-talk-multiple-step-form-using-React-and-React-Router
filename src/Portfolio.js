import React, { Component } from 'react';
import './App.css';

class Portfolio extends Component {
	constructor(props) {
		super(props);
		this.state = {
            isTouched: {
                portfolio:false
            },
            portfolio: '',
            anythingelse:''
            };
        }
        handleSubmit = e => {
            e.preventDefault();
            const myInfo = {
                portfolio: this.state.portfolio,
                anythingelse: this.state.anythingelse
            } 
            this.props.infoList(myInfo);
            this.props.history.push('/thank-you');
        };
    
        isSubmitDisabled = errors => {
            return Object.values(errors).some(errMsg => {
                return errMsg;
            });
        };
    
        validate = (portfolio) => {
            const errors = {
                portfolio: /https?:\/\/.+/.test(portfolio)
                    ? ''
                    : 'Invalid url',
            };
    
            return errors;
        };
    render() {
        const {portfolio} = this.state;
        const errors = this.validate(portfolio);
        return (
    <div className="portfolio">
     <form className="my-form" onSubmit={this.handleSubmit}>
    <h3>3. Portfolio</h3>
          <hr />
          
          <h4>Prove you’re IBM’s next great designer by showing us who you are. What you’ve done. How you think. Tell us you story.
          </h4>
          
          
        <input className="input-full portfolioLink" 
        type="text" 
        id="portfolio" 
        name="portfolio-link" 
        placeholder="Portfolio link *" 
        value="" 
        minLength="5" 
        onFocus={e => this.setState(
            prevState => ({isTouched: {...prevState.isTouched, portfolio:true}})
            )
        }
        onChange={e => this.setState({ portfolio: e.target.value })}
        value={this.state.portfolio} 
        />
        <span className={this.state.isTouched.portfolio === true ? "err-msg" : "err-msg-invisible"} id="message-portfolio">{errors.portfolio}</span>
        
        <textarea 
        
        placeholder="Anything else (another link, availability, etc.)?" 
        onChange={e => this.setState({ anythingelse: e.target.value })}
        value={this.state.anythingelse} 
        />

        <div className="submit">
        
        <button className="submit-button" type="submit" title="submit" value="submit" disabled={this.isSubmitDisabled(errors)}>Submit</button>

        </div>
    
        </form>
      </div>
  );
}
}
export default Portfolio;