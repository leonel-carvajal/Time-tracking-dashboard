"use strict";var _data=require("../js/data.js"),options=document.querySelectorAll(".card__item"),Information=document.querySelectorAll(".information__body"),optionChange="weekly",ad="week",initialData=function(){for(var t=0;t<Information.length;t++)Information[t].children[0].children[0].textContent=_data.data[t].title,Information[t].children[1].children[0].textContent="".concat(_data.data[t].timeframes["".concat(optionChange)].current,"Hrs"),Information[t].children[1].children[2].textContent="".concat(_data.data[t].timeframes["".concat(optionChange)].previous,"hrs"),Information[t].children[1].children[1].textContent="Last ".concat(ad)},changeData=function(t){"daily"===t.toLowerCase()?(optionChange="daily",ad="day"):"monthly"===t.toLowerCase()?(optionChange="monthly",ad="month"):(optionChange="weekly",ad="week"),initialData()},activeItem=function(t){changeData(t.target.textContent),options.forEach((function(t){t.classList.contains("card__item--active")&&t.classList.remove("card__item--active")})),t.target.classList.add("card__item--active")};options.forEach((function(t){t.addEventListener("click",activeItem)})),window.addEventListener("DOMContentLoaded",initialData);