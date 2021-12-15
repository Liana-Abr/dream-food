const e = require("express");

// Получить данные из базы данных за счет ajax-запросов
let container = document.querySelector(".products");
async function deleteProducts(id,el) {
    let id = el.getAttribute("data-key");
    let res = await fetch(`/api/del/${id}`, {method: "delete"
    });
    let msg = await res.json();
    if(msg.msg === "ok") {
        el.remove();
    }
}
(async()=>{
    const res = await fetch("/api/vegetables");
    const data = await res.json();
    data.data.forEach((obj)=>{
        container.innerHTML = `<div onclick = "deleteProduct(this)" div class="products__item"  data-key="${obj._id}">${obj.name}</div>`;
    });
    
})();
