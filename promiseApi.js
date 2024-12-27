// promise.all()
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(()=> resolve('p1 sccess'),3000)
// });

// const p2 = new Promise((resolve, reject) => {
//     // setTimeout(() => reject('p2 fail'),1000)
//     setTimeout(() => resolve('p2 fail'),1000)
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => reject('p3 fail'),2000)
//     // setTimeout(() => resolve('p3 sccess'),2000)
// })
// ==========================================================

// Promise.settled

// const p1 = new Promise((resolve, reject) => {
//     // setTimeout(() =>resolve('p1 success'),4000)
//     setTimeout(() =>reject('p1 fail'),4000)
// })

// const p2 =new Promise((resolve, reject) => {
//     setTimeout(() => reject('p2 fail'),2000)
//     // setTimeout(() => resolve('p2 success'),2000)
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('p3 success'),1000)
// })

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Promise.race

// const p1 =new Promise((resolve, reject) => {
//     // setTimeout(() => resolve('p1 scesss'),2000)
//     setTimeout(() => reject('p1 fail'),2000)
// })

// const p2 = new Promise((resolve, reject) => {
//     // setTimeout(() => resolve('p2 sccess'),3000)
//     setTimeout(() => reject('p2 fail'),3000)
// })

// const p3 = new Promise((resolve,reject) =>{
//     // setTimeout(() => resolve('p3 success'),1000)
//     setTimeout(() => reject('p3 fail'),1000)
// })

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Promise.any

const p1 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve('p1 sccess'),3000)
    setTimeout(() => reject('p1 fail'),3000)

})

const p2 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve('p2 sccess'),1000)
    setTimeout(() => reject('p2 fail'),1000)

})

const p3 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve('p1 sccess'),2000)
    setTimeout(() => reject('p3 fail'),2000)
})


Promise.any([p1,p2,p3])
.then((res) =>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})
