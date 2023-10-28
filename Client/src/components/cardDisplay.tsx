import theFool from "../assets/Cards-png/00-TheFool.png";
type Card ={
    card:string
}

export default function Card({card}:Card) {
  return (
    <div className=" w-1/4 md:w-10/12 my-1 mx-auto">
      {card=="" && <img src={theFool} alt="The Fool" />}
    </div>
  );
}
