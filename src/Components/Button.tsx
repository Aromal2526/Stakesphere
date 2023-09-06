
const Button = (props:any) => {
    const {height,width,bgColor,textColor,text}=props
  return (
<button className={`${height} ${width} ${bgColor} ${textColor}`}>
{text}
</button>
    )
}

export default Button