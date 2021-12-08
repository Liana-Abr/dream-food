// Получить данные из базы данных за счет ajax-запросов
let container = document.querySelector(".products");
(async()=>{
    const res = await fetch("/api/vegetables");
    const data = await res.json();
    container.innerHTML = data.data.join("<br>");

})()