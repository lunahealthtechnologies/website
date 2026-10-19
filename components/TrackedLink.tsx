"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { track } from "@/lib/site";

type Props = ComponentProps<typeof Link> & { event?: string; props: Record<string, unknown> };

export default function TrackedLink({ event = "cta_click", props, onClick, ...rest }: Props) {
  return (
    <Link
      {...rest}
      onClick={(e) => {
        track(event, props);
        onClick?.(e);
      }}
    />
  );
}
