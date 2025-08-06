export const config = {
  name: "Noblocks",
  description: "Decentralized publishing with Noblocks",
  website: "https://noblocks-techieconso.vercel.app",
  image: "https://noblocks-techieconso.vercel.app/preview.png",
  buttons: [{ label: "View Feed" }, { label: "Submit Post" }],
  postUrl: "https://noblocks-techieconso.vercel.app/api/frames",
};
export const frame = {
  config,
  title: "Noblocks",
  description: "Decentralized publishing with Noblocks",
  image: "https://noblocks-techieconso.vercel.app/preview.png",
  website: "https://noblocks-techieconso.vercel.app",
  buttons: [{ label: "View Feed" }, { label: "Submit Post" }],
  postUrl: "https://noblocks-techieconso.vercel.app/api/frames",
};
export const frameConfig = {
  ...frame,
  name: "Noblocks",
  description: "Decentralized publishing with Noblocks",
  website: "https://noblocks-techieconso.vercel.app",
  image: "https://noblocks-techieconso.vercel.app/preview.png",
  buttons: [{ label: "View Feed" }, { label: "Submit Post" }],
  postUrl: "https://noblocks-techieconso.vercel.app/api/frames",
};
export const frameConfigWithButtons = {
  ...frameConfig,
  buttons: [
    { label: "View Feed", url: "https://noblocks-techieconso.vercel.app/feed" },
    {
      label: "Submit Post",
      url: "https://noblocks-techieconso.vercel.app/submit",
    },
  ],
};
export const frameConfigWithPostUrl = {
  ...frameConfig,
  postUrl: "https://noblocks-techieconso.vercel.app/api/frames",
};
export const frameConfigWithWebsite = {
  ...frameConfig,
  website: "https://noblocks-techieconso.vercel.app",
};
export const frameConfigWithImage = {
  ...frameConfig,
  image: "https://noblocks-techieconso.vercel.app/preview.png",
};
export const frameConfigWithTitle = {
  ...frameConfig,
  title: "Noblocks",
};
export const frameConfigWithDescription = {
  ...frameConfig,
  description: "Decentralized publishing with Noblocks",
};

export const frameConfigWithAll = {
  ...frameConfig,
  title: "Noblocks",
  description: "Decentralized publishing with Noblocks",
  website: "https://noblocks-techieconso.vercel.app",
  image: "https://noblocks-techieconso.vercel.app/preview.png",
  buttons: [
    { label: "View Feed", url: "https://noblocks-techieconso.vercel.app/feed" },
    {
      label: "Submit Post",
      url: "https://noblocks-techieconso.vercel.app/submit",
    },
  ],
  postUrl: "https://noblocks-techieconso.vercel.app/api/frames",
};
// export const frameConfigWithCustomButtons = (buttons) => ({
//   ...frameConfig,
//   buttons: buttons || [
//     { label: "View Feed", url: "https://noblocks-techieconso.vercel.app/feed" },
//     {
//       label: "Submit Post",
//       url: "https://noblocks-techieconso.vercel.app/submit",
//     },
//   ],
// });
