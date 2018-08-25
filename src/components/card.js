import React from 'react';
import "./card.css";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import fire from './fire';
class Card extends React.Component{
    constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

 handleClick(){
    console.log('ciao')
    fire.database().ref(this.props.st+'/'+this.props.name+'/val').set('1');    
 }
 render(){
	 return (
         
    <div className="cont" onClick={this.handleClick}>
    <div className="icon" style={{backgroundImage:"url('"+this.props.ind+"')"}} >
    </div>
    <div className="ogg">{this.props.name}</div>
    </div>
  
	);
 }
}

export default Card;