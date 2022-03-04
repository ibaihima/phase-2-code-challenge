import React, {useEffect, useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";


function BotsPage() {
  //start here with your code for step one

  const [botCollection, setBotCollection] = useState([])
  const [myList, setMyList] = useState([])
  useEffect(() => {
    fetch('http://localhost:8002/bots')
    .then (res => res.json())
    .then ((inventory)=> {
      setBotCollection(inventory);
    })
  },[])

  const whenClicked = (whatsClicked) => {
    if (myList.includes(whatsClicked)=== false) 
    setMyList([...myList, whatsClicked])
  }


  const deleteWhenClicked = (whatsClicked) => {
    const find = myList.findIndex((robot) => robot.id === whatsClicked.id)
    const newArray = [...myList]
    newArray.splice(find, 1)
    setMyList(newArray)
  }

  const onRobotDelete = (whatsClicked)=>{
    const find = myList.findIndex((robot) => robot.id === whatsClicked.id)
    const myArray = [...myList]
    const finds = botCollection.findIndex((robot) => robot.id === whatsClicked.id)
    const mainArray = [...botCollection]
    myArray.splice(find, 1)  
    mainArray.splice(finds, 1)
    setMyList(myArray)
    setBotCollection(mainArray)  

  }



  return (
    <div>
      <YourBotArmy bot= {myList} onRobotClicked={deleteWhenClicked} onRobotDelete= {onRobotDelete} />
      <BotCollection bot = {botCollection} onRobotClicked = {whenClicked} onRobotDelete={onRobotDelete}/>
    </div>
  )

}

export default BotsPage;
