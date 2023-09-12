const Button = (props: any) => {
  const { height, width, bgColor, textColor, text } = props;

  console.log("walett",text)
  const attributes =
    text === "CONNECT WALLET" ||text === "STAKE NOW" ? { href: "http://alpha.stakesphere.com/" ,target:"_blank" } : 
    {href:""};

  return (
    <button className={`${height} ${width} ${bgColor} ${textColor}`}>
      <a {...attributes} className="cursor-pointer">
        {text}
      </a>
    </button>
  );
};

export default Button;
