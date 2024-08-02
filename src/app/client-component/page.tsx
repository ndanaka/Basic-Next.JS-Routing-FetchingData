"use client";

import { useState } from "react";

export default function ClientComponent() {
  const [toggle, setToggle] = useState(false);

  return <h1>This is client component</h1>;
}
