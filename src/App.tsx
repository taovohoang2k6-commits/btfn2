import { Toaster } from "react-hot-toast";
import { Link, Routes, Route } from "react-router-dom";
import { Layout } from "antd";

import Dashboard from "./pages/Dashboard";

import Uers from "./pages/Uers";
import Product from "./pages/Product";
import Bai2 from "./pages/bai2";
import Bai4lab3 from "./pages/bai4";
import Bai3lab3 from "./pages/bai3lab3";
import Lab4 from "./pages/lab4";
import Categories from "./pages/categories";
import Lab5 from "./pages/lab5";
import Update from "./pages/update";
import Register from "./pages/Register";
import LOGIN from "./Login";
import { useAuthStore } from "./stores/useAuthStore";

const { Header, Content, Footer } = Layout;

function App() {
  const {user, logout} = useAuthStore()
  return (
    <Layout>
      {/* HEADER */}
      <Header style={{ background: "#fff", padding: 0 }}>
        <nav className="bg-blue-600 text-white shadow">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            
            <Link to="/" className="!text-white hover:text-gray-200">
              <strong>WEB2091 App</strong>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="!text-white">Trang chủ</Link>
              <Link to="/dashboard" className="!text-white">Dashboard</Link>
              <Link to="/users" className="!text-white">Users</Link>
              <Link to="/product" className="!text-white">Product</Link>
            </div>

<div className="hidden md:flex items-center space-x-6">
  {user ? (
    <>
      <span className="text-white">
        {user.email}
      </span>

      <span className="text-green-200">
        Đã đăng nhập
      </span>
 <button
                    onClick={logout}
                    className=""
                  >
                    Logout
                  </button>
    </>
  ) : (
    <Link to="/login" className="!text-white">
      Đăng nhập
    </Link>
  )}
</div>

          </div>
        </nav>
      </Header>

      {/* CONTENT */}
      <Content style={{ minHeight: "80vh" }}>
        <div className="max-w-6xl mx-auto mt-10 px-4 text-center">

          <Routes>
            <Route path="/" element={<h1>Trang chủ</h1>} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Uers />} />
            <Route path="/product" element={<Product />} />
            <Route path="/bai2" element={<Bai2 />} />
            <Route path="/bai4lab3" element={<Bai4lab3 />} />
            <Route path="/bai3lab3" element={<Bai3lab3 />} />
            <Route path="/lab4" element={<Lab4 />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/lab5" element={<Lab5 />} />
            <Route path="/update/:id" element={<Update />} />
            <Route path="/login" element={<LOGIN />} />
           
            <Route path="/register" element={<Register />} /> 

          </Routes>

        </div>
      </Content>

      {/* FOOTER */}
      <Footer style={{ textAlign: "center" }}>
        WEB2091 ©2026
      </Footer>

      <Toaster />
    </Layout>
  );
}

export default App;