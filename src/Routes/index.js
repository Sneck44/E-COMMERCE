import Header from "../templates/Header";
import home from "../Pages/home";

const routes = {
  "/": home,
  "/algo": 'Algo',
};

const getHash = () =>
  location.hash.slice(1).toLocaleLowerCase().split("/")[1] || "/";

const resolveRoutes = (route) => {
  if (route.length <= 3) {
    let validRoute = route === "/" ? route : "/:id";
    return validRoute;
  }
  return `/${route}`;
};

/* const router = async () => {
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");

  header.innerHTML = await Header();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();
}; */

const router = async () => {
  const header = null || document.getElementById("header");
  const root = null || document.getElementById("root");

  header.innerHTML = await Header();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : 'Error404';
  root.innerHTML = await render();
};

export default router;
