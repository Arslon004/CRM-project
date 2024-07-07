import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductHeader from '../components/header/ProductHeader';
import ProductForm from '../components/form/ProductForm';
import ProductTable from '../components/table/ProductTable';
import useProduct from '../hooks/useProduct';

const ProductsPageWithHook = () => {
  const { selected, data: product, allData: products, validated, handleData: handleProduct, handleSubmit, editData: editProduct, deleteData: deleteProduct } = useProduct({
    localStorageKey: "products",
    initialData: { name: "", price: "", category: "Milk", quantity: "", desc: "" }
  });

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState('sort');

  const handleSearch = (e) => {
    setSearch(e.target.value.trim().toLowerCase());
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  const ProductHeaderProps = { handleSort, sort, handleCategory, category, handleSearch, search };
  const ProductFormProps = { selected, product, handleProduct, validated, handleSubmit };
  const ProductTableProps = { sort, category, search, deleteProduct, editProduct, products };

  return (
    <Container>
      <ProductHeader {...ProductHeaderProps} />
      <Row>
        <Col md="4">
          <ProductForm {...ProductFormProps} />
        </Col>
        <Col md="8">
          <ProductTable {...ProductTableProps} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductsPageWithHook;
