const fooBtn = document.getElementById("fooBtn");
const barBtn = document.getElementById("barBtn");
const fooBarBtn = document.getElementById("fooBarBtn");
const main = document.querySelector("main");


fooBtn.addEventListener("click", function() {
    const h3 = document.createElement("h3");
    h3.textContent = "Foo";
    main.appendChild(h3);
});

barBtn.addEventListener("click", function() {
    const h3 = document.createElement("h3");
    h3.textContent = "Bar";
    main.appendChild(h3);
});

fooBarBtn.addEventListener("click", function() {
    const h2 = document.createElement("h2");
    h2.textContent = "FooBar";
    main.appendChild(h2);
})