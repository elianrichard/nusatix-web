import { forwardRef } from "react";
import { type ClassValue } from "clsx";

import { cn } from "@/utils/ui";

interface MainLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  backgroundColor?: ClassValue;
  isAddTopPadding?: boolean;
  isOverflowHidden?: boolean;
  isDisableMaxWidth?: boolean;
  isDisableHorizontalPadding?: boolean;
  isDisableVerticalPadding?: boolean;
  isDisableBottomPadding?: boolean;
}

const MainLayout = forwardRef<HTMLDivElement, MainLayoutProps>(
  (
    {
      backgroundColor,
      isAddTopPadding,
      isOverflowHidden,
      isDisableMaxWidth,
      isDisableHorizontalPadding,
      isDisableVerticalPadding,
      isDisableBottomPadding,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "h-full w-full",
          backgroundColor,
          isAddTopPadding && "pt-24 md:pt-28",
          isOverflowHidden && "overflow-hidden",
          className,
        )}
        {...props}
      >
        <div
          className={cn(
            "flex h-full w-full justify-center",
            !isDisableHorizontalPadding && "px-6 lg:px-10",
            !isDisableVerticalPadding && "py-10 sm:py-14 md:py-20",
            isDisableBottomPadding && "pb-0!",
          )}
        >
          <div
            className={cn("w-full", !isDisableMaxWidth && "md:max-w-[90rem]")}
          >
            {props.children}
          </div>
        </div>
      </div>
    );
  },
);

MainLayout.displayName = "MainLayout";

export default MainLayout;
