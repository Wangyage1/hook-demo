import React, { memo } from 'react';

const useFriendStatus = (id: number) => {
    
    // 查询当前id 的状态
    return 'on';
};

const CustomHook = () => {
    const friendId = 100;
    const status = useFriendStatus(friendId);
    return (
        <div>
            <div>自定义Hook</div>
            <div>{friendId} : {status}</div>
        </div>
    );
};

export default memo(CustomHook);

