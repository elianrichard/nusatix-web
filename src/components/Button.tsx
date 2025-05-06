import { forwardRef } from "react";
import { cn } from "@/utils/ui";

type ButtonVariants = "primary" | "secondary";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariants;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", children, className, ...props }, ref) => {
    const buttonStyles = {
      primary: "bg-primary text-white hover:bg-primary-shadow",
      secondary:
        "bg-white text-primary border border-primary hover:bg-primary/10",
    } as Record<ButtonVariants, string>;

    return (
      <button
        ref={ref}
        {...props}
        className={cn(
          "shadow-primary-shadow cursor-pointer rounded-tl-sm rounded-tr-2xl rounded-br-sm rounded-bl-2xl px-7 py-4 font-serif text-xl shadow-[3px_3px] transition-colors duration-200 ease-out",
          buttonStyles[variant],
          className,
        )}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
export default Button;
