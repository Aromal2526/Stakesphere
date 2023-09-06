

const BlogCards = (props:any) => {

    const {height,width,desc,date,url}=props

  return (
    <div className="flex items-center gap-2">
    <img src={url} className={`${height} ${ width}`}/>
    <div className="flex-col flex gap-4 justify-between h-11/12 font-grotesk">
        {/* <p>{title}</p> */}
        <p className="font-medium lg:text-xl">{desc}</p>
        <p className="font-normal text-sm">{date}</p>
    </div>
</div>
  )
}

export default BlogCards