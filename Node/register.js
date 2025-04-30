
function register(){
    console.log('checking for user')
    return false
}

function registeruser(){
    console.log('user registered successfully')
}

module.exports = {
    user:register,
    registerduser:registeruser
}