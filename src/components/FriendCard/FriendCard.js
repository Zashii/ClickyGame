import React from "react";
import "./FriendCard.css";

import FlipMove from 'react-flip-move';
let _ = require('underscore');
// var Shuffle = require('react-shuffle');
// import friends from "../../friends.json";


class FriendCard  extends React.Component {
  state = {
    count: 0,
    friends: this.props.friends
  };
  
  handleIncrement = (i) => {

    let friend = this.state.friends[i];

    if (friend.clicked == 'True'){
      this.setState({ count: 0});
       this.state.friends.forEach (function(x){
           x.clicked = "false";
       });
    } else { 
      friend.clicked = 'True';
      this.state.friends[i] = friend;
      this.setState({ count: this.state.count + 1});
    };

    this.setState({ friends: _.shuffle(this.state.friends) });
    this.forceUpdate();
    
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {

    return (

      

      <div>
            
        <h1 style={{textAlign: "center"}}> This is your score: {this.state.count} 
        
        </h1>
      
        {this.state.friends.map((number, i) => 
            <span>
              
              <img alt={number.name} key={number.image} onClick={(e) => {this.handleIncrement(i)}} className="card " src={number.image} style={{width:"30%"} } />
            
            </span>
        )}


      </div>
    )
  }
};

export default FriendCard;


