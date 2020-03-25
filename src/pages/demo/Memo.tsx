import React, { memo, useState } from 'react';
import { Button } from 'antd';


const Child = (props: {count: number}) => {
    console.log('child render ');
    
    return <div>被点击了{props.count}次</div>
};

const Children = memo(Child, (prevProps: {}, props: {}) => {
    console.log('prevProps', prevProps);
    console.log('props', props);
    return true; // return true 会跳过更新
});


const MemoDemo = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    }

    return <div>
        <Button onClick={handleClick}>点击</Button>
        <Children count={count}/>
    </div>
};




export default memo(MemoDemo);
