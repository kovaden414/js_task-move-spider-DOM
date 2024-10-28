"use strict";
document.addEventListener("click", (e)=>{
    const spider = document.querySelector(".spider");
    const wall = document.querySelector(".wall");
    // const spiderWidth = spider.offsetWidth;
    // const spiderHeight = spider.offsetHeight;
    const spiderSize = spider.getBoundingClientRect();
    const wallRect = wall.getBoundingClientRect();
    if (e.clientX >= wallRect.left && e.clientX <= wallRect.right && e.clientY >= wallRect.top && e.clientY <= wallRect.bottom) {
        // Calculate target position
        let targetX = e.clientX - wallRect.left - spiderSize.width / 2 - 10;
        let targetY = e.clientY - wallRect.top - spiderSize.height / 2 - 10;
        // Constrain within wall boundaries
        targetX = Math.max(0, Math.min(targetX, wallRect.width - spiderSize.width - 20));
        targetY = Math.max(0, Math.min(targetY, wallRect.height - spiderSize.height - 20));
        // Move the spider to the new position
        spider.style.left = `${targetX}px`;
        spider.style.top = `${targetY}px`;
    }
});

//# sourceMappingURL=index.f75de5e1.js.map
