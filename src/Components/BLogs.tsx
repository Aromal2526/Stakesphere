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
    <div className="flex flex-col items-center mt-12 font-grotesk gap-3">
      <p className="font-medium text-4xl">Blogs</p>
      <div className="grid grid-cols-2 grid-rows-4 xl:gap-[20%] gap-4 ">
      <p className="font-medium text-4xl mt-[15%] xl:mt-[10%]">Latest</p>

      <div className="flex items-center gap-[10%] col-span-2 row-span-2">
        <img src={Blogs} className="h-[285px] w-[452px]" />
        <div className="flex-col flex gap-1 justify-center lg:h-[285px] lg:w-[550px] h-fit w-fit  font-grotesk">
          <p className="font-bold lg:text-4xl text-xl">Ethereum Multisig Staking Now Available on stakesphere</p>
          <p className="font-normal lg:text-xl text-base">
            stakesphere is excited to announce the support of Ethereum Multisig
            Staking via Safe (formerly known as Gnosis Safe). Always at the
            forefront of blockchain innovation, stakefish remains dedicated to
            offering a secure and effective staking experience for all users.
          </p>
          <p className="font-normal text-sm ">STAKESPHERE JUL 4, 2023</p>
        </div>
      </div>
        {blogContent?.map((node: content) => {
          return (
            <BlogCards
              desc={node?.desc}
              height="h-[186px] "
              width=" w-[180px]"
              url={node?.url}
              date={node?.date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BLogs;
