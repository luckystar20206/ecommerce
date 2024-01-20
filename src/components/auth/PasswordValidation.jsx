import React, { useState } from "react";
import ChackRight from "./ChackRight";
import ChackClose from "./ChackClose";

const PasswordValidation = ({ chack }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">
        Password Must contain the following:{" "}
      </h2>
      <ul className="space-y-3">
        <li>
          <p
            className={
              chack.lowercase
                ? "text-green flex items-center gap-4"
                : "text-red flex items-center gap-4"
            }
          >
            {chack.lowercase ? <ChackRight /> : <ChackClose />}A Lowercase
            letter
          </p>
        </li>
        <li>
          <p
            className={
              chack.capital
                ? "text-green flex items-center gap-4"
                : "text-red flex items-center gap-4"
            }
          >
            {chack.capital ? <ChackRight /> : <ChackClose />}A capital
            (uppercase) letter
          </p>
        </li>
        <li>
          <p
            className={
              chack.number
                ? "text-green flex items-center gap-4"
                : "text-red flex items-center gap-4"
            }
          >
            {chack.number ? <ChackRight /> : <ChackClose />}At least one digit
            Number
          </p>
        </li>
        <li>
          <p
            className={
              chack.specialChar
                ? "text-green flex items-center gap-4"
                : "text-red flex items-center gap-4"
            }
          >
            {chack.specialChar ? <ChackRight /> : <ChackClose />}At least one
            special character
          </p>
        </li>
        <li>
          <p
            className={
              chack.passLength
                ? "text-green flex items-center gap-4"
                : "text-red flex items-center gap-4"
            }
          >
            {chack.passLength ? <ChackRight /> : <ChackClose />}Minimum Six in
            length
          </p>
        </li>
      </ul>
    </div>
  );
};

export default PasswordValidation;
