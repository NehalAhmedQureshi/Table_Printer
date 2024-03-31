let form = document.querySelector("#tableForm");
let input = document.querySelector("#tableInput");
let print = document.querySelector("#printer");


form.addEventListener("submit",(event ) => {

    event.preventDefault();
    let tableOf = input.value;   
    print.innerHTML = "";
    for (let i = 1; i <= 12; i++) {

        const message = `${tableOf} X ${i} = ${tableOf * i}`;
        table.innerHTML += `${message} <br>`;
        
}
}
)