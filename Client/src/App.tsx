import './App.css'

function App() {

  return (
    <div className='bg-orange-100 w-1/2 h-3/4 mx-auto rounded-xl p-8'>
    <p className = 'text-4xl'>Tarot Reading</p>
    <form >
      <label>What might the deck answer for you today?</label><br/>
      <input className="mb-4" id = "question" name="question" type="text" required></input><br/>
      <label>Significator: </label>
      <input id = "significator" name="significator" className="mb-2" type="text" required></input><br/>
      <label>Card #1: </label>
      <input id = "card1" name="card1" className="mb-2" type="text" required></input><br/>
      <label>Card #2: </label>
      <input id = "card2" name="card2" className="mb-2" type="text" required></input><br/>
      <label>Card #3: </label>
      <input id = "card3" name="card3" className="mb-2" type="text" required></input><br/>
      <label>Card #4: </label>
      <input id = "card4" name="card4" className="mb-2" type="text" required></input><br/>
      <label>Card #5: </label>
      <input id = "card5" name="card5" className="mb-2" type="text" required></input><br/>
      <label>Card #6: </label>
      <input id = "card6" name="card6" className="mb-2" type="text" required></input><br/>
      <label>Card #7: </label>
      <input id = "card7" name="card7" className="mb-2" type="text" required></input><br/>
      <label>Card #8: </label>
      <input id = "card8" name="card8" className="mb-2" type="text" required></input><br/>
      <label>Card #9: </label>
      <input id = "card9" name="card9" className="mb-2" type="text" required></input><br/>
      <label>Card #10: </label>
      <input id = "card10" name="card10" className="mb-2" type="text" required></input><br/>
      <input type='submit'/>

    </form>
    </div>
  )
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars

export default App
