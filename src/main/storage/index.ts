import { app } from "electron";
import fs from "fs";
import path from "path";
import AppSettings from "./AppSettings";

let APP_SETTINGS = new AppSettings();
const APP_SETTINGS_FOLDER_NAME = "Mockback Desktop";
const APP_SETTINGS_FOLDER_PATH = path.join(app.getPath("appData"), APP_SETTINGS_FOLDER_NAME);

const APP_SETTINGS_FILE_NAME = "settings.json";
const APP_SETTINGS_FILE_PATH = path.join(APP_SETTINGS_FOLDER_PATH, APP_SETTINGS_FILE_NAME);

export const updateAppSettings = async (settings?: AppSettings) => {
  const modified = new Date();
  if (settings) {
    APP_SETTINGS.modified = modified;
    fs.writeFileSync(APP_SETTINGS_FILE_PATH, JSON.stringify({ ...settings, modified }, null, 4));
  } else {
    fs.writeFileSync(APP_SETTINGS_FILE_PATH, JSON.stringify(APP_SETTINGS, null, 4));
  }
};

export const getAppSettings = (readFromFile = false) => {
  if (!readFromFile) return APP_SETTINGS;
  const folderExist = fs.existsSync(APP_SETTINGS_FOLDER_PATH);
  const settingsExist = fs.existsSync(APP_SETTINGS_FILE_PATH);
  let settings: AppSettings;
  if (!folderExist) {
    fs.mkdirSync(APP_SETTINGS_FOLDER_PATH);
  }
  if (settingsExist) {
    const buffer = fs.readFileSync(APP_SETTINGS_FILE_PATH, "utf-8");
    settings = JSON.parse(buffer.toString()) as AppSettings;
  } else {
    settings = new AppSettings();
    updateAppSettings();
  }
  APP_SETTINGS = settings;
};

getAppSettings(true);
