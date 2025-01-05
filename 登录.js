function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // 计算输入密码的SHA3哈希值
    var passwordHash = CryptoJS.SHA3(password).toString();
    const validUsers = [
        {username: 'MYH', password: 'ee2a250f790da7c4fdfa839dd00702aeab7d93f237e112618e2c652b44c9a65fb42ffe586866a5f6eb56b7725558f59fa03a3e45c53ef24c9d1c95e1962d7620'},// 我1892641
        {username: 'LZT', password: 'f98effcee167c478c00359d6647b54da7b838bb5089f6010120dae85f3c8f091b82580242f05a02e6cbc7b8fc550b10527cd9d8c0bed5577375a8d8e66ccb22c'},// 梁仲亭8613728
        {username: 'LJX', password: '13b3531265bd1759cdb0b4719cd19ba9e0e237e084f3c9f43cb992aaf5e84aceb5955db7270ae77ef101c3da08d5a34439c555fe672d82d144cd01e4806d9255'},// 梁建贤7316248
        {username: 'LJT', password: '3d517cb5122b3ec48fdb56191d4ba2f0f24461ed0ecf0a45a8badd37b42f3646bdd5389f495090aafbd4fedc03812468a66eeb92d03adeef074ecf1861154550'},// 离建亭!!7486516
        {username: 'CWR', password: 'a2d59fefb5d1f3443f9b87e2dcb8adf08059d2f963b8d3a303e5f113536752294d3980ce9c8285df0368530ade811e35d05aceee2bddf8c717467ef1d15009ec'},// 陈伟锐8687741
        {username: 'WTH', password: 'f82fae36f01571094126671d61062fa9614a2f8c3c2c426a311e136ca28da8144e09906452b54e99c1b71e5b65b31ad303a09dc175b81ff56987baec8d6f6405'} // 吴天淏6654728
    ];
    
    // 检查输入的账号密码是否正确
    var isValid = validUsers.some(user => user.username === username && user.password === passwordHash);
    if (isValid) {
        // 如果正确，将用户名存储在 localStorage 中
        localStorage.setItem('loggedInUser', username);
        // 跳转到主页
        window.location.href = '主页.html';
    } else {
        alert('账号或密码错误，请重试。');
    }
}