import footerPic from "../assets/footerpic.png";
import telegram from "../assets/telegram.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import mail from "../assets/mail.svg";
import FooterButton from "./FooterButton";
const Community = () => {
  interface contact {
    url: String;
    head: String;
    subHead: String;
  }
  const contactUs: contact[] = [
    { url: telegram, head: "Telegram", subHead: "Join Chat" },
    { url: twitter, head: "Twitter", subHead: "FOLLOW @shakespere" },
    { url: instagram, head: "Instagram", subHead: "FOLLOW @shakespere" },
    { url: mail, head: "Contact Us", subHead: "FOLLOW @shakespere" },
  ];

  return (
    <div className="flex flex-col pt-10 items-center justify-center bg-primary text-center font-grotesk font-medium text-[#FFFFFF] p-10 gap-2 lg:mt-32">
      <p className="text-4xl">Join Our Community</p>
      <p className="lg:text-xl text-base">
        Learn more about Lido, chat with us and have your say in the future of
        the stakesphere ecosystem
      </p>
      <img src={footerPic} className=" w-full h-auto md:w-[881.64px] md:h-[269px] mt-16 " />
      <div className=" grid md:grid md:grid-cols-2 md:grid-rows-2 gap-x-16 gap-y-10 mt-20">
        {
          contactUs.map((node:contact,index:number)=>{
            return <FooterButton url={node?.url} head={node?.head} subHead={node?.subHead} index={index}/>
          })
        }
      </div>
      <p className="lg:text-xl text-base mt-14 mb-8">
      2023 © stakesphere All rights reserved
      </p>
    </div>
  );
};

export default Community;
