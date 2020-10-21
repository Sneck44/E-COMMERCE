import Header from "../templates/Header";
import Home from "../pages/Home";

const routes = {
  "/": Home,
};

const router = async () => {
  const header = null || document.getElementById("header");
  const root = null || document.getElementById("root");

  header.innerHTML = await Header();
  root.innerHTML = await render();
};

export default router;
