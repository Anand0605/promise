const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task is complete')
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log('promise is consumed')
})

// 2nd way

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2')
        resolve()
    },2000)

}).then(function(){
    console.log('async 2 resolve')
})

// 3rd way

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
resolve({userName:"Anand",email:"anand123@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})

// 4th way

const promiseFourth = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({userName:'Anand',password:'123'})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})
promiseFourth
.then((user)=>{
console.log(user);
return user.userName
})
// jab koi chij return hoti h tb dusre .then me jata h jise chaining khte 
.then((userName)=>{
    console.log(userName)
})
.catch(function(error){
    console.log(error)

}).finally(()=>{
    console.log("the promise either resolve or reject")
})

// 5th way

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({userName:"React",teacher:"hitesh"})

        }else{
            reject('ERROR: react went wrong')
        }
        
    },1000)
})
async function consumePromisefive(){
    try{
        const response = await promiseFive
        console.log(response)
    }catch(error){
        console.log(error)
    }
}
consumePromisefive()


// https://jsonplaceholder.typicode.com/users

async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    }catch(error){
        console.log("E:",error)
    }
}
getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>console.log(error))

