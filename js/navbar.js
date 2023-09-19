const sidebar = document.getElementById("side-navbar");
let open = true;
const toggleSidebar = ()=>{
    if (open) {
        open = false;
        sidebar.classList.add("hidden")
    }else{
        sidebar.classList.remove("hidden")
        open = true
    }
}