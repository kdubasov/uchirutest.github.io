class Navbar{
    render(){
        const html = `
            <div class="navbar-top">
                <span>
                    <div class="a-container "><a href="https://kdubasov.github.io/uchirutest.github.io/">Все котики</a></div>
                    <div class="a-container"><a href="https://kdubasov.github.io/uchirutest.github.io/likesPage.htm">Любимые котики</a></div>
               </span>
            </div>
        `;
        ROOT_NAVBAR.innerHTML = html;
    }
}
const navbar = new Navbar();
