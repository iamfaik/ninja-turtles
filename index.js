var yourChoice = document.querySelector('.your-choice')
var yourPower = document.querySelector('.your-power')
var yourHealth = document.querySelector('.your-health')
var box1 = document.querySelector('.box-1')
var box2 = document.querySelector('.box-2')
var box3 = document.querySelector('.box-3')
var box4 = document.querySelector('.box-4')
var div2 = document.querySelector('.enemies')
var div3 = document.querySelector('.third-div')
var fight = document.querySelector('.fight')
var container=document.querySelector('.container')
var sewage=document.querySelector('.sewage')
var hero=document.querySelector('.hero')
var enemy=document.querySelector('.enemy')
var heroPower=document.querySelector('.battle-hero-power')
var heroHealth=document.querySelector('.battle-hero-health')
var heroName=document.querySelector('.battle-hero-name')
var enemyPower=document.querySelector('.battle-enemy-power')
var enemyHealth=document.querySelector('.battle-enemy-health')
var enemyName=document.querySelector('.battle-enemy-name')
var attack=document.querySelector('.attack')
var health=document.querySelectorAll('.health')
var layout=document.querySelectorAll('.layout')
var width=100;
var enemywidth=100;
var firstSelected = false
var secondSelected = false
var box1isindiv2 = false
var box2isindiv2 = false
var box3isindiv2 = false
var box4isindiv2 = false

box1.onclick = function () {
    if (firstSelected == false) {
        if (box1isindiv2 == false) {
            box1isindiv2 = true
            firstSelected = box1
            yourChoice.innerText = `Your choice : ${this.dataset.name}`,
                yourPower.innerText = `POWER : ${this.dataset.power}`,
                yourHealth.innerText = `HEALTH : ${this.dataset.health}`
            div2.append(box2)
            div2.append(box3)
            div2.append(box4)
        }

    }
    else if (secondSelected == false) {
        if (box1isindiv2 == false) {
            secondSelected = box1,
                div3.append(box1)
        }
    }
}

box2.onclick = function () {
    if (firstSelected == false) {
        if (box2isindiv2 == false) {
            box2isindiv2 = true
            firstSelected = box2
            yourChoice.innerText = `Your choice : ${this.dataset.name}`,
                yourPower.innerText = `POWER : ${this.dataset.power}`,
                yourHealth.innerText = `HEALTH : ${this.dataset.health}`
            div2.append(box1)
            div2.append(box3)
            div2.append(box4)
        }

    }
    else if (secondSelected == false) {
        if (box2isindiv2 == false) {
            secondSelected = box2,
                div3.append(box2)
        }

    }
}

box3.onclick = function () {
    if (firstSelected == false) {
        if(box3isindiv2==false){
            box3isindiv2=true
            firstSelected = box3
        yourChoice.innerText = `Your choice : ${this.dataset.name}`,
            yourPower.innerText = `POWER : ${this.dataset.power}`,
            yourHealth.innerText = `HEALTH : ${this.dataset.health}`
        div2.append(box1)
        div2.append(box2)
        div2.append(box4)
        }
        
    }
    else if (secondSelected == false) {
        if(box3isindiv2==false){
            secondSelected = box3,
            div3.append(box3)
        }
        
    }
}

box4.onclick = function () {
    if (firstSelected == false) {
        if(box4isindiv2==false){
            box4isindiv2=true
            firstSelected = box4
        yourChoice.innerText = `Your choice : ${this.dataset.name}`,
            yourPower.innerText = `POWER : ${this.dataset.power}`,
            yourHealth.innerText = `HEALTH : ${this.dataset.health}`
        div2.append(box1)
        div2.append(box2)
        div2.append(box3)
        }
        
    }
    else if (secondSelected == false) {
        if(box4isindiv2==false){
            secondSelected = box4,
            div3.append(box4)   
        }
    }
}
fight.onclick=function(){
    container.style.display='none',
    sewage.style.display='block',
    hero.append(firstSelected)
    enemy.append(secondSelected)
    heroName.innerText=firstSelected.dataset.name
    heroPower.innerText=`POWER :${firstSelected.dataset.power}`
    heroHealth.innerText=`HEALTH : ${firstSelected.dataset.health}`
    enemyName.innerText=secondSelected.dataset.name
    enemyPower.innerText=`POWER : ${secondSelected.dataset.power}`
    enemyHealth.innerText=`HEALTH :${secondSelected.dataset.health}`
}
attack.onclick=function()
{
    var heroBeat=parseInt(firstSelected.dataset.power)
    var enemySituation=parseInt(secondSelected.dataset.health)
    var impact=Math.floor(Math.random()*heroBeat)
    enemywidth-=impact
    layout[1].style.width=`${enemywidth}%`
    
    var theEnd=enemySituation-impact
    secondSelected.dataset.health=theEnd
    enemyHealth.innerText='HEALTH : '  +theEnd
    if(theEnd<0)
    {
        alert('You Win!')
        layout.style.display='none'
        return
    }
    
    enemyImpact()
}

function enemyImpact()
{
    var enemyBeat=parseInt(secondSelected.dataset.power)
    var heroSituation=parseInt(firstSelected.dataset.health)
    var impact=Math.floor(Math.random()*enemyBeat)

    width=width-impact
    layout[0].style.width=`${width}%`
    var theEnd=heroSituation-impact
    firstSelected.dataset.health=theEnd
    if(width<0){
        layout[0].style.display='none'
    }
    heroHealth.innerText='HEALTH : '  +theEnd
    if(theEnd<0)
    {

        alert('You Lose!')
        layout.style.display='none'
        return
    }
    
}