const cardTab = document.getElementsByClassName("card");
const face2Tab = document.getElementsByClassName("face2");




for (var i = 0; i < face2Tab.length; i++) {
    face2Tab[i].onfocus = cardTab[i].classList.add("cardFocus");
};



