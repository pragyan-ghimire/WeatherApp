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
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=${units}`
    );
    const data = response.data;

    res.render("index.ejs", {
      data: data,
    });
  } catch (error) {
    console.error(error.message);
  }
});
app.post("/", async (req,res)=>{
    try {
        
          const location = req.body.searchLocation;
          console.log(location);
          const resGeoApi = await axios.get(
            `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${api_key}`
          );
          const result = resGeoApi.data;
          lat = result[0].lat;
          lon = result[0].lon;
          console.log(lat + " "+lon);
       
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=${units}`
        );
        const data = response.data;
    
        res.render("index.ejs", {
          data: data,
        });
      } catch (error) {
        console.error(error.message);
      }
});
app.listen(port, () => {
  console.log(`Sever is running in port: ${port}`);
});
