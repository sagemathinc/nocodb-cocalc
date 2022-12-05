(async () => {
  try {
    const PORT = process.env.PORT || 8080;
    const baseUrl = `/${process.env.COCALC_PROJECT_ID}/port/${PORT}`;
    const app = require("express")();
    const { Noco } = require("nocodb");
    const httpServer = app.listen(PORT);
    app.use(baseUrl, await Noco.init({}, httpServer, app));
    console.log(`Visit : https://cocalc.com${baseUrl}/dashboard`);
  } catch (e) {
    console.log(e);
  }
})();
