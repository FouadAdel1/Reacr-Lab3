import axios from "axios";

let pathUrl = "http://localhost:3005/products";
let getAllData =  () => axios.get(pathUrl)
let getoneProduct = (id) => axios.get(pathUrl, { params: id });
let setOneProduct = (productObj) => { axios.post(`${pathUrl}`, productObj) };
let deleteOneProduct = (id) => { axios.delete(`${pathUrl}/${id}`) };
let updataOneProduct = (id,productObj) =>
  axios.put(`${pathUrl}/${id}`, productObj);


export let ApiConnection = {
  getAllData,
  getoneProduct,
  setOneProduct,
  deleteOneProduct,
  updataOneProduct,
};
