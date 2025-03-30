import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function ArrowList({ListItems}) {
  return (
    <>
      <ul className="space-y-5">
        {ListItems.map((items, index) => (
        <li className="flex items-center gap-x-2" key={index}>
          <span className="basis-[2%]">
          <MdKeyboardDoubleArrowRight className="text-orange-500 text-[1.2rem] " />
          </span>
          <span className="basis-[97%]">{items}</span>
        </li>
        ))}
      </ul>
    </>
  );
}
