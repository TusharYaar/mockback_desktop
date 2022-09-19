import Mockspace from "./Mockspace";

class AppSettings {
  static version = "0.1";
  created: Date;
  modified: Date;
  theme = "light";
  constructor() {
    const currentDate = new Date();
    this.created = currentDate;
    this.modified = currentDate;
  }

  preferences = {
    port: 8080,
    runOnStart: false,
  };

  mockspaces: Mockspace[] = [];
}

export default AppSettings;
