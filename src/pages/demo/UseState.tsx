import React, { useState } from 'react';
import { Button } from 'antd';

// 定义一个state变量
const UseStateDemo = () => {
    
    const [count, setCount] = useState(0);

    const handleClick = () => {
        // setCount(count + 1);
        setCount(count);
    };

    console.log('render吗');
    return ( 
        <div style={{ height: 600 }}>
            <div>you clicked {count} times</div>
            <Button onClick={handleClick}>Click me</Button>
        </div>
    );
};

export default UseStateDemo;


// import React, { Component } from 'react';
// import { Button } from 'antd';

// interface State {
//     count: number;
// }

// class UseState extends Component {
//     state: State = {
//         count: 0
//     }

//     private handleClick = () => {
//         const { count } = this.state;

//         this.setState({
//             count
//         })
//     }

//     render() {
//         const { count } = this.state;
//         console.log('render 了吗');
//         return (
//             <div style={{ height: 600 }}>
//              <div>you clicked {count} times</div>
//              <Button onClick={this.handleClick}>Click me</Button>
//          </div>
//         );
//     }
// }

// export default UseState;


// 定义多个state变量
// const UseStateDemo = () => {
    
//     const [age, setAge] = useState(42);
//     const [fruit, setFruit] = useState('banana');
//     const [todos, setTodos] = useState([{ text: '学习 Hook' }]);

//     const [sth, setSth] = useState({fruit: '香蕉', color: 'yellow'});

//     const handleClick = () => {
//         setSth({color: 'red'});
//     };

//     return ( 
//         <div style={{ height: 600 }}>
//             <div> fruit: {sth.fruit}, color: {sth.color}</div>
//             <Button onClick={handleClick}>Click me</Button>
//         </div>
//     );
// };

// export default UseStateDemo;