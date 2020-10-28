import Header from "../templates/Header";
import Home from "../pages/Home";
<<<<<<< HEAD
import Error404 from "../pages/Error404"
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";
=======
>>>>>>> 9ce251b646520aa2521427ed03c5f27549403798

const routes = {
  "/": Home,
};



const router = async () => {
  const header = null || document.getElementById("header");

  header.innerHTML = await Header();
<<<<<<< HEAD


  let hash= getHash ();
  let route= await resolveRoutes (hash);
  let render= routes [route]? routes [route] : Error404;
  main.innerHTML= await render();
=======
>>>>>>> 9ce251b646520aa2521427ed03c5f27549403798
};

export default router;
