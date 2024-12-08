"use client"

type ButtonProps = {
    href?: string;
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary";
};

export default function Button({ href, children, className, variant }: ButtonProps) {
    if (href) {
        return (
            <a href={href} className={`p-4 border relative border-black ${className} ${variant === "primary" ? 'bg-black text-white' : ''}`}>
                {variant === "primary" ? (
                    <span className="bg-red-500 absolute top-0 left-0 size-2"></span>
                ) : (
                    <span className="bg-black absolute top-0 left-0 size-2"></span>
                )}
                {children}
            </a>
        );
    }
    return (
        <button className="button">
            {children}
        </button>
    );
}