"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";

type Props = {};

const ThemeSwitcher = (props: Props) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(false);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Tabs defaultValue={theme}>
      <TabsList className="border border-neutral-800 dark:bg-[#030303]">
        <TabsTrigger value="light">
          <SunIcon className="h-[1.2rem] w-[1.2rem]" />
        </TabsTrigger>
        <TabsTrigger value="dark">
          <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-90 transition-all dark:rotate-0" />
        </TabsTrigger>
        <TabsTrigger value="system">
          <DesktopIcon className="h-[1.2rem] w-[1.2rem]" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default ThemeSwitcher;
