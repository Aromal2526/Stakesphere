
import logoName from '../assets/Group 13.png'
import Button from './Button'
const Navbar = () => {

    const navItems:string[]=['Tokens','Blog','About','Contact']
  return (
    <nav className="fixed top-0 left-0 h-20 bg-transparent flex justify-between w-screen items-center font-grotesk font-bold">
    <div className="bg-secondary py-6 lg:px-6 px-3  flex rounded-br-[21px]  ">
          <img src={logoName} height={40} width={246}/>
   </div>

   <div className='flex text-secondary lg:gap-10 gap-8  '>
   {navItems.map((items:string)=>{ 
    return <p>{items}</p>
   })}
   </div>
   <div className='w-[20%]'>
<Button height='pt-[13px] pb-[14px]' width='pr-[34px] pl-[33px] rounded-[43px] tracking-[1.11px] leading-[23.14px]' bgColor='bg-secondary' textColor='text-[#0047FF] lg:text-[10px] text-[9px]' text='CONNECT WALLET'/>
   </div>
    </nav>
  )
}

export default Navbar