import React from 'react';
import "./card.css";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import fire from './fire';
class Card extends React.Component{
    constructor(props) {
		super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state={act:true};
    
	}

 async handleClick(){
  
    let aef = fire.database().ref(this.props.st+'/'+this.props.name+'/val');
    aef.set("1");

    this.setState({act:false});  
    aef.on('value', function(snapshot) {
        
       if(snapshot.val()=='0'){
       this.setState({act:true})};
    }.bind(this));
 }

 render(){
    let c_class = this.state.act ? "cont" : "working";
	 return (
         
    <div onClick={this.handleClick} className={c_class}>
    <div className="icon" style={{backgroundImage:"url('"+this.props.ind+"')"}} >
    </div>
    <div className="ogg">{this.props.name}</div>
    </div>
  
	);
 }
}

export default Card;