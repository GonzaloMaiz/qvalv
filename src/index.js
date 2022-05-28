import nav from './components/nav.js';

if (window.onload) {
    console.log("click");
    const addHeader = () => {
        const header = document.querySelector(header);
        header.appendChild(nav);
        
    };
    window.addEventListener(click, addHeader());
}

;
