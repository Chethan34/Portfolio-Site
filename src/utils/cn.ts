// src/utils/cn.ts
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }