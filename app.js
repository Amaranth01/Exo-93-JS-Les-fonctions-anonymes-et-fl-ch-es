let button = document.getElementById('alert');
let button1 = document.getElementById('somme');

button.addEventListener('click',  () => {
    alert('Hello world');
})

button1.addEventListener('click', () => {
    let div = document.createElement('div');
    document.body.append(div);
    div.innerHTML = (5 + 6);
});

button.addEventListener('mouseover', () =>{
    button.style.backgroundColor = "yellow";
});