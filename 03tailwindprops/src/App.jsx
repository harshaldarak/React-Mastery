import "./App.css";
import Card from "./components/card";

function App() {
  const myARR = [1, 2, 3, 4, 5];
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-green-400 text-black p-4 rounded-xl mb-4'>
        Tailwind Test
      </div>
      <Card name='Harshal' arr={myARR} btnText='Click Me' />
      <Card name='HD 09' />
    </div>
  );
}

export default App;
