import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
  headers: {
    "x-api-key":
      "live_8LYq7cy6fwEXEWVDu4vTcaXaH0PvEPJVIJxMu5OaDXwDINsxYjtXKI5V35ZRzZY8",
  },
});

export default apiClient;
