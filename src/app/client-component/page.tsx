"use client";

import { useState } from "react";

const ClientComponent = () => {
  const [toggle, setToggle] = useState(false);

  return <h1>This is client component</h1>;
}

export default ClientComponent;