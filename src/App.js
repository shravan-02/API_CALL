import React from 'react'
import axios from 'axios'

const App = () => { 
  const FetchAPI=async ()=>{
try {
 
  console.log("BEGIN TIME", new Date());
  const response = await axios.get("http://localhost:8090/primes")
  let primes=response.data.numbers;

  const response1 = await axios.get("http://localhost:8090/fibo")
  let fibo=response1.data.numbers;

  const response2 = await axios.get("http://localhost:8090/odd")
  let odd=response2.data.numbers;

  const response3 = await axios.get("http://localhost:8090/rand")
  let rand=response3.data.numbers;


  let combinedData=[...primes,...fibo,...odd,...rand];

  let mergedData=combinedData.filter((value,index,self)=>{return self.indexOf(value)==index})


  let uniqueData=mergedData.sort(function(a,b){return a - b});
  console.log(uniqueData)

//   var numArray = [140000, 104, 99];
// numArray = numArray.sort();
// console.log(numArray)

} catch (error) {
  console.log(error)
}
console.log("END TIME", new Date());

  }
  React.useEffect(async () => {
     FetchAPI()

  },[]) 
  return (
    <div>App</div>
  )
}

export default App