

const Register= () =>{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log('please register')
            reject('failed register')
        },2000)
    })
}

const login=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('login')
            resolve()
        },1000)
    })
    
}

const file=()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('fild success')
            resolve()
        },1000)
    })
    
}

Register().then(login).then(file).catch((err)=>{console.log(err)})
