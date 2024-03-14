const app = require("./app");

const PORT = 2000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`listening to ${PORT}`);
});
