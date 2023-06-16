import { HeaderProps } from "@/interfaces/widget";
import React from "react";

export function KeyVisual({ theme }: HeaderProps) {
  if (theme === "A") {
    return (
      <section id="w-02" className="h-[200px] border">
        KeyVisual A
      </section>
    );
  } else {
    return (
      <section id="w-02" className="h-[200px] border">
        KeyVisual B
      </section>
    );
  }
}

export function MissionVision({ theme }: HeaderProps) {
  if (theme === "A") {
    return (
      <section id="w-03" className="h-[200px] border">
        MissionVision A
      </section>
    );
  } else {
    return (
      <section id="w-03" className="h-[200px] border">
        MissionVision B
      </section>
    );
  }
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
