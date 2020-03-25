// 父组件调用子组件

import React, { memo, useRef, useImperativeHandle, forwardRef } from 'react';
import { Button } from 'antd';

const Child = (props: any, ref:any) => {

    useImperativeHandle(ref, () => ({
        childFun: () => console.log('child function 被调用')
    }))
    return <h1>子组件</h1>
};

const ChildRen = forwardRef(Child);

const Father = () => {

    const childRef = useRef(null);

    const handleClick = () => {
        const child = childRef.current || {childFun:() =>{}}
        child.childFun();
    }

    return <div>
        <div>这是父组件</div>
        <Button onClick={handleClick}>点击我调用子组件的函数</Button>
        <ChildRen ref={childRef} />
    </div>
}

export default memo(Father);
