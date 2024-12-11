import clsx from "clsx"; // Optional utility for class management

type ButtonProps = {
    href?: string;
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "outline"; // Extendable for additional styles
};

export function Button({ href, children, className, variant = "primary" }: ButtonProps) {
    const baseClasses = "group py-2 px-4 text-center border font-semibold relative";
    const variantClasses = {
        primary: "bg-black text-white border-neutral-200 hover:text-black",
        outline: "bg-white text-black border-black hover:text-white",
    };

    const baseLineClasses = "absolute h-full top-0 left-0 w-1 group-hover:w-full transition-all";
    const lineClasses = {
        primary: "bg-white border border-black",
        outline: "bg-black",
    }

    const combinedClasses = clsx(baseClasses, variantClasses[variant], className);
    const combinedLineClasses = clsx(baseLineClasses, lineClasses[variant]);

    if (href) {
        return (
            <a href={href} className={combinedClasses}>
                <div className={combinedLineClasses}></div>
                <span className="relative"> {children}</span>
            </a>
        );
    }

    return (
        <button className={combinedClasses}>
            <div className={combinedLineClasses}></div>
            <span className="relative"> {children}</span>
        </button>
    );
}
