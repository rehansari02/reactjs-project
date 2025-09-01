import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";

function ExportButton() {
  return (
    <div className="pdfbutoon flex justify-end">
      <button className="cursor-pointer flex gap-2 items-center text-md font-bold text-white bg-[#5F00D9] px-4 py-2 rounded-xl">
        <MdOutlineFileDownload className="text-xl" /> Export CSV
      </button>
    </div>
  );
}

export default ExportButton;
