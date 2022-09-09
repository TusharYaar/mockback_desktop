import { Menu, app } from "electron";

const relaunchApp = () => {
  app.relaunch();
  app.quit();
};

const template: Electron.MenuItemConstructorOptions[] = [
  {
    label: app.name,
    submenu: [
      { role: "about" as const },
      { type: "separator" as const },
      {
        label: "Relaunch",
        click: relaunchApp,
      },
    ],
  },
  ...(app.isPackaged
    ? []
    : [
        {
          label: "Dev",
          submenu: [
            {
              role: "reload" as const,
            },
            {
              role: "forceReload" as const,
            },
            {
              role: "toggleDevTools" as const,
            },
          ],
        },
      ]),
  {
    label: "View",
    submenu: [
      {
        role: "togglefullscreen" as const,
      },
      {
        role: "resetZoom" as const,
      },
      {
        role: "zoomIn" as const,
      },
      {
        role: "zoomOut" as const,
      },
    ],
  },
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
