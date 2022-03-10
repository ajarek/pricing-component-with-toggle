const spansId=document.querySelectorAll('main span') as NodeListOf<HTMLElement>;
const checkBox=document.querySelector('#box') as HTMLInputElement

type Options=[
    {monthly: number},
    {annualy: number}
]


type Price ={
    basic:Options,  
    prof:Options  , 
    master:Options   
  }

let prices:Price={
    basic:[{monthly:19.99},{annualy:199.99}],
    prof:[{ monthly: 24.99},{annualy: 249.99}],   
    master:[{ monthly: 39.99},{annualy: 399.99}]   
}

checkBox.addEventListener('change',()=>{
    if(checkBox.checked){
        spansId.forEach(span=>{
           if(span.id==='id-basic'){
               span.innerText=`${prices.basic[1].annualy}`
           }
           if(span.id==='id-prof'){
            span.innerText=`${prices.prof[1].annualy}`
        }
        if(span.id==='id-master'){
            span.innerText=`${prices.master[1].annualy}`
        }   
        })
    }else{
        spansId.forEach(span=>{
            if(span.id==='id-basic'){
                span.innerText=`${prices.basic[0].monthly}`
            }
            if(span.id==='id-prof'){
             span.innerText=`${prices.prof[0].monthly}`
         }
         if(span.id==='id-master'){
             span.innerText=`${prices.master[0].monthly}`
         }
        })
    }
})
