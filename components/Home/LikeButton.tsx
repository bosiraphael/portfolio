import { useState } from "react";
import styles from "../../styles/MacBook.module.scss";

export default function LikeButton() {
  const [likeCount, setLikeCount] = useState(9999);

  return likeCount === 9999 ? (
    <button
      className={styles.heart__button}
      onClick={() => {
        setLikeCount(10000);
      }}
    >
      <div>Like</div>
    </button>
  ) : (
    <button
      className={styles.heart__button}
      onClick={() => {
        setLikeCount(9999);
      }}
    >
      <div>Unlike</div>
    </button>
  );
}
