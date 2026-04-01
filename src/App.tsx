// import { Toaster } from "react-hot-toast";
// import { Link,Routes, Route } from "react-router-dom";
// import { Layout } from "antd";
// import Dashboard from "./pages/Dashboard";
// import Login from "./pages/Login";
// import Uers from "./pages/Uers";
// import Product from "./pages/Product";
// import Bai2 from "./pages/bai2";
// import Bai4lab3 from "./pages/bai4"
// import Bai3lab3  from "./pages/bai3lab3"
// import Lab4 from "./pages/lab4";
// import Categories from "./pages/categories";
// import Lab5 from "./pages/lab5";
// import Update from "./pages/update";
// const { Header, Content, Footer } = Layout;

import Header from "./components/Header";
import { useUser } from "./context/UserContext";

function App() {
  const { setUser } = useUser();

  const handleLogin = () => {
    setUser({
      name: "hoadv21",
      avatar: "https://i.pravatar.cc/150",
    });
  };

  const handleLogout = () => {
    setUser(null);
  };
  return (
    <>
      <Header />

      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
    // <Layout>
    //   <Header style={{ background: "#fff", padding: 0 }}>
    //     <nav className="bg-blue-600 text-white shadow">
    //       <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
    //         <Link to="#" className="!text-white hover:text-gray-200">
    //           <strong>WEB2091 App</strong>
    //         </Link>

    //         <div className="hidden md:flex items-center space-x-8">
    //           <Link to="#" className="!text-white hover:text-gray-200">
    //             Trang chủ
    //           </Link>
    //             <Link to="/dashboard" className="!text-white hover:text-gray-200">
    //             Dashboard 
    //           </Link>
    //           <Link to="/"className="!text-white hover:text-gray-200">
    //             Danh sách
    //           </Link>
    //           <Link to="/" className="!text-white hover:text-gray-200">
    //             Thêm mới
    //           </Link>
    //         </div>

    //         <div className="hidden md:flex items-center space-x-6">
    //           <Link to="#" className="!text-white hover:text-gray-200">Đăng nhập</Link>
    //           <Link to="/login" className="!text-white hover:text-gray-200">Đăng ký</Link>
    //         </div>
    //       </div>
    //     </nav>
    //   </Header>

    //   <Content style={{ minHeight: "80vh" }}>
    //     <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
         
       
    //     <Routes>
    //     <Route path="/dashboard" element={<Dashboard/>}></Route>
    //     <Route path="/login" element={<Login/>}></Route>
    //     <Route path="/users" element={<Uers/>}></Route>
    //     <Route path="/product" element={<Product/>}></Route>
    //     <Route path="/bai2" element={<Bai2/>}></Route>
    //     <Route path="/bai4lab3" element={<Bai4lab3/>}></Route>
    //     <Route path="/bai3lab3" element={<Bai3lab3/>}></Route>
    //     <Route path="/lab4" element={<Lab4/>}></Route>
    //     <Route path="/categories" element={<Categories/>}></Route>
    //     <Route path="/lab5" element={<Lab5/>}></Route>
    //     <Route path="/update/:id" element={<Update/>}></Route>
    //   </Routes>
    //    </div>
    //   </Content>

    //   <Footer style={{ textAlign: "center" }}>
    //     WEB2091 ©2026
    //   </Footer>
      
    //   <Toaster />
    // </Layout>

export default App;
