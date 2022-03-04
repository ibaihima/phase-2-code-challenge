import React from "react";
import BotCard from "./BotCard";
import {v4 as uuid} from 'uuid'
function BotCollection({bot, onRobotClicked, onRobotDelete}) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {
          bot.map((bot)=>{
            return (
              <BotCard key = {uuid()} bot={bot} onRobotClicked={onRobotClicked} onRobotDelete={onRobotDelete} />
            )
          })
        }
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
