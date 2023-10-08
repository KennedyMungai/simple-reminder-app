"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

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

  return <div>ThemeSwitcher</div>;
};

export default ThemeSwitcher;
