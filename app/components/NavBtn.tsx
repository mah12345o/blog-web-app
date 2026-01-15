import Link from "next/link";
import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

interface NavBtnProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  title: string;
  isPrevBtn?: boolean;
}

export const NavBtn: React.FC<NavBtnProps> = ({
  onClick,
  title,
  isPrevBtn,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "8px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <p
        style={{
          fontSize: "14px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          border: "1px solid #05091C",
          borderRadius: "2px",
          color: "#05091C",
          padding: "8px 16px",
        }}
      >
        {isPrevBtn && (
          <IoArrowForwardCircleOutline
            style={{ transform: "rotate(180deg)" }}
          />
        )}
        {title}
        {!isPrevBtn && <IoArrowForwardCircleOutline />}
      </p>
    </div>
  );
};
