import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID VthJWmYcPen77BIj1uujuLwuzQyskocejXe99O6WEB0",
  },
});
