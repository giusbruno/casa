import React from 'react';
import "./controlli.css";
import Card from './card.js';
import fire from './fire';

class Controlli extends React.Component{
 render(){
	 return (
  <div className="centered">
    <section className="cards">
      
        <Card add="no" id="Cucina/Luce" name="Luce" ind='https://cdn.freshome.com/wp-content/uploads/2013/09/choosing-lampshade-bedside-table.jpg'/>
        <Card add="no"/>
        <Card add="no"/>
        <Card add="no"/>
        <Card add="no"/>
        <Card add="no"/>
        <Card add="no"/>
        <Card add="no"/>
        <Card add="no"/>
        <Card add="no"/>
        <Card add="no"/>
        <Card add="no"/>
        <Card add="no"/>
        <Card add="no"/>
        <Card add="no"/>
        <Card add="no"/>
        <Card add="no"/>
        <Card add="no"/>
        <Card add="si"/>

    </section>
</div>
	);
 }
}

export default Controlli;