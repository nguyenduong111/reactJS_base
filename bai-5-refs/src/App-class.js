
import './App.css';
import React, { useRef } from 'react';
import Product from './Components/Product'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.name = React.createRef();
    }  
    
    //   const name = useRef(null);
      
    onAddProducts = () => {
      const nameProductFind = this.name.current.value.toUpperCase();
      let isFind = false;
      for(let value of this.arrProducts) {
        if(this.value.name.toUpperCase() === nameProductFind) {
          alert(`đã thêm: ${value.name} vào giỏ hàng`);
          isFind = true
          break;
        }
      }
      if(!isFind) {
        alert(`không tìm thấy: ${this.name.current.value}`);
      }
    }
      
    onAddProductsEnter = (e) => {
      if(e.key === "Enter") {
        this.onAddProducts();
      }
    }
    
    OnShow = () => {
      console.log(this.name.current.value);
    }

    render() {

      let arrProducts = [
        { 
          img:"data:image/jpeg;base64,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",
          name:"tủ quần áo A",
          price:"10.000.000VNĐ",
          describe:"mô tả",
          status: true
        },
        { 
          img:"data:image/jpeg;base64,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",
          name:"tủ quần áo B",
          price:"10.000.000VNĐ",
          describe:"mô tả",
          status: true
        },
        { 
          img:"data:image/jpeg;base64,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",
          name:"tủ quần áo C",
          price:"10.000.000VNĐ",
          describe:"mô tả",
          status: true
        }
      ];

      let showProducts = arrProducts.map((product, index) => {
        if(product.status) {
          return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" key={index}>
                  <Product 
                    img={product.img}
                    name={product.name}
                    price={product.price}
                    describe={product.describe}
                  />
            </div>
          );
        } else {
          return "";
        }
      });

        return (
            <div className="App" style={{textAlign:"start"}}>
              
              <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </nav>
        
              <form style={{margin:"10px", border:"1px solid #333"}}>
                <div className="mb-3 form-check">
                  <label className="form-check-label" >DAT MUA SAN PHAM</label>
                  <input type="text" className="form-control" id="exampleInputPassword1" placeholder="ten san pham" 
                  style={{width:"50%", boxShadow:"none"}} ref={this.name} onKeyDown={this.onAddProductsEnter} />
                  <button className="btn btn-outline-success" type="button"
                   style={{boxShadow:"none" ,margin:"2px"}} onClick={this.OnShow} >
                      Order
                  </button>
                </div>
              </form>
        
              <div className="container">
                  <div className="row">
                    
                    {showProducts}
        
                  </div>     
              </div>
        
            </div>
        );
        
    }
}

export default App;