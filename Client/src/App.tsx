
import TarotCards from './tarotcards.json';
import background from './assets/background.jpg'
import CelticCrossLayout from './components/celticCross';
import './App.css'
// import axios from 'axios';
// type Context = {
//   question: string,
//   significator: string,
//   c1: string,
//   c2: string,
//   c3: string,
//   c4: string,
//   c5: string,
//   c6: string,
//   c7: string,
//   c8: string,
//   c9: string,
//   c10: string

// }

function App() {
  console.log(TarotCards)
  // const getReading =async (params:Context) => {
  //   axios.post("http://localhost:3000/reading", params).then(
  //     (res)=>{

  //       console.log(res.data[0])
  //     }
  //   )
  // }
  // const submitReading = (e:React.FormEvent<HTMLFormElement>) =>{
  //   e.preventDefault();
  //   const target = e.currentTarget;
  //   const data = {
  //     question: target.question.value,
  //     significator: target.significator.value,
  //     c1: target.card1.value,
  //     c2: target.card2.value,
  //     c3: target.card3.value,
  //     c4: target.card4.value,
  //     c5: target.card5.value,
  //     c6: target.card6.value,
  //     c7: target.card7.value,
  //     c8: target.card8.value,
  //     c9: target.card9.value,
  //     c10: target.card10.value,

  //   }
  //   getReading(data);
  // }
  return (
    <div className="w-screen h-screen bg-cover overflow-scroll fixed overscroll-none p-1" style={{ backgroundImage: `url(${background})` }}>
        <CelticCrossLayout/>
    </div>
    // <div className='bg-orange-100 w-1/2 h-3/4 mx-auto rounded-xl p-8'>
    //   <p className='text-4xl'>Tarot Reading</p>
    //   <form onSubmit={(e) => {submitReading(e)}}>
    //     <label>What might the deck answer for you today?</label><br />
    //     <input className="mb-4" id="question" name="question" type="text" required></input><br />
    //     <label>Significator: </label>
    //     <input id="significator" name="significator" className="mb-2" type="text" required></input><br />
    //     <label>Card #1: </label>
    //     <input id="card1" name="card1" className="mb-2" type="text" required></input><br />
    //     <label>Card #2: </label>
    //     <input id="card2" name="card2" className="mb-2" type="text" required></input><br />
    //     <label>Card #3: </label>
    //     <input id="card3" name="card3" className="mb-2" type="text" required></input><br />
    //     <label>Card #4: </label>
    //     <input id="card4" name="card4" className="mb-2" type="text" required></input><br />
    //     <label>Card #5: </label>
    //     <input id="card5" name="card5" className="mb-2" type="text" required></input><br />
    //     <label>Card #6: </label>
    //     <input id="card6" name="card6" className="mb-2" type="text" required></input><br />
    //     <label>Card #7: </label>
    //     <input id="card7" name="card7" className="mb-2" type="text" required></input><br />
    //     <label>Card #8: </label>
    //     <input id="card8" name="card8" className="mb-2" type="text" required></input><br />
    //     <label>Card #9: </label>
    //     <input id="card9" name="card9" className="mb-2" type="text" required></input><br />
    //     <label>Card #10: </label>
    //     <input id="card10" name="card10" className="mb-2" type="text" required></input><br />
    //     <input type='submit' />

    //   </form>
    // </div>
  )
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars


export default App
