import React from "react";

export default function cardDataService() {
  let url = "http://localhost:4444/data";
  return fetch(url).then((data) => data.json());
}
