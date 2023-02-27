// console.log('yea, I am working')

const loadData = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res =>  res.json())
    .then(data => showData(data))
    .catch((error) =>{
        console.log(error);
    });
}

const showData =(data) =>{
    // console.log(data.slice(0, 5));
    for (let singleData of data){
        console.log(singleData);
    }

}


loadData();