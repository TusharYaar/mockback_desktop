// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("systemUsageAPI", {
  getUsage: () => ipcRenderer.invoke("get-usage"),
});

contextBridge.exposeInMainWorld("serverAPI", {
  startServer: () => ipcRenderer.send("server:start-server"),
  stopServer: () => ipcRenderer.send("server:stop-server"),
  onUpdateServer: (callback: (_event: any, value: any) => void) => ipcRenderer.on("server:update-server", callback),
  getServerStatus: () => ipcRenderer.invoke("server:get-server-status"),
});
