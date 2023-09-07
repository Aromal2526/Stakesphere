
const FooterButton = (props:any) => {
    const {url,head,subHead,index}=props
  return (
    <div role="button" className="flex bg-secondary rounded-[43px] px-4 py-2 gap-4">
      { index!==0? <div className="w-[55px] bg-primary rounded-[100%] relative h-[55px]">
            <img src={url} className="absolute -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%]"/>
      </div>:
      <img src={url}/>
      }
        <div className="flex flex-col justify-around  items-start text-primary font-grotesk tracking-[1.11px]">
            <p className="font-bold text-xl">{head}</p>
            <p className="font-normal text-[15px] leading-[23.14px]">{subHead}</p>
        </div>

    </div>
  )
}

export default FooterButton