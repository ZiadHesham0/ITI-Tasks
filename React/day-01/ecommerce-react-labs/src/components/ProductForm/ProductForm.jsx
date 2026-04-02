import React, { useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ItemsContext } from "../../providers/ItemsProvider";
import { useNavigate, useParams } from "react-router";
import axios, { Axios } from "axios";
function ProductForm(props) {
  const { categories, items ,addNewItemForAdmin , updateItemForAdmin } = useContext(ItemsContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const editingMode = (id === 'new'? false : true );
  const editedProduct = editingMode ? items.find((item)=> item.id === id): null;
    console.log(editedProduct);
    
  

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("This Filed Is Required")
      .max(20, "Name is too long")
      .min(3, "Name is Too Short"),
    price: Yup.number()
      .required("This Filed Is Required")
      .min(20, "Must Be greater than 20$")
      .max(1000, "Too Expensive")
      .positive("Price must be greater than zero"),
    categoryID: Yup.string().required("This Filed Is Required "),
  });
  const initialValues = {
    name: editingMode ?  editedProduct.name : '' ,
    price: editingMode ?  editedProduct.price : '' ,
    categoryID: editingMode ?  editedProduct.categoryID : '',
  };




  const handleSubmit = async (values) => {
    const maxId =
      items.length > 0 ? Math.max(...items.map((item) => Number(item.id))) : 0;
    console.log("Submitting", values);
    const newProduct = {
      id : (maxId + 1),
      ...values,
      count: 0,
      categoryID: Number(values.categoryID),
      isInCart: false,
    };

    editedProduct ? updateItemForAdmin(newProduct , id) : addNewItemForAdmin(newProduct);

    navigate('/admin');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <div className="border bg-slate-950 p-7 w-[80%] mx-auto rounded-2xl flex flex-wrap gap-7">
            <h2 className="text-4xl font-medium mb-3 text-center w-full">
              Manage Products
            </h2>
            <div className="">
              <label htmlFor="name" className="text-white  mr-2">
                Product Name :
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="rounded-2xl border px-2 py-1 bg-slate-600 border-slate-950 text-white"
              />
              <ErrorMessage
                name="name"
                component="span"
                className=" text-red-500 text-xs ml-2"
              />
            </div>

            <div className="w-full">
              <label htmlFor="price" className="text-white mb-2 mr-2">
                Product Price :
              </label>
              <Field
                type="number"
                id="price"
                name="price"
                className="rounded-2xl border px-2 py-1 bg-slate-600 border-slate-950 text-white"
              />
              <ErrorMessage
                name="price"
                component="span"
                className="text-red-500 text-xs ml-2"
              />
            </div>
            <div className="w-full">
              <Field
                as="select"
                name="categoryID"
                className="w-full bg-slate-800 border border-slate-700 p-2 focus:border-blue-500 outline-none rounded-2xl"
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="categoryID"
                component="span"
                className="text-red-500 text-xs"
              />
            </div>

            <button
              type="submit"
              className="btn bg-slate-600 rounded-2xl border border-slate-300 w-full hover:bg-slate-500 duration-200"
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ProductForm;
