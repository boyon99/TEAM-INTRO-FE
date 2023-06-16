import { HeaderProps } from "@/interfaces/widget";
import React from "react";

export function KeyVisual() {
  return <div className="h-[200px] border">KeyVisual</div>;
}

export function MissionVision() {
  return <div className="h-[200px] border">MissionVision</div>;
}

export function Header({ theme }: HeaderProps) {
  if (theme === "A") {
    return <div className="h-[200px]">Header A</div>;
  } else {
    return <div className="h-[200px]">Header B</div>;
  }
}

export function Footer({ theme }: HeaderProps) {
  if (theme === "A") {
    return <div className="h-[200px]">Footer A</div>;
  } else {
    return <div className="h-[200px]">Footer B</div>;
  }
}
