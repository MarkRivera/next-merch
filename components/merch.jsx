import Image from "next/image";
import styles from "../components/css/merch.module.css";

// Images
import BackgroundImage from "../public/images/bg-image.webp";

export default function Merch() {
  return (
    <main>
      <div className={styles.bgWrap}>
        <Image
          src={BackgroundImage}
          alt="Mike's background image"
          placeholder="blur"
          layout="fill"
          objectFit="cover"
          quality={100}
          className={styles.bgImage}
        />
      </div>
    </main>
  );
}
