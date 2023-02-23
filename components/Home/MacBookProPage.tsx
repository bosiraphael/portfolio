import Image from "next/image";
import LikeButton from "./LikeButton";

const MacBookProPage = () => {
  return (
    <div style={{ width: "100%", height: "100%", fontSize: "4px" }}>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "10%",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Image src="rb.svg" alt="Raphaël Bosi's logo" height={6} width={6} />
        <p>Hello</p>
        <p>World</p>
      </div>
      <div
        style={{
          width: "100%",
          height: "90%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "50%",
            height: "50%",
            background: "red",
          }}
        >
          <p>Like</p>
          <LikeButton />
        </div>
      </div>
    </div>
  );
};

export default MacBookProPage;
