import Blogs from "../assets/blogcards.png";
import BlogCards from "./BlogCards";

const BLogs = () => {
  interface content {
    url: string;
    desc: string;
    date: string;
  }

  const blogContent: content[] = [
    {
      url: Blogs,
      desc: "Stakesphere Announces Support for Protocol Staking on Archway",
      date: "STAKESPHERE JUL 4, 2023",
    },
    {
      url: Blogs,
      desc: "Stakesphere Announces Support for Protocol Staking on Archway",
      date: "STAKESPHERE JUL 4, 2023",
    },
    {
      url: Blogs,
      desc: "Stakesphere Announces Support for Protocol Staking on Archway",
      date: "STAKESPHERE JUL 4, 2023",
    },
    {
      url: Blogs,
      desc: "Stakesphere Announces Support for Protocol Staking on Archway",
      date: "STAKESPHERE JUL 4, 2023",
    },
  ];
  return (
    <div className="flex  flex-col items-center mt-12 font-grotesk gap-3 p-10 md:p-0 ">
      <p className="font-medium text-4xl">Blogs</p>

      <div className="md:grid  md:grid-cols-2 md:grid-rows-5 xl:gap-20 gap-4 md:px-10 ">
      <p className="font-medium text-4xl col-span-2 row-span-1 justify-self-start place-self-center h-10">Latest</p>


      <div className="flex border-b  border-[#0047FF] md:pb-20 flex-col md:flex-row items-center gap-[10%] col-span-2 row-span-2 ">
        <img  data-aos="flip-up" src={Blogs} className="w-full h-auto md:h-[285px] md:w-[452px]" />
        <div className="flex-col flex gap-1 justify-center lg:h-[285px] lg:w-[550px] h-fit w-fit  font-grotesk">
          <p className="font-bold lg:text-4xl text-xl">Ethereum Multisig Staking Now Available on stakesphere</p>
          <p className="font-normal lg:text-xl text-base">
            stakesphere is excited to announce the support of Ethereum Multisig
            Staking via Safe (formerly known as Gnosis Safe). Always at the
            forefront of blockchain innovation, stakefish remains dedicated to
            offering a secure and effective staking experience for all users.
          </p>
          <p className="font-normal text-sm py-10 md:p-0 ">STAKESPHERE JUL 4, 2023</p>
        </div>
      </div>

      {blogContent?.map((node: content,index:number) => {
          return (
            <div data-aos="flip-up" data-aos-delay={`${index === 0 ? 0 : index * 300}`}>
            <BlogCards
            index={index}
              desc={node?.desc}
              height="h-auto md:h-[186px] "
              width=" w-full md:w-[180px]"
              url={node?.url}
              date={node?.date}
            />
            </div>
          );
        })}

       
      </div>
    </div>
  );
};

export default BLogs;
