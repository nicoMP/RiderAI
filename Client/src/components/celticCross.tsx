import { useState } from "react";
import Card from "./cardDisplay";
import TarotInput from "./inputs";
type pickedCards ={
  c1: string,
  c2: string,
  c3: string,
  c4: string,
  c5: string,
  c6: string,
  c7: string,
  c8: string,
  c9: string,
  c10: string

}
const CelticCrossLayout = () => {
  const [question, setQuestion] = useState<string|undefined>('')
  const [pickedCards,pickCards] = useState<pickedCards>({
    c1: '',
    c2: '',
    c3: '',
    c4: '',
    c5: '',
    c6: '',
    c7: '',
    c8: '',
    c9: '',
    c10: ''
  
  })
  return (
  <>
    {question===""&&<TarotInput setQuestion={setQuestion}/>}
    <div className=" w-screen h-3/4 grid grid-cols-4">
      <div className="col-span-3 grid items-center grid-cols-3">
        <div className="flex items-center col-span-1">
            <div className= "mx-auto">
              <Card  card = {pickedCards.c6}/>
            </div>
        </div>
        <div className="items-center content-between h-full grid grid-rows-3 col-span-1">
            <div className= "mx-auto">
              <Card card = {pickedCards.c3}/>
            </div>
            <div className= "mx-auto">
              <Card card = {pickedCards.c1}/>
            </div>
            <div className= "mx-auto">
              <Card card = {pickedCards.c4}/>
            </div>
        </div>
        <div className="flex items-center col-span-1">
            <div className= "mx-auto">
              <Card card = {pickedCards.c5}/>
            </div>
        </div>
      </div>
      <div className="grid grid-rows-4 items-center col-span-1 ">
        <div className= "mx-auto">
          
          <Card card = {pickedCards.c10}/>
        </div>
        <div className= "mx-auto">
          <Card card = {pickedCards.c9}/>
        </div>
        <div className= "mx-auto">
          <Card card = {pickedCards.c8}/>
        </div>
        <div className= "mx-auto">
          <Card card = {pickedCards.c7}/>
        </div>
      </div>
    </div>
  </>
  )
};
const tarotCards = [
  // Major Arcana
  "The Fool",
  "The Magician",
  "The High Priestess",
  "The Empress",
  "The Emperor",
  "The Hierophant",
  "The Lovers",
  "The Chariot",
  "Strength",
  "The Hermit",
  "Wheel of Fortune",
  "Justice",
  "The Hanged Man",
  "Death",
  "Temperance",
  "The Devil",
  "The Tower",
  "The Star",
  "The Moon",
  "The Sun",
  "Judgment",
  "The World",
  // Wands (Minor Arcana)
  "Ace of Wands",
  "Two of Wands",
  "Three of Wands",
  "Four of Wands",
  "Five of Wands",
  "Six of Wands",
  "Seven of Wands",
  "Eight of Wands",
  "Nine of Wands",
  "Ten of Wands",
  "Page of Wands",
  "Knight of Wands",
  "Queen of Wands",
  "King of Wands",
  // Cups (Minor Arcana)
  "Ace of Cups",
  "Two of Cups",
  "Three of Cups",
  "Four of Cups",
  "Five of Cups",
  "Six of Cups",
  "Seven of Cups",
  "Eight of Cups",
  "Nine of Cups",
  "Ten of Cups",
  "Page of Cups",
  "Knight of Cups",
  "Queen of Cups",
  "King of Cups",
  // Swords (Minor Arcana)
  "Ace of Swords",
  "Two of Swords",
  "Three of Swords",
  "Four of Swords",
  "Five of Swords",
  "Six of Swords",
  "Seven of Swords",
  "Eight of Swords",
  "Nine of Swords",
  "Ten of Swords",
  "Page of Swords",
  "Knight of Swords",
  "Queen of Swords",
  "King of Swords",
  // Pentacles (Minor Arcana)
  "Ace of Pentacles",
  "Two of Pentacles",
  "Three of Pentacles",
  "Four of Pentacles",
  "Five of Pentacles",
  "Six of Pentacles",
  "Seven of Pentacles",
  "Eight of Pentacles",
  "Nine of Pentacles",
  "Ten of Pentacles",
  "Page of Pentacles",
  "Knight of Pentacles",
  "Queen of Pentacles",
  "King of Pentacles",
];
export default CelticCrossLayout;
