window.onload = () => {
    {window.addEventListener("scroll", function () {
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
        })}
        
        
        
        {window.addEventListener("scroll", function () {
        var header = document.querySelector("p");
        header.classList.toggle("sticky2", window.scrollY > 0);
        })}
        
        
        
        {window.addEventListener("scroll", function () {
        var header = document.querySelector("h1");
        header.classList.toggle("sticky2", window.scrollY > 0);
        })}
        
}
