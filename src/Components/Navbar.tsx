
import { useState } from 'react'
import logoName from '../assets/Group 13.png'
import Button from './Button'
import pdfFile from '../assets/stake.pdf'
const Navbar = () => {
  

    const navItems:string[]=['Tokens','Blog','About','Contact','Whitepaper']
    const [showNav,setShowNav]=useState<boolean>(false)
const scrollIntoViewPort =(id:string)=>{
  setShowNav(false)
  let elementToView=document.getElementById(id)
  elementToView?.scrollIntoView({behavior:"smooth"})
}

  return (
    <nav className="  md:h-20 cursor-pointer flex justify-between w-screen items-center font-grotesk font-bold">
    <div className="bg-secondary py-2 md:py-6 lg:px-6 px-3  flex rounded-br-[21px]  ">
          <img src={logoName}  className=' md:h-[30px] md:w-[240px] w-[220px] h-[40px]'/>
   </div>

   <svg className='mx-4 md:hidden' width="30" height="30"  viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=> setShowNav(!showNav)}>
<g clip-path="url(#clip0_1_9796)">
<path d="M25 21.875C25.4815 21.8752 25.9445 22.0607 26.293 22.393C26.6415 22.7253 26.8488 23.1789 26.8719 23.6599C26.895 24.1409 26.7323 24.6123 26.4173 24.9765C26.1023 25.3407 25.6593 25.5698 25.18 25.6162L25 25.625H5C4.51848 25.6248 4.05551 25.4393 3.70702 25.107C3.35853 24.7747 3.15123 24.3211 3.12809 23.8401C3.10495 23.3591 3.26774 22.8877 3.58272 22.5235C3.8977 22.1593 4.34073 21.9302 4.82 21.8838L5 21.875H25ZM25 13.125C25.4973 13.125 25.9742 13.3225 26.3258 13.6742C26.6775 14.0258 26.875 14.5027 26.875 15C26.875 15.4973 26.6775 15.9742 26.3258 16.3258C25.9742 16.6775 25.4973 16.875 25 16.875H5C4.50272 16.875 4.02581 16.6775 3.67417 16.3258C3.32254 15.9742 3.125 15.4973 3.125 15C3.125 14.5027 3.32254 14.0258 3.67417 13.6742C4.02581 13.3225 4.50272 13.125 5 13.125H25ZM25 4.375C25.4973 4.375 25.9742 4.57254 26.3258 4.92417C26.6775 5.27581 26.875 5.75272 26.875 6.25C26.875 6.74728 26.6775 7.22419 26.3258 7.57583C25.9742 7.92746 25.4973 8.125 25 8.125H5C4.50272 8.125 4.02581 7.92746 3.67417 7.57583C3.32254 7.22419 3.125 6.74728 3.125 6.25C3.125 5.75272 3.32254 5.27581 3.67417 4.92417C4.02581 4.57254 4.50272 4.375 5 4.375H25Z" fill="#00FFE0"/>
</g>
<defs>
<clipPath id="clip0_1_9796">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg>
   <div className=' hidden md:flex text-secondary lg:gap-10 gap-4 lg:text-sm   text-[10px]  '>
   {navItems.map((items:string)=>{ 
    return(
      <>
      {items==="Whitepaper"? <a href={pdfFile} rel="noreferrer" target='_blank'>
      {items}
    </a>:
    <p onClick={()=>{scrollIntoViewPort(items)}}>
      {items}

    </p>
    }
      
      </>
    )
   })}
   </div>
   <div className='w-[20%] hidden md:block'>
<Button height='pt-[10px] pb-[10px]' width='pr-[30px] pl-[30px] rounded-[43px] lg:tracking-[1.11px] lg:leading-[23.14px]' bgColor='bg-secondary' textColor='text-[#0047FF] lg:text-[10px] text-[8px]' text='CONNECT WALLET'/>
   </div>

   {showNav&& <div className='fixed md:hidden top-[64px] right-8 flex flex-col justify-around text-primary font-grotesk text-base rounded-[10px] bg-secondary  w-[40%] p-5'>
    {navItems?.map((node:string)=>{
      return(
        <>
        {node!=='Whitepaper'?
<div onClick={()=>scrollIntoViewPort(node)} className='p-2 w-[90%] border-b border-primary font-bold'>{node}</div>:
<div className='p-2 w-[90%] border-b border-primary font-bold'>
<a href={pdfFile} rel="noreferrer" target='_blank'>
{node}
    </a></div>}


        </>
        
      )
    })}
    <Button width='px-[22px]' height=' py-[8px] ' textColor='text-xs font-bold mt-5 font-grotesk rounded-[28px] bg-primary text-secondary' text='Connect Wallet'/>

   </div>}
    </nav>
  )
}

export default Navbar