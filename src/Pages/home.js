const { WebpackOptionsDefaulter } = require("webpack")

const home= () => {
   const view= `
 <div class="Toys" >
    <article class="items">
        <a href="#/1/">
            <img src="image" alt="name">
        <h2> title </h2> 
            </img>
        </a>
    </article>
 </div>
    `;
    return view;
}

export default home;