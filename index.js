require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const passport = require('passport');
const path = require('path');

// my routes
const userRoutes = require("./routes/Users/user");
const homecardRoutes = require("./routes/HomePage/homecard");
const eventRoutes = require("./routes/HomePage/event");
const WorkshopRoutes = require("./routes/HomePage/workshop");
const contributorRoutes = require("./routes/HomePage/contributor");
const artworkRoutes = require("./routes/ArtGallery/artwork");
const formRoutes = require("./routes/Form/form");
const allieRoutes = require(`./routes/Allies/AlliesRoutes`);
const workshopRoutes = require(`./routes/Workshop/WorkshopRoutes`);
const sponsorRoutes = require(`./routes/Sponsors/SponsorsRoutes`);
const mediaPartnersRoutes = require(`./routes/MediaPartners/MediaPartnersRoutes`);
const eventsRoutes = require(`./routes/Events/EventsRoutes`);

const fileUpload = require(`express-fileupload`);

const cloudinary = require(`cloudinary`).v2;
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

// DB Connection
mongoose.set("strictQuery", true);

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
};

const app = express();
app.use(fileUpload({useTempFiles: true}));
app.use(cors());

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
mongoose.Promise = global.Promise;
app.use(passport.initialize());

// My Routes
app.use("/user", userRoutes);
app.use("/api", contributorRoutes);
app.use("/api", homecardRoutes);
app.use("/api", eventRoutes);
app.use("/api", WorkshopRoutes);
app.use("/api", artworkRoutes);
app.use("/api", formRoutes);
app.use('/api', allieRoutes);
app.use('/api/workshops', workshopRoutes);
app.use(`/api/sponsors`, sponsorRoutes);
app.use(`/api/mediaPartners`, mediaPartnersRoutes);
app.use(`/api/events`, eventsRoutes);

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 8000;

const start = async () => {
  try {
    await connectDB(process.env.DATABASE);
    console.log("Connection established");
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
