import React from 'react';
import "./tabs.css";
import Card from "./card.js";
import fire from './fire';
import Modal from './aggiungi.js';

import CSSTransition from 'react-addons-css-transition-group'; // ES6




class Tabs extends React.Component{
	constructor(props) {
		super(props);
		this.state = { stanze: [] , attstanza:[], ogg:[], aggIsOpen: false}; // <- set up react state
		this.cambioStanza = this.cambioStanza.bind(this);
	}
	toggleModal = () => {
		this.setState({
		  aggIsOpen: !this.state.aggIsOpen
		});
	  }
	componentWillMount(){
		var listaStanze=["Nessuna stanza"];
		
		/* Create reference to messages in Firebase Database */
		let messagesRef = fire.database().ref('/');
		messagesRef.on('value',snapshot=> {
		  let data = Object.keys(snapshot.val());
		  this.setState({ stanze: data});
		});
	  }

	 async cambioStanza(e){
		var listaOgg=["Nessun oggetto"];
		var a=e.target.id;
		/* Create reference to messages in Firebase Database */
		let messagesRef = fire.database().ref(a+'/');
		var snapshot=await messagesRef.once('value');

		  let data =  snapshot.val();
		  this.setState({attstanza:a, ogg:data});
		  console.log(this.state.ogg);
		
	
	  }	 
	  
	 render(){
	 var listaStanze=this.state.stanze.map((room)=><a id={room} className='stanza'  onClick={this.cambioStanza}>{room}</a>);
	 console.log(Object.keys(this.state.ogg));
	 var listaOgg=Object.keys(this.state.ogg).map((ogge)=><Card st={this.state.attstanza} name={this.state.ogg[ogge]['name']} ind={this.state.ogg[ogge]['ind']}/>);
	 var sec=<div className='cards' key='1'>{listaOgg}</div>;
	 return (
		 <div>
     <div className="scrollmenu"> 
		 {listaStanze}
		 <a id="Agg" className='agg' onClick={this.toggleModal}> ...</a>
	</div>
	<Modal show={this.state.aggIsOpen}
          onClose={this.toggleModal}/>
        
	<CSSTransition
	  key="ci"
      timeout={5000}
	  classNames="move">
	  {sec}
    </CSSTransition>

	
	</div>
	);
 }
}

export default Tabs;