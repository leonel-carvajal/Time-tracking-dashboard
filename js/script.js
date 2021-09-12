import {data} from '../js/data.js'
const options = document.querySelectorAll('.card__item')
const Information = document.querySelectorAll('.information__body')
let optionChange = 'weekly'
let ad = 'week'

const initialData = ()=>{
	for (let i=0;i<Information.length;i++) {
		Information[i].children[0].children[0].textContent = data[i].title
		Information[i].children[1].children[0].textContent = `${data[i].timeframes[`${optionChange}`].current}Hrs`
		Information[i].children[1].children[2].textContent = `${data[i].timeframes[`${optionChange}`].previous}hrs`
		Information[i].children[1].children[1].textContent = `Last ${ad}`
	}
}

const changeData = (option)=>{
	if(option.toLowerCase()==='daily'){
		optionChange = 'daily'
		ad = 'day'
	}else if(option.toLowerCase()==='monthly'){
		optionChange ='monthly'
		ad = 'month'
	}else{
		optionChange = 'weekly'
		ad = 'week'
	}
	initialData()
}

const activeItem = (e)=>{
	changeData(e.target.textContent)
	options.forEach(item=>{
		if(item.classList.contains('card__item--active')){
			item.classList.remove('card__item--active')
		}
	})
	e.target.classList.add('card__item--active')
}

options.forEach(item=>{ item.addEventListener('click',activeItem)})
window.addEventListener('DOMContentLoaded',initialData)