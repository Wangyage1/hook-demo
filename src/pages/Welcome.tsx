import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import './Welcome.less';

const WelcomePage = () => {
    // 定义一个count的state变量
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        console.log('执行...', count);
        return () => {
            console.log('清理...', count);
        }
    }, [count]);

    console.log('想知道渲染了几次');
    return ( 
        <div style={{ height: 600 }}>
            <div>you clicked {count} times</div>
            <Button onClick={handleClick}>Click me</Button>
        </div>
    );
};

export default WelcomePage;
