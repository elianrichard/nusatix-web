import { forwardRef } from "react";

const TwitterLogo = forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      ref={ref}
      {...props}
    >
      <path
        d="M3.15625 4L12.6172 17.5208L3.65365 28H7.17448L14.1927 19.7734L19.9479 28H29.1615L19.2656 13.8333L27.6536 4H24.1875L17.6953 11.5833L12.3984 4H3.15625ZM8.27604 6.66667H11.0078L24.0443 25.3333H21.3359L8.27604 6.66667Z"
        fill="white"
      />
    </svg>
  );
});

TwitterLogo.displayName = "TwitterLogo";

export default TwitterLogo;
