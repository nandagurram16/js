function a(){
    console.log('a')
}
a()
console.log('end')
// ============================== 

console.log('start')

setTimeout(function (){
    count=0
    console.log('hlo nanda🤣')
    console.log(count++)
},3000)

console.log('end')
// ===================================
count=0
document.getElementById('clickme')
.addEventListener('click',function cb(){
    console.log('Click-Button',count++)
})
// ===================================================

console.log('start')

setTimeout(function cbt(){
    console.log('setTimeout')
},4000)

fetch('https://www.netflix.com/in/')
.then(function cbf(){
    console.log('cb netflix')
})

console.log('END')
// =======================================>>>>>

console.log('start')

function cb(){
    console.log('call baca')
}
cb()

setTimeout(function cb (){
    console.log('hello😢')
},0)

console.log('end')

