import Image from "next/image";

interface NFTCardProps {
  title: string;
  description: string;
  date: string;
  image: string;
}

export default function NFTCard({ title, description, date, image }: NFTCardProps) {
  return (
    <div className="flex flex-col items-center border border-white hover:border-primary rounded-2xl p-5 transition duration-300 ease-in-out">
      <Image src={image} alt={title} width={400} height={400} />
      <h1 className="text-2xl mt-5 text-black font-semibold">{title}</h1>
      <p className="text-lg mt-1 text-black opacity-60">{description}</p>
      <p className="text-lg font-bold mt-2 text-black opacity-60">{date}</p>
    </div>
  );
}
