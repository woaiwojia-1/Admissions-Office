// 轮播图部分
document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector('.imgs');
    const scrollAmount = 550; //每次滚动的距离
    let scrollInterval;

    function autoScroll() {
        // 如果未滚动到容器末尾
        if (scrollContainer.scrollLeft < (scrollContainer.scrollWidth - scrollContainer.clientWidth)) {
            scrollContainer.scrollBy({left: scrollAmount, top: 0, behavior: 'smooth'});
        } else {
            // 滚动到末尾后回到起点
            scrollContainer.scrollTo({left: 0, top: 0, behavior: 'smooth'});
        }
    }

    function startAutoScroll() {
        scrollInterval = setInterval(function () {
            autoScroll();
        }, 3000);
    }

    startAutoScroll();
});

// 活动内容滚动部分
const scrollContainer = document.querySelector('.activities');

//点击左右按钮时触发
document.getElementById('scrollLeft').addEventListener('click', function() {
    scrollContainer.scrollBy({left: -200, behavior: 'smooth'});
});

document.getElementById('scrollRight').addEventListener('click', function() {
    scrollContainer.scrollBy({left: 200, behavior: 'smooth'});
});



