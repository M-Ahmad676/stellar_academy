import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function ArrowList({ListItems}) {
  return (
    <>
      <ul className="space-y-5">
        {ListItems.map((items, index) => (
        <li className="flex items-center gap-x-2" key={index}>
          <MdKeyboardDoubleArrowRight className="text-orange-500 text-[1.2rem]" />
          {items}
        </li>
        ))}
      </ul>
    </>
  );
}
