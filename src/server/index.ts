import express from "express";
import http from "http";
import { menu } from "../menu";

const expressApp = express();
let runningHttpServer: http.Server;

const httpServer = http.createServer(expressApp);

let serverRunning = false;

export const startServer = () => {
  if (serverRunning) return;
  runningHttpServer = httpServer.listen(8080);
  handleServerOptions(true);
};

export const stopServer = () => {
  if (!serverRunning) return;
  if (runningHttpServer !== null) runningHttpServer.close();
  handleServerOptions(false);
};

export const handleServerOptions = (running: boolean) => {
  const startServerMenu = menu.getMenuItemById("start-server");
  const stopServerMenu = menu.getMenuItemById("stop-server");

  serverRunning = running;
  startServerMenu.enabled = !running;
  stopServerMenu.enabled = running;
};

export const getServerStatus = () => {
  return {
    running: serverRunning,
    port: 8080,
  };
};

expressApp.get("*", (_, res) => {
  res.json({ hello: "world" });
});
