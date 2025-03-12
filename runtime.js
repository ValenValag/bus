
let usesLeft = 10;

(() => {
    usesLeft = localStorage.getItem("usesLeft") ? parseInt(localStorage.getItem("usesLeft")) : 10;
    document.getElementById("usesleft").textContent = usesLeft;
    GetDeadline();
})();

function OperateUses(movement) {
    usesLeft += movement

    localStorage.setItem("usesLeft", usesLeft);
    
    //mostrar usos en pantalla
    document.getElementById("usesleft").innerText = ""+usesLeft;
    GetDeadline();
}

function GetDeadline(){
    let now = new Date();
    now.setDate(now.getDate() + usesLeft)
    now = now.toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
    document.getElementById("date").innerHTML = now;
}