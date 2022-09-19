import Route from "./Route";
export default class Mockspace {
  name: string;

  routes: Route[] = [];

  constructor(name: string) {
    this.name = name;
  }
}
