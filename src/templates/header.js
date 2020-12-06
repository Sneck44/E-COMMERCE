const Header = () => {
  const view = `
    <div class="image-logo">
    <a href="/">
    <img src="https://demo.codezeel.com/opencart/OPC06/OPC060146/image/catalog/logo.png" alt="logo"></img>
    </a>
    </div>
    <section class="navigator">
        <div class="menu">
            <details>
            <summary>
                <i class="fas fa-bars"></i>Menu
            </summary>
            
                 <ul class="menu">
                     <li class="listItems">Baby & Kids</li>
                     <details>
                        <summary><i class="far fa-plus-square"></i></summary>
                <ul>
                        <li class="boy-suitElements">Playmates</li>
                        <details>
                            <summary><i class="far fa-plus-square"></i></summary> 
                            <ul>
                               <li>Crib Toys</li>
                               <li>Cooking Toys</li>
                               <li>Action Figures</li>
                               <li>Toy Boats</li>
                            </ul>
                        </details>
                        <li class="boy-suitElements">Baby Clutery</li>
                        <details>
                            <summary><i class="far fa-plus-square"></i></summary> 
                            <ul>
                               <li>Board Games</li>
                               <li>Water Toys</li>
                               <li>Craft kits</li>
                               <li>Legos</li>
                            </ul>
                        </details>
                        <li class="boy-suitElements">Toys</li>
                        <details>
                            <summary><i class="far fa-plus-square"></i></summary> 
                            <ul>
                               <li>Toys Robots</li>
                               <li>Soft Toys</li>
                               <li>Wooden Toys</li>
                               <li>Construction Toys</li>
                            </ul>
                        </details>
                        
                    </ul>
                    </details>
                     <li class="listItems">Boy Suit</li>
                     <li class="listItems">Boys Apparel</li>
                     <details>
                        <summary><i class="far fa-plus-square"></i></summary> 
                        <ul>
                           <li>Baby Footies</li>
                           <li>Coats</li>
                           <li>Hoodies</li>
                           <li>Sweaters</li>
                           <li>Tops</li>
                        </ul>
                    </details>
                    <ul>
                     <li class="listItems">Puzzels</li>
                     <li class="listItems">Rattels</li>
                     <li class="listItems">Rolling Toys</li>
                     <li class="listItems">Baby Toys</li>
                     <li class="listItems">Blogs</li>
                 </ul>
                    </details>
        </div>
        <div class="nav-icons">
            <details>
                <summary>
            <i class="fas fa-search"></i>
                </summary>
                <input type="text">
            </details>
            <details>
                <summary>
            <i class="fas fa-user"></i>
                </summary>
                <ul class="userList">
                    <li>Register</li>
                    <li>Login</li>
                    <li>Wish List</li>
                    <li>Shopping Cart</li>
                    <li>Checkout</li>
                    <li>LANGUAGE</li>
                    <li>English</li>
                    <li>Arabic</li>
                    <li>CURRENCY $</li>
                    <li><button>¢</button></li>
                </ul>
            </details>
            <details>
                <summary>
            <i class="fas fa-cart-plus"></i>
                </summary>
                    <input type="text">
            </details>

            
        </div>
    </section>
    `;
  return view;
};

export default Header;
