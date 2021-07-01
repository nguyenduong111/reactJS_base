import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Demo from './Demo'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Demo /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
/*
 truyền các phần tử jsx từ file Demo vào thẻ có id="root"(index.html) để chạy
*/

reportWebVitals();
/*
Theo mặc định, Create React App bao gồm một trình chuyển tiếp hiệu suất cho phép đo lường và phân tích hiệu suất của ứng dụng
  bằng các số liệu khác nhau.

Để đo lường bất kỳ chỉ số nào được hỗ trợ, chỉ cần chuyển một hàm vào reportWebVitals hàm trong index.js

Hàm này được kích hoạt khi các giá trị cuối cùng cho bất kỳ chỉ số nào đã hoàn tất tính toán trên trang.
Có thể sử dụng nó để ghi bất kỳ kết quả nào vào console hoặc gửi đến một điểm cuối cụ thể.

*/