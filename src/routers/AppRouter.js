import React, { Component } from 'react'
import { BrowserRouter ,Route} from 'react-router-dom'
import Header from "../components/Header";
import BlogListPage from "../components/BlogListPage";
import BlogDetailsPage from "../components/BlogDetailsPage";
import ContactPage from "../components/ContactPage";
import NotFoundPage from "../components/NotFoundPage";
import HomePage from "../components/HomePage";
import {Routes} from 'react-router-dom'



export class AppRouter extends Component {
  render() {
    return (
     <BrowserRouter>
     <div>
     <Header>
        <Routes>
            <Route path='/' companent = {HomePage}/>
            <Route path='/blogs' companent = {BlogListPage}/>
            <Route path='/blogs:/id' companent = {BlogDetailsPage}/>
            <Route path='/contact' companent = {ContactPage}/>
            <Route companent = {NotFoundPage}/>

        </Routes>
     </Header>
     </div>
     </BrowserRouter>
    )
  }
}

export default AppRouter