
import './App.css';
import Header from './components/Header'
import Product from './components/Product'
import React from 'react';

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* cách khác
      <Header></Header>
        do trong thẻ Header ko có nội dung gì nên chỉ cần viết gọn như trên
      */}
      <h1 style={{margin:"none"}, {paddingBottom:"10px"}} > </h1>
      <div class="container" >
        <div class="row">
          <div class="col-xs-4 col-sm-4 col-lg-4">
            <Product />
          </div>
          <div class="col-xs-4 col-sm-4 col-lg-4">
            <Product />
          </div>
          <div class="col-xs-4 col-sm-4 col-lg-4">
            <Product />
          </div>
          {/* <div class="col-xs-3 col-sm-3 col-lg-3">
            <Product />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
