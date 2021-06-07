const nav = () => {
    const header = document.querySelector("header");
    const navComponent = `
        <a href="./index.html"><img src="" alt="main logo"></a>
        <nav class="nav-desktop">
            <ul>
                <li><a href="">EN LAS REDES</a></li>
                <li><a href="">EN LAS CALLES</a></li>
                <li><a href="">CONSEJOS</a></li>
                <li><a href="">RECURSOS</a></li>
            </ul>
        </nav>
        <nav class="nav-mobile">
            <ul>
                <li><a href="">EN LAS REDES</a></li>
                <li><a href="">EN LAS CALLES</a></li>
                <li><a href="">CONSEJOS</a></li>
                <li><a href="">RECURSOS</a></li>
            </ul>
        </nav>
    `;
    
  header.appendChild(navComponent);
}
