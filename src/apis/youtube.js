import axios from "axios";
const KEY = "AIzaSyCs0T6m2oXblFNPkxm9Ksf0r11pKpv2_JI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
