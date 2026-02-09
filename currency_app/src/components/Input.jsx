import React,{useId} from 'react'

function Input({
    label, amount, onAmountChange, onCurrencyChange,currencyOptions= [], selectCurrency="usd",className = ""
}) {

    const amountInputId = useId();
  return (
    <div className={`flex flex-col ${className}`}>
        <label htmlFor={amountInputId} className='text-gray-700 mb-2'>{label}</label>
        Currency Type: <input id={amountInputId} type="text" placeholder='Enter the amount' className='border-2 border-gray-300 rounded-md p-2 w-full mb-4' value={amount} onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))} />
        <select className='border-2 border-gray-300 rounded-md p-2 w-full mb-4' value={selectCurrency} onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}>
            {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>{currency}</option>
            ))}
        </select>

    </div>
  )
}

export default Input
