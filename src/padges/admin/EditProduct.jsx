import React, { useContext, useEffect, useState } from "react";
import Store from "../../context/store";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Input, Typography, Button } from "@material-tailwind/react";

function EditProduct() {
  const { prodctId } = useParams();
  const { setProdct } = useContext(Store);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [rate, setRate] = useState("");
  const [count, setCount] = useState("");
  const [errTitle, setErrTitle] = useState(false);
  const [errPrice, setErrPrice] = useState(false);
  const [errDescription, setErrDescription] = useState(false);
  const [errCategory, setErrCategory] = useState(false);
  const [errImage, setErrImage] = useState(false);
  const [errRate, setErrRate] = useState(false);
  const [errCount, setErrCount] = useState(false);
  const naveget = useNavigate();

  const valuo = () => {
    axios
      .get(`${import.meta.env.VITE_API_ROUTE}/prodct/${prodctId}`)
      .then(({ data }) => {
        setTitle(data.title);
        setPrice(data.price);
        setDescription(data.description);
        setCategory(data.category);
        setImage(data.image);
        setRate(data.rating.rate);
        setCount(data.rating.count);
      });
  };

  useEffect(() => {
    valuo();
  }, []);

  const edit = (e) => {
    e.preventDefault();
    if (
      title == "" &&
      price == "" &&
      category == "" &&
      image == "" &&
      description == "" &&
      rate == "" &&
      count == ""
    ) {
      setErrTitle(true);
      setErrPrice(true);
      setErrCategory(true);
      setErrImage(true);
      setErrDescription(true);
      setErrRate(true);
      setErrCount(true);
    } else if (title == "") {
      setErrTitle(true);
    } else if (price == 0) {
      setErrTitle(false);
      setErrPrice(true);
    } else if (category == "") {
      setErrTitle(false);
      setErrPrice(false);
      setErrCategory(true);
    } else if (!image.startsWith("https://")) {
      setErrTitle(false);
      setErrPrice(false);
      setErrCategory(false);
      setErrImage(true);
    } else if (description == "") {
      setErrTitle(false);
      setErrPrice(false);
      setErrCategory(false);
      setErrImage(false);
      setErrDescription(true);
    } else if (rate == "") {
      setErrTitle(false);
      setErrPrice(false);
      setErrCategory(false);
      setErrImage(false);
      setErrDescription(false);
      setErrRate(true);
    } else if (count == "") {
      setErrTitle(false);
      setErrPrice(false);
      setErrCategory(false);
      setErrImage(false);
      setErrDescription(false);
      setErrRate(false);
      setErrCount(true);
    } else {
      const dataPost = {
        title,
        price,
        description,
        category,
        image,
        rating: { rate, count },
      };

      axios({
        method: "put",
        url: `${import.meta.env.VITE_API_ROUTE}/prodct/${prodctId}`,
        data: dataPost,
      });

      axios.get(`${import.meta.env.VITE_API_ROUTE}/prodct`).then(({ data }) => {
        setProdct(data), naveget("/admin/products");
      });
    }
  };

  return (
    <div className="flex w-full justify-center items-center">
      <form
        onSubmit={edit}
        className=" p-5 w-full md:w-auto border-solid border-2  rounded-lg bg-[#4F5D73] flex flex-col gap-y-4 text-white  ">
        {/* titl & price & catgre */}
        <div className="grid gap-3 grid-cols-1   md:grid-cols-3 ">
          {/* titl */}
          <div>
            <Typography variant="small" className="mb-2 font-medium ">
              Product Title
            </Typography>
            <Input
              type="text"
              className=" focus:!border-t-gray-900  bg-white"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              error={errTitle}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          {/* end titl */}
          {/* Price */}
          <div>
            <Typography variant="small" className="mb-2 font-medium">
              Product Price
            </Typography>
            <Input
              type="number"
              className=" focus:!border-t-gray-900 bg-white  "
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              error={errPrice}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          {/* end Price */}
          {/* Category */}
          <div>
            <Typography variant="small" className="mb-2 font-medium">
              Category
            </Typography>
            <Input
              type="text"
              className="  focus:!border-t-gray-900  bg-white"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              error={errCategory}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          {/* end Category */}
        </div>
        {/* end titl & price & catgre */}

        {/* Image */}
        <div>
          <Typography variant="small" className="mb-2 font-medium">
            Product Image
          </Typography>
          <Input
            type="text"
            placeholder="https://"
            className="  focus:!border-t-gray-900  bg-white"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            error={errImage}
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <p className="text-orange-500">
            Image Shall Be Like : https://image.png
          </p>
        </div>
        {/* end Image */}

        {/* Description */}
        <div>
          <Typography variant="small" className="mb-2 font-medium">
            Product Description
          </Typography>
          <Input
            type="text"
            className="  focus:!border-t-gray-900  bg-white"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            error={errDescription}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        {/* end Description */}

        <div className=" grid gap-4 grid-cols-1   md:grid-cols-2">
          {/* Rate */}
          <div>
            <Typography variant="small" className="mb-2 font-medium">
              Product Rate
            </Typography>
            <Input
              type="number"
              placeholder="0.0"
              className="  focus:!border-t-gray-900  bg-white"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              error={errRate}
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
          </div>
          {/* end Rate */}
          {/* Count */}
          <div>
            <Typography variant="small" className="mb-2 font-medium">
              Product Count
            </Typography>
            <Input
              placeholder="0.0"
              type="number"
              className="  focus:!border-t-gray-900  bg-white"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              error={errCount}
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
          </div>
          {/* end Count */}
        </div>

        {/* Button save */}
        <div className="flex items-center justify-center">
          <Button color="green" type="submit">
            Add product
          </Button>
        </div>
      </form>
    </div>
  );
}

export default EditProduct;
