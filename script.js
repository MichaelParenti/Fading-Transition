const one = document.querySelector(".one");
const two = document.querySelector(".two");
const next = document.querySelector("#next");

two.remove();

next.addEventListener("click", () => {
    one.style.animation = 'identifier linear 1s';
    two.style.animation = 'identifier2 linear 1s';
    setTimeout( () => {
        one.remove();
        document.body.append(two);
        next.remove();
    }, 1000);
    
});