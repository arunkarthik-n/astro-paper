export const SITE = {
  website: "https://arunkarthik.com/", // replace this with your deployed domain
  author: "Arun Karthik",
  profile: "https://www.linkedin.com/in/arun-karthik-n/",
  desc: "Building innovative solutions from AI foundations to web frontiers.",
  title: "Arun Karthik",
  ogImage: "arundp.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/arunkarthik-n/akblog/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Bangkok", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
