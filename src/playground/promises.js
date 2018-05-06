const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        /*resolve({
            name: 'OHW',
            age: 27
        });*/
        reject('wrong');
    },5000);
});

console.log('before');

promise.then((data)=>{
    console.log('1',data);
}).catch((error)=>{
    console.log('error',error);
});

console.log('after');