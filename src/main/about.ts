import { app } from "electron";
const about = {
  applicationName: app.getName(),
  applicationVersion: app.getVersion(),
  copyright: "Tushar S Agrawal",
  credits: "Tushar S Agrawal",
  authors: ["Tushar S Agrawal"],
  website: "mockbackdektop.tusharyaar.com",
};

app.setAboutPanelOptions(about);
