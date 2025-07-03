"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

/**
 * Displays a styled progress bar that visually represents a percentage value.
 *
 * Renders a horizontal progress indicator whose fill corresponds to the provided `value` prop, using Radix UI primitives for accessibility and structure.
 *
 * @param value - The current progress percentage (0–100). If omitted or falsy, the indicator is empty.
 */
function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "relative h-3 w-full overflow-hidden rounded-full",
        // Modified
        "border bg-white",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-pink-400 h-full w-full flex-1 transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
