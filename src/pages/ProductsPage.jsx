import React, { useCallback, useState } from 'react'
import { v4 } from 'uuid'
import { Col, Container, Row } from 'react-bootstrap'
import ProductHeader from '../components/header/ProductHeader'
import ProductForm from '../components/form/ProductForm'
import ProductTable from '../components/table/ProductTable'
import { toast } from 'react-toastify'

const ProductsPage = () => {

  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) || []);

  const [product, setProduct] = useState({ name: "", price: "", category: "Milk", quantity: "", desc: "" });

  const [validated, setValidated] = useState(false);

  const [selected, setSelected] = useState(null);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("all");

  const [sort, setSort] = useState('sort');


  const handleSubmit =(e) => {
    e.preventDefault();
    const form = e.target;
    if (form.checkValidity()) {
      let newProduct = ({ ...product, id: v4(), price: +product.price, quantity: +product.quantity });
      let newProducts;
      if (selected === null) {
        newProducts = [...products, newProduct];
        toast.success("Added successfully");
      } else {
        newProducts = products.map((product) => {
          if (product.id === selected) {
            return newProduct
          }
          else {
            return product
          }
        })
        toast.success("Edit successfully")
      }
      setProducts(newProducts);
      localStorage.setItem('products', JSON.stringify(newProducts));
      setProduct({ name: "", price: "", category: "Milk", quantity: "", desc: "" });
      setSelected(null);
      setValidated(false);
    } else {
      setValidated(true);
    }
  };

  const handleProduct = (e) => {
    setProduct({ ...product, [e.target.id]: e.target.value })
  }

  const editProduct = (id) => {
    setSelected(id);
    let product = products.find((product) => product.id === id);
    setProduct(product);
  }

  const deleteProduct = (id) => {
    let newProducts = products.filter((product) => product.id !== id);
    let isDelete = window.confirm("Do you want delete this product ???");
    if (isDelete) {
      setProducts(newProducts);
      localStorage.setItem('products', JSON.stringify(newProducts));
    }
  }

  const handleSearch = (e) => {
    setSearch(e.target.value.trim().toLowerCase());
  }

  const handleCategory = (e) => {
    setCategory(e.target.value);
  }

  const handleSort = (e) => {
    setSort(e.target.value);
  }

  const ProductHeaderProps = { handleSort, sort, handleCategory, category, handleSearch, search }

  const ProductFormProps = { selected, product, handleProduct, validated, handleSubmit }

  const ProductTableProps = { sort, category, search, deleteProduct, editProduct, products }
  return (
    <Container>
      <ProductHeader
        {...ProductHeaderProps}
      />
      <Row>
        <Col md="4">
          <ProductForm
            {...ProductFormProps}
          />
        </Col>
        <Col md="8">
          <ProductTable
            {...ProductTableProps}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default ProductsPage