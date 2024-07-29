import React, { useContext } from 'react'
import {storeCtx} from '../context/Context'
import Fditm from './Fditm'

const Foodl = ({catagory}) => {
     const {food_list} = useContext(storeCtx)
  return (
    <div>
        <h2 className='font-bold text-2xl text-red-600'>Dishes for foodie mind</h2>
        <div className='mt-[30px] grid grid-cols-auto-fill gap-[30px]'>
            {food_list.map((item,index) => {
                if(catagory==="all" || catagory===item.category){
                  return <Fditm key={index} id={item._id} name={item.name} descp={item.description} price={item.price} img={item.image}/>
                }
                
            })}
        </div>
    </div>
  )
}

export default Foodl
