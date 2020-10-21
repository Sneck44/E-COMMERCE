import Header from "../templates/Header";
import Home from "../pages/Home";

const routes = {
  "/": Home,
};



const router = async () => {
  const header = null || document.getElementById("header");

  header.innerHTML = await Header();
};

export default router;
