import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function ArrowList({ListItems}) {
  return (
    <>
      <ul className="space-y-5">
        {ListItems.map((items) => (
        <li className="flex items-center gap-x-2" key={items.index}>
          <MdKeyboardDoubleArrowRight className="text-blue-500 text-[1.2rem]" />
          {items}
        </li>
        ))}
      </ul>
    </>
  );
}
