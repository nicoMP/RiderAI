import { Dispatch, SetStateAction } from "react";
import QuestionBackground from "../assets/TarotBackground.jpg"

type Input ={
    setQuestion: Dispatch<SetStateAction<object | undefined>>;
}
export default function TarotInput({setQuestion}:Input){
    function OnEnter(event:React.KeyboardEvent<HTMLInputElement>){
        if (event.key === 'Enter' ) {
            const queryElement = document.getElementById("query") as HTMLInputElement | null;
            const query = queryElement?.value
            window.alert(query);
            setQuestion({"question":query})
          }
        
    }
    function SubmitQuestion(){
        const queryElement = document.getElementById("query") as HTMLInputElement | null;
        const query = queryElement?.value
        window.alert(query);
        setQuestion({"question":query})
    }
    return(

        <div className="fixed inset-0 flex items-center justify-center z-50 " >
            <div className="absolute inset-0 bg-zinc-600 opacity-80"></div>
                <div className=" grid p-4 bg-no-repeat  shadow-xl z-50 bg-cover rounded-2xl" style={{ backgroundImage: `url(${QuestionBackground})`}}>
                    <h2 className="text-4xl mb-4 bg-white/80 text-black rounded-xl p-2">What insight might the cards provide for you today?</h2>
                    <div className="grid grid-rows-2">
                        <input className=" h-8  text-2xl pl-2 rounded-xl bg-yellow-100/40" id = "query" name= "query" onKeyDown={OnEnter}/>
                        <button className="bg-yellow-100/40 text-white  w-1/4 mx-auto mt-4 text-lg items-center text-center rounded" onClick={SubmitQuestion}>
                        Submit
                        </button>
                    </div>
                </div>
            
        </div>
            

    )
}
