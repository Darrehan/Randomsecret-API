import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";
const yourBearerToken = "a6807ba8-0437-4c13-b688-baaead0efb58";
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for server data buddy 😒" });
});
app.post("/get-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    // the syntax of get is url and config
    const result = await axios.get(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});
app.post("/post-secret", async (req, res) => {
  try {
    // the syntax of the post is url ,body and config
    const result = await axios.post(API_URL + "/secrets", req.body, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});
app.post("/put-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    // the syntax of the put is url ,body and config
    const result = await axios.put(
      API_URL + "/secrets/" + searchId,
      req.body,
      config
    );
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});
app.post("/patch-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    // the syntax of the patch is url ,body and config
    const result = await axios.patch(
      API_URL + "/secrets/" + searchId,
      req.body,
      config
    );
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/delete-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    // the syntax of delete is url and config
    const result = await axios.delete(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
