class Navbar{
    render(){
        const html = `
            <div class="navbar-top">
                <span>
                    <div class="a-container "><a href="http://localhost:63342/uchiru/index.htm?_ijt=g2v7m5caov1nfoieli010hkno6&_ij_reload=RELOAD_ON_SAVE">Все котики</a></div>
                    <div class="a-container"><a href="http://localhost:63342/uchiru/likesPage.htm?_ijt=gbt04an992vqlqjghoqoo0v2h2&_ij_reload=RELOAD_ON_SAVE">Любимые котики</a></div>
               </span>
            </div>
        `;
        ROOT_NAVBAR.innerHTML = html;
    }
}
const navbar = new Navbar();