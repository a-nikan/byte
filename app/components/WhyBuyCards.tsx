import localFont from "next/font/local";
import Link from "next/link";

interface Props {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  fwBtn: string;
}
// Fonts

const SF = localFont({ src: "../fonts/SF.otf" });

const WhyBuyCards = (props: Props) => {
  return (
    <div className="flex flex-col gap-9 mx-auto break-words w-[25%]">
      <div className="rounded-full flex bg-neutral-100 w-36 h-36 relative">
        <props.Icon className="text-[4rem] text-black m-auto" />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className={`${SF.className} font-bold text-[18px]`}>
          {props.title}
        </h3>
        <p className={`${SF.className} text-[17px]`}>{props.description}</p>
        <Link href="#">
          <p
            className={`${SF.className} text-[16] font-bold text-[#1669FF] tracking-widest`}
          >
            {props.fwBtn}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default WhyBuyCards;
