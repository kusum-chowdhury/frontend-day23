
import React, {useEffect, useState} from 'react'

function Products() {
    const [cat, setcat] = useState([]);
    const [product, setproduct] = useState([]);
  const [selectedCat, setselectedCat] = useState(null);
function getProuctBycat(){
    fetch(`https://fakestoreapi.com/products/category/jewelery/${selectedCat}`)
            .then(res=>res.json())
            .then(product => {
                console.log(product)
              setproduct(product);
            })
}

function getAllcat(){

   

    fetch('https://fakestoreapi.com/products/categories') 
            .then(res=>res.json())
            .then(json=> {
                console.log(json)
                setcat(json);
            })
}
useEffect(() => {

    getAllcat();
}, [])

useEffect(()=> {
    console.log("use Effect dependent")
if(selectedCat) {
    getProuctBycat()
}
}, [selectedCat])

function handleChange(e) {
setselectedCat(e.target.value)
}

  return (
    <div>
        <select name='categories' id='categories' onChange={handleChange}>
            {cat.map(catagory => <option key={catagory} value={catagory}>{catagory.toUpperCase()}</option>)}
        </select>

        <section>
            <h1>{selectedCat}</h1>
            {product.map(prod => <section key={prod.id}>
                <img src='prod.image' alt={prod.title} />
                sec
            </section>)}
        </section>
    </div>
  )
}

export default Products