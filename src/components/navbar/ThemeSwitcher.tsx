"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

type Props = {};

const ThemeSwitcher = (props: Props) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  if (!mounted) {
    return null;
  }

  useEffect(() => {
    setMounted(false);
  }, []);

  return <div>ThemeSwitcher</div>;
};

export default ThemeSwitcher;
