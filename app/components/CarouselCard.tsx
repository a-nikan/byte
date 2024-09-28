import Link from "next/link";

interface Props {
  title: string;
  address: string;
}

const CarouselCard = (props: Props) => {
  return (
    <Link href={props.address} className="emblaa__slide">
      <div className="flex font-semibold text-[15px] h-20 w-full bg-gray-50 text-center items-center justify-center hover:bg-gray-200">
        {props.title}
      </div>
    </Link>
  );
};

export default CarouselCard;
