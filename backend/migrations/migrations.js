export async function up(db) {
  await db.collection('users').insertOne({
    id: 0,
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'hashed_password',
    favoriteMusic: {},
  });
  await db.collection('authors-lists').insertOne({
    authorsList: [
      { name: "Coolio", img: "https://i.scdn.co/image/ab6761610000e5eb5ea53fc78df8f7e7559e228d" },
      { name: "The Notorious B.I.G.", img: "https://i.scdn.co/image/e56612ae56c9007e99ab36b83efd4faf6401260d" },
      { name: "Eminem", img: "https://i.scdn.co/image/ab67616100005174a00b11c129b27a88fc72f36b" },
      { name: "Ice Cube", img: "https://i.scdn.co/image/ab67616d00001e02994c319841a923465d62e271" },
      { name: "Westside Connection", img: "https://i.scdn.co/image/ab67616d00001e0255b96f6473372230c80847a1" },
      { name: "Dr. Dre", img: "https://i.scdn.co/image/dd4a7102c5e1897bab2b1fa4bbc086fbe2fc87dc" },
      { name: "Snoop Dogg", img: "https://i.scdn.co/image/ab676161000051749a398209a4ef3360dce2dec4" },
      { name: "2Pac", img: "https://i.scdn.co/image/ab676161000051747f5cc432c9c109248ebec1ac" }
    ]
  });
  await db.collection('music-lists').insertOne({
    musicList: [
      {
        "id": 0,
        "name": "Straight Outta Compton",
        "artist": "N.W.A",
        "year": 1988,
        "img": "https://i.ytimg.com/vi/kIJeJK0iZDE/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBvgeAAtAFigIMCAAQARhRIE4oZTAP&rs=AOn4CLCET7ESWADOfF7HZI9e68FmBloow"
      },
      {
        "id": 1,
        "name": "Gin and Juice",
        "artist": "Snoop Dogg",
        "year": 1994,
        "img": "https://i.ytimg.com/vi/zowYObdYejQ/hq2.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBIDDySsyjQl7iUTlWMoGVMI_xCBg"
      },
      {
        "id": 2,
        "name": "Lose Yourself",
        "artist": "Eminem",
        "year": 2002,
        "img": "https://i.ytimg.com/vi/_Yhyp-_hX2s/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARg-IGUoSTAP&rs=AOn4CLADm4RkVfS9TTp5FbHmXjlmdzparg"
      },
      {
        "id": 3,
        "name": "Still D.R.E.",
        "artist": "Dr. Dre ft. Snoop Dogg",
        "year": 1999,
        "img": "https://i.ytimg.com/vi/_CL6n0FJZpk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD8BTYCOogNQ7YHhuMonMe3Nv1C5Q"
      },
      {
        "id": 4,
        "name": "It Was a Good Day",
        "artist": "Ice Cube",
        "year": 1992,
        "img": "https://i.ytimg.com/vi/7reiN0f-Zkk/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBvgeAAtAFigIMCAAQARhyIEooPDAP&rs=AOn4CLDuzMlkTeVKMqPf4RGaM6hxKpdFjw"
      },
      {
        "id": 5,
        "name": "California Love",
        "artist": "2Pac ft. Dr. Dre",
        "year": 1995,
        "img": "https://i.ytimg.com/vi/omfz62qu_Bc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCN-TUUuFT8ah6Mrk4KybGvrZcHTA"
      },
      {
        "id": 6,
        "name": "Forgot About Dre",
        "artist": "Dr. Dre ft. Eminem",
        "year": 2000,
        "img": "https://i.ytimg.com/vi/QFcv5Ma8u8k/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDibdG57PxomzTZpSqBJHb75EQ8Eg"
      },
      {
        "id": 7,
        "name": "The Real Slim Shady",
        "artist": "Eminem",
        "year": 2000,
        "img": "https://i.ytimg.com/vi/Rh8GcYKNcfo/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDBf1dPPA_LLPGuco1hHg4pIeBH3w"
      },
      {
        "id": 8,
        "name": "Gangsta's Paradise",
        "artist": "Coolio ft. L.V.",
        "year": 1995,
        "img": "https://i.ytimg.com/vi/M6eq7rfOsi4/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIF4oLzAP&rs=AOn4CLAxfzdVhqrt6tys3cH-HLycHQ4pfw"
      },
      {
        "id": 9,
        "name": "Nuthin' but a 'G' Thang",
        "artist": "Dr. Dre ft. Snoop Dogg",
        "year": 1992,
        "img": "https://i.ytimg.com/vi/oQgI0cwpEcI/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGQoRzAP&rs=AOn4CLDKah9-TB5BlHHhmtv2KFlHdSmBBQ"
      },
      {
        "id": 10,
        "name": "Stan",
        "artist": "Eminem ft. Dido",
        "year": 2000,
        "img": "https://i.ytimg.com/vi/gOMhN-hfMtY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAXvmurDlAmKa4VJ-acocR7moEqQg"
      },
      {
        "id": 11,
        "name": "You Can Do It",
        "artist": "Ice Cube ft. Mack 10 & Ms. Toi",
        "year": 1999,
        "img": "https://i.ytimg.com/vi/6auk1TkGtVQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCmjgeopJVp5Utb9XDezBc-pPjACA"
      },
      {
        "id": 12,
        "name": "Without Me",
        "artist": "Eminem",
        "year": 2002,
        "img": "https://i.ytimg.com/vi/YVkUvmDQ3HY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDpAi5UK8QZEEeCGdi2cVSFNTd-ZA"
      },
      {
        "id": 13,
        "name": "The Next Episode",
        "artist": "Dr. Dre ft. Snoop Dogg",
        "year": 2000,
        "img": "https://i.ytimg.com/vi/A8V0-gLxeB0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDMSfgY3BuT_yS6-WEk_U4_-L1yOA"
      },
      {
        "id": 14,
        "name": "Check Yo Self",
        "artist": "Ice Cube",
        "year": 1993,
        "img": "https://i.ytimg.com/vi/bueFTrwHFEs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5a10p9avH7u4N-rh5q3SQQ6R0Fg"
      },
      {
        "id": 15,
        "name": "Mockingbird",
        "artist": "Eminem",
        "year": 2005,
        "img": "https://i.ytimg.com/vi/S9bCLPwzSC0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBeh30n-B6NTooooEj5dDoB8NBc6w"
      },
      {
        "id": 16,
        "name": "Bow Down",
        "artist": "Westside Connection",
        "year": 1996,
        "img": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Westside_Connection_-_Bow_Down_%28Front%29.jpg/220px-Westside_Connection_-_Bow_Down_%28Front%29.jpg"
      },
      {
        "id": 17,
        "name": "Big Poppa",
        "artist": "The Notorious B.I.G.",
        "year": 1994,
        "img": "https://i.ytimg.com/vi/phaJXp_zMYM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAllEzK1uydUYuDBymvWSke-NJNyw"
      },
      {
        "id": 18,
        "name": "Juicy",
        "artist": "The Notorious B.I.G.",
        "year": 1994,
        "img": "https://i.ytimg.com/vi/_JZom_gVfuw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLANPDKUcQuiClgSslcg_6nidLU6Sg"
      },
      {
        "id": 19,
        "name": "Mo Money Mo Problems",
        "artist": "The Notorious B.I.G. ft. Puff Daddy & Mase",
        "year": 1997,
        "img": "https://i.ytimg.com/vi/ss142Aix2Bo/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIFIoRDAP&rs=AOn4CLA7Do9TTmsReGw2jCIMUUrruC5gEQ"
      }
    ]
  });
}
export async function down(db) {
  await db.collection('user').deleteOne({ id: 1 });
}