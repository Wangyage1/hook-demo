import React, { useState, useEffect } from 'react';
import { Button } from 'antd';

const UseEffectDemo = () => {
    const [count, setCount] = useState(0);

    // 相当于componentDidMount 和 componentDidUpdate
    // 即react组件在渲染后执行
    useEffect(() => {
        document.title = `you clicked ${count} times`;
    }, [count]);

    
    useEffect(() => {
        console.log('订阅');
        const timer = setInterval(() => {
            console.log(2333);
        }, 2000);

        return () => {
            console.log('清理');
            clearInterval(timer);
        };
    });

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div style={{ height: 600 }}>
            <div>you clicked {count} times</div>
            <Button onClick={handleClick}>Click me</Button>
        </div>
    );
};

export default UseEffectDemo;
