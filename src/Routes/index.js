import header from "../templates/header";
import Home from "../Pages/home";
import items from "../Pages/items"
import Error404 from "../Pages/Error404"

const routes={
'/': Home,
'/:id':items
'/contact': 'Contact'
}

const router= async () => {
   
const header= null || document.getElementById ('header');
const main = null || document.getElementById ('main');

header.innerHTML= await header ();
main.innerHTML= await main ();
};

export default router;