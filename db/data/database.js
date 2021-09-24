// Images Import

// Artist Data

const data = {
  generalData: {
    firstName: "Mike",
    lastName: "Merchant",
    city: "Los Angeles",
    state: "California",
    email: "mikexmerchant@gmail.com",
    socials: [
      {
        name: "Twitter",
        url: "https://twitter.com/mikexmerchant",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/us/artist/merch/1304437116",
      },
      {
        name: "Spotify",
        url: "https://open.spotify.com/artist/1Ap1ybJJXfSHNW3hh5Bjxb",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/MikexMerchant/",
      },
      {
        name: "SoundCloud",
        url: "https://soundcloud.com/mikexmerchant",
      },
      {
        name: "Youtube",
        url: "https://www.youtube.com/user/MikeMerchantMusic",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/mikexmerchant/",
      },
    ],
  },

  actingData: {
    name: "Mike",
    metaData: {
      siteDescription: "A site for the actor Mike Merchant",
      thumbNailUrl: "/",
      // og:site
      // Twitter cards
    },
  },

  artistData: {
    name: "Merch",
    metaData: {
      siteDescription: "A site for the artist Mike Merchant",
      thumbNailUrl: "/",
      // og:site
      // Twitter cards
    },
    albums: {
      beautifulBefore: {
        title: "The Beautiful Before [Part 1]",
        tracks: [
          { title: "Intro", artist: "Merch", time: "0:11" },
          { title: "Fallin'", artist: "Merch", time: "4:16" },
          { title: "Be the Man", artist: "Merch", time: "3:26" },
          { title: "Nuerons", artist: "Merch", time: "1:57" },
          { title: "Interlude", artist: "Merch", time: "0:11" },
          { title: "Just a Few More Minutes", artist: "Merch", time: "3:27" },
          { title: "Jennifer", artist: "Merch", time: "5:00" },
          { title: "Winter", artist: "Merch", time: "1:08" },
          { title: "Free", artist: "Merch", time: "3:58" },
        ],
        get numberOfTracks() {
          return this.tracks.length;
        },
        cover: "",
      },

      somewhereInTheMiddle: {
        title: "Somewhere In The Middle [Part 2]",
        tracks: [
          { title: "Intro", artist: "Merch", time: "2:30" },
          { title: "Pt. 2 (Ameno)", artist: "Merch", time: "2:54" },
          { title: "Don't Do It", artist: "Merch", time: "2:31" },
          { title: "Incredible", artist: "Merch", time: "3:50" },
          {
            title: "Interlude (In the Morning)",
            artist: "Merch",
            time: "1:10",
          },
          { title: "Broken", artist: "Merch", time: "2:48" },
          {
            title: "Broken Lullaby (Just in Case)",
            artist: "Merch",
            time: "2:02",
          },
          { title: "Word of Mouth", artist: "Merch", time: "3:32" },
          { title: "You Did It", artist: "Merch", time: "2:48" },
        ],
        get numberOfTracks() {
          return this.tracks.length;
        },
        cover: "",
      },
    },

    tours: {},

    latest: {},

    outNow: "Somewhere In The Middle",
  },
};

export { data };
