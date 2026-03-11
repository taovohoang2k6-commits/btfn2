import { Toaster } from "react-hot-toast";
import { Link,Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Uers from "./pages/Uers";
import Product from "./pages/Product";
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header style={{ background: "#fff", padding: 0 }}>
        <nav className="bg-blue-600 text-white shadow">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link to="#" className="!text-white hover:text-gray-200">
              <strong>WEB2091 App</strong>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link to="#" className="!text-white hover:text-gray-200">
                Trang chủ
              </Link>
                <Link to="/dashboard" className="!text-white hover:text-gray-200">
                Dashboard 
              </Link>
              <Link to="/"className="!text-white hover:text-gray-200">
                Danh sách
              </Link>
              <Link to="/" className="!text-white hover:text-gray-200">
                Thêm mới
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <Link to="#" className="!text-white hover:text-gray-200">Đăng nhập</Link>
              <Link to="/login" className="!text-white hover:text-gray-200">Đăng ký</Link>
            </div>
          </div>
        </nav>
      </Header>

      <Content style={{ minHeight: "80vh" }}>
        <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
         
       
        <Routes>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/users" element={<Uers/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
      </Routes>
       </div>
      </Content>

      <Footer style={{ textAlign: "center" }}>
        WEB2091 ©2026
      </Footer>
      
      <Toaster />
    </Layout>
  );
}

export default App;
