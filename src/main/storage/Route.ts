export default class Route {
  name: string;
  method: "POST" | "GET" | "PUT" | "PATCH" = "GET";
  path: string;
  description = "";
}
