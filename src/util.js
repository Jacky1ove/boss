
export const getRedirectPath = (action) => {
    //根据用户信息返回跳转地址
    //user.type/boss/genius
    //user.type/bossinfo/geniusinfo
    let url = (action.data.type == 'boss')?'/boss':'/genius'

    if(action.avatar == ''){
        url += 'info'
    }
    return url
};
