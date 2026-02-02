import Card from "./components/Cards.jsx";
function App() {
  let info = {
    name: "Abhay",
    age: 20,
    likes: ["coding", "music", "traveling"]
  }
  let info2 = {
    name: "Rahul",
    age: 22,
    likes: ["gaming", "reading", "cooking"]
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-500">
      <h1 className="text-4xl font-bold text-black-800">
        <Card info={info} />
      </h1>
      <h1 className="text-4xl font-bold text-black-800">
        <Card info={info2} />
      </h1>
    </div>
  )
}

export default App
