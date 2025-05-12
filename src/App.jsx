import './App.css'
import CreditCard from './components/CreditCard'
import CreditForm from './components/CreditForm'

function App() {

  return (
    <>
      <div className=' flex justify-center items-center w-screen h-screen bg-[#CEE7FD] relative'>

        <div className='w-fit h-fit relative min-w-[450px] bg-white shadow-lg rounded-lg p-6 pt-[140px]'>
          <CreditCard />

          <CreditForm />
        </div>
      </div>

    </>
  )
}

export default App
