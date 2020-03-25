// import React, { useState, useMemo } from 'react';
// import { Button } from 'antd';

// const UseMemoDemo = () => {
//     const [count, setCount] = useState(0);
//     const [a] = useState(0);
//     const [b] = useState(6);

//     const handleClick = () => {
//         setCount(count + 1);
//     };

//     const memoizedValue = useMemo(() => { 
//         return a + b;
//     }, [a, b]);

//     return (
//         <div style={{ height: 600 }}>
//             <div>you clicked {count} times</div>
//             <Button onClick={handleClick}>Click me</Button>
//             <div>{memoizedValue}</div>
//         </div>
//     );
// };

// export default UseMemoDemo;


import React, { Component } from 'react';
import { Button } from 'antd';

interface State {
    count: number;
}

class UseMemo extends Component<State> {

    state = {
        count: 0
    }

    public renderPanel = () => {
        console.log('执行吗');
        return <div> 这是一个panel</div>
    }

    public handleClick = () => {
        const { count } = this.state;

        this.setState({
            count: count + 1
        });
    }

    render() {
        return (
            <div style={{ height: 600 }}>
             <div>you clicked {this.state.count} times</div>
             <Button onClick={this.handleClick}>Click me</Button>
             <div>{this.renderPanel()}</div>
         </div>
        );
    }
}

export default UseMemo;