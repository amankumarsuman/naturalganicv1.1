import { Paper } from "@mui/material";
import React from "react";
import useStyles from "./categoriesStyles";
import { Routes, Route, Link } from "react-router-dom";
function Categories() {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.categories} elevation={5}>
        <div className={classes.categoriesDiv}>
          <span className={classes.categoriesSpan}>
            <img
              width="40%"
              style={{ borderRadius: "40px" }}
              src="https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg"
              alt="vegetables"
            />
            <Link style={{ textDecoration: "none" }} to="/vegetable">
              {" "}
              <h5>VEGETABLES</h5>
            </Link>
          </span>
          <span className={classes.categoriesSpan}>
            <img
              width="65%"
              style={{ borderRadius: "40px" }}
              src="https://foodsafetyhelpline.com/wp-content/uploads/2020/05/Are-Fresh-Fruits-and-Vegetables-More-Nutritious-than-Processed-Ones-1024x682.jpg"
              alt="fruits"
            />
            <Link style={{ textDecoration: "none" }} to="/fruits">
              {" "}
              <h5>FRUITS</h5>
            </Link>
          </span>
          <span className={classes.categoriesSpan}>
            <img
              width="80%"
              style={{ borderRadius: "40px" }}
              src="http://www.logopeople.in/blog/wp-content/uploads/2016/09/inspiring-spices-packaging-design-india-1.jpeg"
              // "https://static.toiimg.com/thumb/64699039.cms?width=1200&height=900"
              alt="spices"
            />
            <Link style={{ textDecoration: "none" }} to="/spices">
              {" "}
              <h5>SPICES</h5>
            </Link>
          </span>
          <span className={classes.categoriesSpan}>
            <img
              width="70%"
              style={{ borderRadius: "40px" }}
              src="https://lh3.googleusercontent.com/p/AF1QipMHjvkJzQtfLE34z0IwQu74DLM3lAeFukflYIQ-=w1080-h608-p-no-v0"
              alt="GROCERIES"
            />
            <Link style={{ textDecoration: "none" }} to="/groceries">
              {" "}
              <h5>GROCERIES</h5>
            </Link>
          </span>
          <span className={classes.categoriesSpan}>
            <img
              width="35%"
              style={{ borderRadius: "40px" }}
              src="https://domf5oio6qrcr.cloudfront.net/medialibrary/9685/iStock-544807136.jpg"
              alt="dairy"
            />
            <Link style={{ textDecoration: "none" }} to="/dairy">
              {" "}
              <h5>DAIRY</h5>
            </Link>
          </span>
          <span className={classes.categoriesSpan}>
            <img
              width="99%"
              style={{ borderRadius: "40px" }}
              src="https://5.imimg.com/data5/LV/WJ/MY-11203963/organic-fertilizers-500x500.jpg"
              alt="fertilizer"
            />
            <Link style={{ textDecoration: "none" }} to="/fertilizer">
              {" "}
              <h5>FERTILIZER</h5>
            </Link>
          </span>
        </div>
      </Paper>
    </>
  );
}

export { Categories };
