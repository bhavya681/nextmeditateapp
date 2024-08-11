"use client";
// By Default - "use server" For DOM manipulation, UI manipulation, and React hooks use "use client"
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu"; // Removed ProductItem as it's not used
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <div
        className={cn(
          "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 my-5",
          className
        )}
      >
        <Menu setActive={setActive}>
          <Link href={"/"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Home"
            ></MenuItem>
          </Link>

          <MenuItem setActive={setActive} active={active} item="Courses">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/courses">All Courses</HoveredLink>
              <HoveredLink href="/mindfulness">Mindfulness Basics</HoveredLink>
              <HoveredLink href="/deep-meditation">Deep Meditation Techniques</HoveredLink>
              <HoveredLink href="/yoga">Yoga for Relaxation</HoveredLink>
              <HoveredLink href="/stress-relief">Stress Relief Practices</HoveredLink>
            </div>
          </MenuItem>

          <Link href={"/contact"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Contact Us"
            ></MenuItem>
          </Link>
        </Menu>
      </div>

      <style jsx>{`
        .menu {
          transition: all 0.3s ease-in-out;
        }
        .menu-item:hover {
          transform: scale(1.05);
          transition: transform 0.2s ease-in-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;
