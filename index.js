document.querySelectorAll(".li").forEach((list) =>
  list.addEventListener("click", () => {
    if (list.parentNode.classList.contains("active")) {
      list.parentNode.classList.toggle("active");
    } else {
      document
        .querySelectorAll(".li")
        .forEach((list) => list.parentNode.classList.remove("active"));
      list.parentNode.classList.add("active");
    }
  })
);

document.getElementById("hbg").addEventListener("click", ()=>{
  if(!document.getElementById("mobile-menu").parentNode.classList.contains("active-mob")){
    document.getElementById("mobile-menu").parentNode.classList.add("active-mob");
    document.getElementById("hbg").src = 'images/icon-close.svg';
  }else{
    document.getElementById("mobile-menu").parentNode.classList.remove("active-mob");
    document.getElementById("hbg").src = 'images/icon-hamburger.svg';
  }
})
