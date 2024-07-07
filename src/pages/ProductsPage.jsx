import React, { useState } from 'react'
import { v4 } from 'uuid'
import { Col, Container, Row } from 'react-bootstrap'
import ProductHeader from '../components/header/ProductHeader'
import ProductForm from '../components/form/ProductForm'
import ProductTable from '../components/table/ProductTable'

const ProductsPage = () => {

  const [products,setProducts]=useState(JSON.parse(localStorage.getItem("products")) || []);

  const [product,setProduct]=useState({name:"",price:"",category:"Milk",quantity:"",desc:""});

  const [validated, setValidated] = useState(false);

  const [selected, setSelected ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.checkValidity()) {
      let newProduct=({...product, id:v4(),price:+product.price,quantity:+product.quantity});
      let newProducts;
      if(selected === null){
        newProducts=[...products,newProduct];
      }else{
        newProducts=products.map((product)=>{
          if(product.id===selected){
            return newProduct
          }
          else{
            return product
          }
        })
      }
      setProducts(newProducts);
      localStorage.setItem('products',JSON.stringify(newProducts));
      setProduct({name:"",price:"",category:"Milk",quantity:"",desc:""});
      setSelected(null);
      setValidated(false);
    } else {
      setValidated(true);
    }
  };

  const handleProduct=(e)=>{
    setProduct({...product,[e.target.id]:e.target.value})
  }

  const editProduct=(id)=>{
    setSelected(id);
    let product=products.find((product)=>product.id === id);
    setProduct(product);
  }

  const deleteProduct=(id)=>{
    let newProducts=products.filter((product)=>product.id !== id);
    let isDelete=window.confirm("Do you want delete this product ???");
    if(isDelete){
      setProducts(newProducts);
      localStorage.setItem('products',JSON.stringify(newProducts));
    }
  }

  return (
    <Container>
      <ProductHeader />
      <Row>
        <Col md="4">
          <ProductForm
          selected={selected}
          product={product}
          handleProduct={handleProduct}
          validated={validated}
          handleSubmit={handleSubmit}
          />
        </Col>
        <Col md="8">
          <ProductTable
          deleteProduct={deleteProduct}
          editProduct={editProduct}
          products={products}
           />
        </Col>
      </Row>
    </Container>
  )
}

export default ProductsPage