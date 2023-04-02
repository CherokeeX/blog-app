import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import configureStores from "./stores/configureStores";
import reportWebVitals from "./reportWebVitals";
import AppRouter from "./routers/AppRouter";
import { addBlog, removeBlog, editBlog } from "./actions/blogs";
import { Provider } from "react-redux";

const store = configureStores();
store.subscribe(() => {
  console.log(store.getState());
});

const blog1 = store.dispatch(
  addBlog({ title: "Blog title 1", description: "Blog Description 1" })
);
const blog2 = store.dispatch(
  addBlog({
    title: "Blog title 2",
    description: "Blog Description 2",
    dateAdded: Date.now(),
  })
);

store.dispatch(removeBlog({ id: blog1.blog.id }));
store.dispatch(
  editBlog(blog2.blog.id, {
    title: "Upgrated title info",
    description: "New description....",
    country: "TURKEY",
  })
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Provider store={store}> <AppRouter />    </Provider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
