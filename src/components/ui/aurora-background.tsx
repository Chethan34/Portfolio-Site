import { cn } from "@/utils/cn";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className = "",
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col h-[100vh] items-center justify-center bg-black text-white transition-bg",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `
            bg-[linear-gradient(to_right,#4f4f4f,#000000)]
            animate-aurora
            pointer-events-none
            absolute -inset-[10px] opacity-50`,
              showRadialGradient ? `mask-[radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]` : '' // Use ternary operator to ensure a string type
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
