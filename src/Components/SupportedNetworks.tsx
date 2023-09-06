import etherium from  '../assets/Group 23.png'
import coin from '../assets/cardImage.png'
import polygon from '../assets/Group 24.png'
import Card from './Card'
import { useState } from 'react'
const SupportedNetworks = () => {
    const displaycards:any=[
        {id:1,url:etherium ,title:'Ethereum',desc:'Stake any amount of ETH, get daily staking rewards and use your stETH across the DeFi ecosystem and L2.',perc:'4.0%',price:'14,662,312,501',month:'APR'},
        {id:2,url:coin ,title:'File Coin',desc:'Stake any amount of ETH, get daily staking rewards and use your stETH across the DeFi ecosystem and L2.',perc:'4.0%',price:'14,662,312,501',month:'APR'},
        {id:3,url:polygon ,title:'Polygon',desc:'Stake any amount of ETH, get daily staking rewards and use your stETH across the DeFi ecosystem and L2.',perc:'4.0%',price:'14,662,312,501',month:'APR'}
    ]

    const [card,setCard]=useState<number>(2)
  return (
    <div className="flex flex-col items-center mt-12 font-grotesk gap-3">
        <p className="text-4xl font-medium">Supported Networks</p>
        <p className="font-normal lg:text-xl text-base leading-10">
        Stakesphere lets you stake tokens from many networks. Choose a network below to get started.
        </p>
      <div className="grid grid-cols-3 gap-12">
        {
            displaycards.map((cards:any)=>{
             return  <div onMouseOver={()=>setCard(cards?.id)} onMouseLeave={()=>setCard(2)}> 
              <Card url={cards.url} title={cards.title} desc={cards.desc} perc={cards.perc} price={cards.price} month={cards.month} card={card} id={cards?.id}/>
              </div>
            })
        }
        </div> 

    </div>
  )
}

export default SupportedNetworks