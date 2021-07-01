
import React from 'react';


function App() {

  var myNum1 = 3;
  var myNum2 = 2;
  var myObj = {
    name: "nguyen duong",
    age: 20
  };

  var myArr = [
    {
      id: 1,
      call: "mot"
    },
    {
      id: 2,
      call: "hai"
    },
    {
      id: 3,
      call: "ba"
    }
  ];

  var elems = myArr.map((elem, index) => {
    return (
      <div key={elem.id}>
        <h2>id: {elem.id} </h2>
        <p>ten: {elem.call} </p>
      </div>
    );
  });

  var course = {
    name: "javascript",
    coin: 400,
    status: true
  };

  function Course(course) {
    if(course.status) {
      return (
        <div className="Course">
          <h3>name: {course.name} </h3>
          <h3>coin: {course.coin} </h3>
          <h3>status: accept</h3>
        </div>

      );
    }
  }

  return (
    <div className="App">
      {/* trước khi jsx ra đời khi muốn render ra giao diện sử dụng 
          React.createElement("tên tag", {thuộc tính}, "nội dung");
          
          ví dụ:
          React.createElement("h1", {className="the h1", id="123"}, "nội dung");
        */}

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="" >Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="">
                  Dropdown
                  </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="">Action</a></li>
                  <li><a className="dropdown-item" href="">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      {/* hiển thị, tính toán các biến: đặt trong dấu {...} */}

      <h2>myNum1: {myNum1} </h2>
      <h2>myNum2: {myNum2} </h2>
      <h2>Sum = myNum1 + myNum2 = {myNum1 + myNum2} </h2>

      <h2 style={{ color: "#c00" }}>
        name: {myObj.name} <br/>
        age: {myObj.age}
      </h2>

      {/* demo hàm hiển thị */}
      {Course(course)}
      {/* lưu ý: nếu component đc định nghĩa bằng class thì phải gọi hàm qua toán tử this
        {this.Course(course)}
      */}
      <br/>
      <hr/>

      {elems}
      {/* lưu ý: trong callback khi return phải định nghĩa thuộc tính key(duy nhất) cho từng phần tử*/}

    </div>
  );
}

/*
  *lưu ý: return chỉ đc có duy nhất 1 khối bao bọc, nếu có nhiều hơn 1 khối ngoài return sẽ lỗi
    ví du; return (
        <div className="header">
          something
        </div>

        <div className="container">
          something
        </div>
    ); 
    //////////////////////////// LỖI
*/

export default App;
