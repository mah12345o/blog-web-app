
import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

interface NavBtnProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  title: string;
  isPrevBtn?: boolean;
}

export const NavBtn= ({
  onClick,
  title,
  isPrevBtn,
}:NavBtnProps ) => {
  return (
    <div className="nav-btn-wrapper" onClick={onClick}>
      <p className="nav-btn-text">
        {isPrevBtn && (
          <IoArrowForwardCircleOutline className="nav-btn-icon-rotated" />
        )}
        {title}
        {!isPrevBtn && <IoArrowForwardCircleOutline />}
      </p>
    </div>
  );
};
