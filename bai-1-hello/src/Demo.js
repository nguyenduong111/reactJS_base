
import React, {Component} from 'react'
// import thư viện, file sử dụng

// import App from './App';
// lưu ý thư viện, file nào ko sử dụng thì ko nên import 


class Demo extends Component {    // khởi tạo class Demo kế thừa(extends) từ Componet
    render() {
        return (
            <div>
                <h1>pig xii</h1>
            </div>
        );
    }
}

/* Mỗi React component bắt buộc phải có hàm render(). Hàm render() trả về duy nhất React element.
    Nếu bạn cần trả về nhiều React element thì phải nhóm chúng trong một thẻ
*/

export default Demo;
// export nghĩa là xuất ra ngoài để các file khác có thể import nó  