import Link from 'next/link';

interface RedButtonProps {
    caption: string;
    href: string;
}

export default function RedButton({ caption, href }: RedButtonProps) {
    return (
        <Link href={href}>
            <button className="bg-primary font-serif text-lg md:text-xl text-white py-2 md:py-4 px-7 md:px-14 rounded-bl-2xl rounded-tr-2xl rounded-tl-sm rounded-br-sm border border-primary shadow-[3px_3px_0px_0px_#662020]">
                {caption}
            </button>
        </Link>
    );
}
