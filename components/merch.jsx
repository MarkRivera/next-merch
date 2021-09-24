// React
import { useState, useEffect } from "react";

// Next JS
import Head from "next/head";
import Link from "next/link";

import Image from "next/image";
import styles from "../components/css/merch.module.css";

// Images
import BackgroundImage from "../public/images/bg-image.webp";
import TitleImage from "../public/images/bg-text.webp";

// Icons
import { SocialIcon } from "react-social-icons";

// Axios
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// Data

import { data } from "../db/data/database";

const mockAdapter = new MockAdapter(axios);

// Grab Socials Data when GET request is sent
mockAdapter.onGet("/socials").reply(200, data.generalData.socials);
mockAdapter.onGet("/get-artist-name").reply(200, data.artistData.name);
mockAdapter.onGet("/get-out-now").reply(200, data.artistData.outNow);

export default function Merch() {
  const [socialData, setSocialData] = useState([]);
  const [artistName, setArtistName] = useState("");
  const [outNow, setOutNow] = useState("");

  useEffect(() => {
    axios.get("/socials").then(res => setSocialData(res.data));
    axios.get("/get-artist-name").then(res => setArtistName(res.data));
    axios.get("/get-out-now").then(res => setOutNow(res.data));
  }, []);

  return (
    <>
      <img
        src={BackgroundImage.src}
        alt="Polaroid of Merch burning away"
        className={styles.merchAlbumCover}
      />
      <div className={styles.bgImgForeground}></div>
      <div className={styles.merchBody}>
        <h1 className={styles.merchTitle}>{artistName}</h1>

        <nav className={styles.merchLinks}>
          <Link href="https://smarturl.it/thebeautifulbefore">
            1. The Beautiful Before
          </Link>
          <Link href="https://smarturl.it/somewhereinthemiddle">
            2. Somewhere in the Middle
          </Link>

          <Link href="/tour/">Tour</Link>
          <Link href="/shop/">Shop</Link>
          <Link href="/latest/">Latest</Link>
          <Link href="/booking/">Booking</Link>
          <Link href="/">Back</Link>
        </nav>

        <h2 className={styles.merchOutNow}>
          {outNow.split(" ").map(word => {
            return (
              <>
                {word}
                <br />
              </>
            );
          })}
          [Out Now]
        </h2>

        <footer className={styles.merchSocials}>
          {socialData.length
            ? socialData.map(element => {
                return (
                  <SocialIcon
                    url={element.url}
                    key={`${element.name}`}
                    bgColor={`#fff`}
                    className={styles.merchSocialIcons}
                  />
                );
              })
            : null}
        </footer>
      </div>
    </>
  );
}
