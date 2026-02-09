
import './App.css'
import { useState } from 'react';
import {Input} from './components/index.js';
import useCurrencyInfo from './hooks/useCurrencyInfo';
function App() {
  const [amount,setAmount] = useState(0);
  const [from,setFrom] = useState("usd");
  const [to,setTo] = useState("inr");
  const [convertedAmount,setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  let options = Object.keys(currencyInfo);

  const swap = ()=>{
    let temp = from;
    setFrom(to);
    setTo(temp);
  }

  const convert = ()=>{
    if(from === to){
      setConvertedAmount(amount);
    }else{
      let rate = currencyInfo[to];
      setConvertedAmount(amount * rate);
    }
  }


  return (
   <>
    <h1 className="text-3xl font-bold text-center bg-amber-400">Currency Convertor</h1>
    <div className='max-w-md mx-auto mt-10'>
      <Input label="From" amount={amount} onAmountChange={setAmount} onCurrencyChange={setFrom} currencyOptions={options} selectCurrency={from} className="mb-4" />
      <button className='bg-gray-500 text-white rounded-md p-2 w-full mb-4 cursor-pointer' onClick={swap}>Swap</button>
      <Input label="To" amount={convertedAmount} onAmountChange={setConvertedAmount} onCurrencyChange={setTo} currencyOptions={options} selectCurrency={to} className="mb-4" />
      <button className='bg-green-500 text-white rounded-md p-2 w-full cursor-pointer' onClick={convert}>Convert from {from.toUpperCase()} to {to.toUpperCase()}</button>
    </div>
   </>
  )
}

export default App
