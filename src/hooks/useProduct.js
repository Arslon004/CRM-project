import { useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const useProduct = ({ localStorageKey, initialData }) => {
  const [allData, setAllData] = useState(JSON.parse(localStorage.getItem(localStorageKey)) || []);
  const [data, setData] = useState(initialData);
  const [validated, setValidated] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.checkValidity()) {
      let newData = { ...data, id: uuidv4(), price: +data.price, quantity: +data.quantity };
      let newAllData;
      if (selected === null) {
        newAllData = [...allData, newData];
        toast.success("Added successfully");
      } else {
        newAllData = allData.map((item) => {
          if (item.id === selected) {
            return newData;
          } else {
            return item;
          }
        });
        toast.success("Edit successfully");
      }
      setAllData(newAllData);
      localStorage.setItem(localStorageKey, JSON.stringify(newAllData));
      setData(initialData);
      setSelected(null);
      setValidated(false);
    } else {
      setValidated(true);
    }
  };

  const handleData = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const editData = (id) => {
    setSelected(id);
    let item = allData.find((item) => item.id === id);
    setData(item);
  };

  const deleteData = (id) => {
    let newAllData = allData.filter((item) => item.id !== id);
    let isDelete = window.confirm("Do you want delete this product ???");
    if (isDelete) {
      setAllData(newAllData);
      localStorage.setItem(localStorageKey, JSON.stringify(newAllData));
      toast.success("Deleted successfully");
    }
  };

  return { selected, data, allData, validated, handleData, handleSubmit, editData, deleteData };
};

export default useProduct;
