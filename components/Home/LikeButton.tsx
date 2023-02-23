import { useState } from "react";
import styles from "../../styles/MacBook.module.scss";
import { toast } from "react-hot-toast";

export default function LikeButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      className={styles.heart__button}
      onClick={() => {
        toast("Thank you!", {
          duration: 1000,
          icon: "❤️",
        });
      }}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={10}
        viewBox="0 96 960 960"
        width={10}
        fill="#ffffff"
      >
        {hovered ? (
          <path d="m480 935-41-37q-106-97-175-167.5t-110-126Q113 549 96.5 504T80 413q0-90 60.5-150.5T290 202q57 0 105.5 27t84.5 78q42-54 89-79.5T670 202q89 0 149.5 60.5T880 413q0 46-16.5 91T806 604.5q-41 55.5-110 126T521 898l-41 37Z" />
        ) : (
          <path d="m480 935-41-37q-105.768-97.121-174.884-167.561Q195 660 154 604.5T96.5 504Q80 459 80 413q0-90.155 60.5-150.577Q201 202 290 202q57 0 105.5 27t84.5 78q42-54 89-79.5T670 202q89 0 149.5 60.423Q880 322.845 880 413q0 46-16.5 91T806 604.5Q765 660 695.884 730.439 626.768 800.879 521 898l-41 37Zm0-79q101.236-92.995 166.618-159.498Q712 630 750.5 580t54-89.135q15.5-39.136 15.5-77.72Q820 347 778 304.5T670.225 262q-51.524 0-95.375 31.5Q531 325 504 382h-49q-26-56-69.85-88-43.851-32-95.375-32Q224 262 182 304.5t-42 108.816Q140 452 155.5 491.5t54 90Q248 632 314 698t166 158Zm0-297Z" />
        )}
      </svg>
    </button>
  );
}
