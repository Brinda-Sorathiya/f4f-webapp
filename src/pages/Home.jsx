import React,{useState} from 'react'
import Header from '../components/Header'
import Expmenu from '../components/Expmenu'
import Foodl from '../components/Foodl'

const Home = () => {

  const [ctg, setCtg] = useState("all")

  return (
    <div className='p-[30px] w-full'>
      <Header/>
      <Expmenu catagory={ctg} setCategory={setCtg}/>
      <hr className='my-[30px] bg-gray-400 h-[2px]'/>
      <Foodl catagory={ctg}/>
    </div>
  )
}

export default Home
