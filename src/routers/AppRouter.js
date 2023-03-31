
import { BrowserRouter ,Route,Switch} from 'react-router-dom'
import Header from "../components/Header";
import BlogListPage from "../components/BlogListPage";
import BlogDetailsPage from "../components/BlogDetailsPage";
import ContactPage from "../components/ContactPage";
import NotFoundPage from "../components/NotFoundPage";
import HomePage from "../components/HomePage";


const AppRouter = () => {
  return (
      <BrowserRouter>
          <div>
              <Header></Header>
              <Switch>
                  <Route path="/" component={HomePage} exact/>
                  <Route path="/blogs" component={BlogListPage} exact/>
                  <Route path="/blogs/:id" component={BlogDetailsPage} />
                  <Route path="/contact" component={ContactPage} />
                  <Route component={NotFoundPage} />
              </Switch>
          </div>
      </BrowserRouter>
  )
}

export default AppRouter