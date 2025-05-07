import Link from 'next/link';

interface WhiteButtonProps {
    caption: string;
    href: string;
}

export default function WhiteButton({ caption, href }: WhiteButtonProps) {
    return (
        <Link href={href}>
            <button className="bg-white font-serif text-lg md:text-xl text-primary py-2 md:py-4 px-7 md:px-14 rounded-bl-2xl rounded-tr-2xl rounded-tl-sm rounded-br-sm border border-primary shadow-[3px_3px_0px_0px_#662020]">
                {caption}
            </button>
        </Link>
    );
}
