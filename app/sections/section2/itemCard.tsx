import Image from "next/image";
import React from "react";

import chips_path from "@/public/chips.jpg";

function itemCard() {
  return (
    <div className="flex flex-col border-4 border-black rounded-md h-80 w-80">
      <Image src={chips_path} alt="Product Picture" className="w-80 h-60" />
      <h2>Чип</h2>
    </div>
  );
}

export default itemCard;
