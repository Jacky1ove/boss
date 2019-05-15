
export const getRedirectPath = (action) => {
    //根据用户信息返回跳转地址
    //user.type/boss/genius
    //user.type/bossinfo/geniusinfo
    console.log(action)
    let url = (action.type == 'boss')?'/boss':'/genius'

    if(action.avatar === undefined){
        url += 'info'
    }
    return url
};
