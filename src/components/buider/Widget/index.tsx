import { HeaderProps } from "@/interfaces/widget";
import React from "react";

export function KeyVisual() {
  return (
    <section id="w-02" className="h-[200px] border">
      KeyVisual
    </section>
  );
}

export function MissionVision() {
  return (
    <section id="w-03" className="h-[200px] border">
      MissionVision
    </section>
  );
}

export function Header({ theme }: HeaderProps) {
  if (theme === "A") {
    return (
      <section id="w-01" className="h-[200px]">
        Header A
      </section>
    );
  } else {
    return (
      <section id="w-01" className="h-[200px]">
        Header B
      </section>
    );
  }
}

export function Footer({ theme }: HeaderProps) {
  if (theme === "A") {
    return (
      <section id="w-16" className="h-[200px]">
        Footer A
      </section>
    );
  } else {
    return (
      <section id="w-16" className="h-[200px]">
        Footer B
      </section>
    );
  }
}
