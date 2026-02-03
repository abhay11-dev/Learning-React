import {useState} from "react"
function App() {
  const [count, setCount] = useState(0)

  let add = () =>{
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  
  }
  let subtract = () => {
    setCount(count - 1);
  }

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
        <h1 className="text-4xl font-bold mb-4">Counter App</h1>
        <div className="text-2xl mb-4">Count: {count}</div>
        <div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            onClick={add}
          >
            Increment
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={subtract}
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  )
}
export default App;
