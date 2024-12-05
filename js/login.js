var isVerify = false;
$(document).ready(function () {
    $('#mpanel1').slideVerify({
        type: 1,    // 类型
        vOffset: 5, // 误差量，根据需求自行调整
        barSize: {
            width: '80%',
            height: '40px',
        },
        success: function () {

            alert('验证成功，进行登录操作');
            isVerify = true;
            // 这里可以进行其他操作，比如发送 AJAX 请求
        },
        error: function () {
            alert('验证失败，请重新尝试！');
        }
    });

    // 表单提交
    $('#loginForm').on('submit', function (e) {
        e.preventDefault(); // 阻止默认的表单提交

        // 获取表单数据
        var username = $('#username').val();
        var password = $('#password').val();

        // 校验表单数据
        if (!username || !password || !isVerify) {
            alert('请确保所有字段都已填写且验证码验证成功！');
            return;
        }
        location.href = 'https://woaiwojia-1.github.io/Admissions-Office/';

    });
});
