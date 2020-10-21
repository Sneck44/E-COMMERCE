import Header from '../templates/Header';
import home from '../Pages/home';
import items from '../Pages/items';

 const routes= {
    './':home,
    './:id':items,
 }

 const router= async () => {
    const header= null || document.getElementById('header');
    const items= null || document.getElementById('nav');

header.innerHTML= await Header();
 }

export default router