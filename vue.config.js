module.exports = {
  lintOnSave: process.env.NODE_ENV !== "production",
  pwa: {
    name: "Ayelen Guerra"
  },
  publicPath: process.env.NODE_ENV === "production" ? "/about-me-website/" : "/"
};
