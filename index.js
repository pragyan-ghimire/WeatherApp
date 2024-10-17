import express, { response } from "express";
import bodyParser from "body-parser";
import path from "path";
import { API_KEY } from "./config.js";
import axios from "axios";

const app = express();
const port = 3000;
const __dirname = path.resolve();

app.use(
  "/jquery",
  express.static(path.join(__dirname, "node_modules/jquery/dist"))
);
app.use(express.static(path.join(__dirname, "public"))); // Assuming 'public' is your folder for static files

// app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const api_key = API_KEY;
let lat = 27.708317;
let lon = 85.3205817;
let units = "metric";

app.get("/", async (req, res) => {
  try {
    //current weather data
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=${units}`
    );
    const data = response.data;
    // console.log(response);
    //forecast weather data
    const nresponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}&units=${units}`
    );
    const ndata = nresponse.data;

    res.render("index.ejs", {
        data: data,
        ndata: ndata,
        unit: units,
      });
  } catch (error) {
    console.error(error.message);
  }
});
app.post("/", async (req, res) => {
  try {
    const location = req.body.searchLocation;
    // console.log(location);
    const resGeoApi = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${api_key}`
    );
    const result = resGeoApi.data;
    lat = result[0].lat;
    lon = result[0].lon;
    // console.log(lat + " " + lon);

    //current weather data
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=${units}`
    );
    const data = response.data;

    //forecast weather data
    const nresponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}&units=${units}`
      );
      const ndata = nresponse.data;
  
      res.render("index.ejs", {
          data: data,
          ndata: ndata,
          unit: units,
        });
  } catch (error) {
    console.error(error.message);
  }
});
app.get("/metric",(req,res)=>{
    units = "metric";
    res.redirect("/");
});
app.get("/imperial",(req,res)=>{
    units = "imperial";
    res.redirect("/");
});
app.listen(port, () => {
  console.log(`Sever is running in port: ${port}`);
});
