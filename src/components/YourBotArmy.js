import React from "react";
import BotCard from "./BotCard";
import {v4 as uuid} from 'uuid';
function YourBotArmy({bot, onRobotClicked, onRobotDelete}) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {
            bot.map((bot)=>{
              return(
                <BotCard key= {uuid()} bot={bot} onRobotClicked={onRobotClicked} onRobotDelete={onRobotDelete}/>
              )
            })
          }
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
