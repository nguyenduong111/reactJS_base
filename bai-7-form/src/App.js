
import React, {useState} from 'react'
import './App.css';

function App() {

  let [text, setText] = useState(
    {
      userName: "mac dinh",
      passWord: "mac dinh",
      desc: "mac dinh",
      sltGender: 0,
      lang: "vi",
      chkbStatus: false
    }
  );

  let onHandleChange = (e) => {
    let target = e.target;
    
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setText({
      ...text, [name] : value
    });

    // lỗi
    // setText({
    //   [name] : value
    // });

  }

  let onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
  }

  return (
    <div className="App" style={{textAlign:'left'}}>
      <div className="container mt-20">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            
            <div className="card">
              <div className="card-header">
                Forms
              </div>

              <div className="card-body">
                <form onSubmit={ onHandleSubmit }>

                  <div className="form-group mt-2">
                    <label>Username: </label>
                    <input 
                      type="text"  
                      name="userName" 
                      className="form-control"
                      style={{boxShadow:"none"}} 
                      onChange={ onHandleChange  }
                      value={text.userName}
                    />
                  </div>

                  <div className="form-group mt-2">
                    <label>Password: </label>
                    <input 
                      type="password"  
                      name="passWord" 
                      className="form-control"
                      style={{boxShadow:"none"}} 
                      onChange={ onHandleChange }
                      value={text.passWord}
                    />
                  </div>

                  <div className="form-group mt-2">
                    <label>Desc: </label>
                    <textarea 
                      className="form-control" 
                      name="desc" 
                       
                      rows="3"
                      onChange={ onHandleChange }
                      value={text.desc}
                    ></textarea>
                  </div>

                  <div className="form-group mt-2">
                    <label>Gender:</label>
                    <select 
                      className="form-control mt-2 box-shadow-none" 
                      name="sltGender"
                      onChange={ onHandleChange }
                      value={text.sltGender} 
                      >
                        <option value={1} >Nữ</option>
                        <option value={0} >Nam</option>
                    </select>
                  </div>

                  <div className="form-group mt-2">
                    <label>Language: </label>
                    <div className="radio">
                      <label className="form-check-label">
                        <input 
                          type="radio" 
                          className="form-check-input" 
                          name="lang" 
                           
                          value="vi"
                          onChange={ onHandleChange } 
                          checked={text.lang === "vi"} 
                        /> 
                        Vietnamese
                      </label>
                      <br/>
                      <label className="form-check-label">
                        <input 
                          type="radio" 
                          className="form-check-input" 
                          name="lang" 
                           
                          value="en"
                          onChange={ onHandleChange } 
                          checked={text.lang === "en"}
                        /> 
                        English
                      </label>

                    </div>
                  </div>
                  
                  <div className="form-group mt-2">
                    <label className="form-check-label">
                      <input 
                        type="checkbox" 
                        className="form-check-input" 
                        name="chkbStatus" 
                        value={ true } 
                        onChange= {onHandleChange}
                        checked={text.chkbStatus === true}
                      />
                      Status
                    </label>
                  </div>

                  <button type="submit" className="btn btn-primary mt-2 box-shadow-none">Submit</button> &nbsp;
                  <button type="reset" className="btn btn-warning mt-2 box-shadow-none">Reset</button>  
                </form>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
