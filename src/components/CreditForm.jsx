import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import { useCard } from '../CardContext'
const CreditForm = () => {

    const { cardNumber, updateCardNumber: setCardNumber, updateFocus, cardHolder, setCardHolder, cvv, updateMonth, updateYear, updateCvv } = useCard()




    return (
        <div className=' h-fit w-full flex flex-col justify-center items-center '>
            {/* // < !--ℑ♑︎  亖⌽⎭🂱⎶☀️☀️⌶⍱   --> */}
            <div className='w-full h-full flex flex-col'>
                <div className='mb-4'>
                    <label className='block text-gray-700   text-xs font-bold mb-1' htmlFor='cardNumber'>
                        Card Number
                    </label>
                    <input
                        value={cardNumber}
                        onFocus={() => updateFocus(1, "cardNumber")}
                        onBlur={() => updateFocus(0, "cardNumber")}
                        onChange={(e) => setCardNumber(e.target.value)}
                        type='text'
                        id='cardNumber'
                        placeholder=''
                        className='focus:shadow-xl text-sm appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none  focus:border-blue-500 focus:shadow-outline'
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700   text-xs font-bold mb-1' htmlFor='cardHolder'>
                        Card Name
                    </label>
                    <input
                        value={cardHolder}
                        onFocus={() => updateFocus(1, "cardHolder")}
                        onBlur={() => updateFocus(0, "cardHolder")}
                        onChange={(e) => setCardHolder(e.target.value)}
                        type='text'
                        id='cardHolder'
                        placeholder=''
                        className='focus:shadow-xl  appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none  focus:border-blue-500 focus:shadow-outline'
                    />
                </div>
                <div className='mb-4 flex justify-between gap-8'>
                    <div className='w-auto flex-1' onFocus={() => updateFocus(1, "expires")} onBlur={() => updateFocus(0, "expires")}>
                        <label className='block text-gray-700   text-xs font-bold mb-1' htmlFor='expiryDate'>
                            Expiration Date
                        </label>
                        <div className='flex justify-between gap-2'>
                            <div className='relative w-full'>
                                <select
                                    onChange={(e) => updateMonth(e.target.value)}
                                    id='expiryMonth'
                                    className='focus:shadow-xl  appearance-none border text-sm font-medium border-gray-300 rounded w-full py-2 px-3 text-gray-700  focus:outline-none  focus:border-blue-500 focus:shadow-outline mb-2' >
                                    <option value='' disabled selected>
                                        Month
                                    </option>
                                    {Array.from({ length: 12 }, (_, i) => (
                                        <option key={i + 1} value={i + 1}>
                                            {i + 1 < 10 ? `0${i + 1}` : i + 1}
                                        </option>
                                    ))}
                                </select>
                                <KeyboardArrowDownTwoToneIcon className='absolute top-[41%] right-3 transform -translate-y-1/2 pointer-events-none' />
                            </div>
                            <div className='relative w-full'>
                                <select
                                    onChange={(e) => updateYear(e.target.value)}
                                    id='expiryYear'
                                    className='focus:shadow-xl text-sm  appearance-none border border-gray-300 font-medium rounded w-full py-2 px-3 text-gray-700 focus:outline-none  focus:border-blue-500 focus:shadow-outline mb-2'>
                                    <option value='' disabled selected>
                                        Year
                                    </option>
                                    {Array.from({ length: 10 }, (_, i) => (
                                        <option key={i + 2026} value={i + 2026}>
                                            {i + 2026}
                                        </option>
                                    ))}
                                </select>
                                <KeyboardArrowDownTwoToneIcon className='absolute top-[41%] right-3 transform -translate-y-1/2 pointer-events-none' />
                            </div>
                        </div>
                    </div>
                    <div className='max-w-[100px] '>
                        <label className='block text-gray-700   text-xs font-bold mb-1' htmlFor='cvv'>
                            CVV
                        </label>
                        <input
                            type='text'
                            onFocus={() => updateFocus(1, "cvv")}
                            onBlur={() => updateFocus(0, "cvv")}
                            id='cvv'
                            value={cvv}
                            onChange={(e) => updateCvv(e.target.value)}
                            placeholder=''
                            className='focus:shadow-xl  appearance-none text-sm border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none  focus:border-blue-500 focus:shadow-outline'
                        />
                    </div>
                </div>
                <button
                    type='submit'
                    className='bg-blue-500 hover:bg-blue-700 text-white   py-2 px-4 rounded focus:outline-none shadow-outline w-full'>
                    Submit
                </button>
            </div>

        </div>
    )
}

export default CreditForm