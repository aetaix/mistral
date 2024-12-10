import clsx from "clsx"; // Optional utility for class management

type ButtonProps = {
    href?: string;
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "outline"; // Extendable for additional styles
};

export function Button({ href, children, className, variant = "primary" }: ButtonProps) {
    const baseClasses = "py-2 px-4 text-center border font-semibold relative border-black border-l-4";
    const variantClasses = {
        primary: "bg-black text-white border-neutral-500",
        outline: "bg-white text-black border-black",
    };

    const combinedClasses = clsx(baseClasses, variantClasses[variant], className);

    if (href) {
        return (
            <a href={href} className={combinedClasses}>
                {children}
            </a>
        );
    }

    return (
        <button className={combinedClasses}>
            {children}
        </button>
    );
}
