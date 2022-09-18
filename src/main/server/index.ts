import express from "express";
import http from "http";
import { sendServerStatusToRenderer } from "../../index";
import { menu } from "../menu";

const port = 8080;
let serverRunning = false;

const singleServer = express();
const httpServer = http.createServer(singleServer);

let runningHttpServer: http.Server;

export const startServer = async () => {
  if (serverRunning) return sendServerStatusToRenderer(serverRunning, false, port, " Server Already Running");
  try {
    runningHttpServer = httpServer.listen(port);
    handleServerOptions(true);
    sendServerStatusToRenderer(serverRunning, true, port, "");
  } catch (error) {
    sendServerStatusToRenderer(serverRunning, false, port, "Cannot start server");
  }
};

export const stopServer = async () => {
  if (!serverRunning) return sendServerStatusToRenderer(serverRunning, false, port, "No server Running");
  try {
    if (runningHttpServer !== null) runningHttpServer.close();
    handleServerOptions(false);
    sendServerStatusToRenderer(serverRunning, true, port, "");
  } catch (error) {
    sendServerStatusToRenderer(serverRunning, false, port, "Cannot stop server");
  }
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
    port,
  };
};

singleServer.get("*", (_, res) => {
  res.json({ hello: "world" });
});
