import React, { Component, useRef } from 'react';
import { Button } from 'antd';

class Child extends Component {

    public childFun = () => {
        console.log('child Fun 被调用');
    };

    public render() {
        return <div>233</div>;
    }
}

const UseRefDemo = () => {
    const childRef = useRef(null);

    const handleClick = () => {
        const child = childRef.current || {childFun: () => {}};  
        child.childFun();
    };

    return (
        <div style={{ height: 600 }}>
            <Button onClick={handleClick}>点击调用子组件的函数</Button>
            <Child ref={childRef}/>
        </div>
    );
};

export default UseRefDemo;
