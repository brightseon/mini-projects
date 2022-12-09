const circles = document.querySelectorAll('.circle');
const progress = document.querySelector('.progress');
const [prev, next] = document.querySelectorAll('.button');

let current = 1;

const init = () => {
    checkActive();
    checkDisable();
};

const checkDisable = () => {
    if (current === 1) {
        prev.classList.add('disable');
        return;
    }

    if (current === circles.length) {
        next.classList.add('disable');
        return;
    }

    prev.classList.remove('disable');
    next.classList.remove('disable');
};

const checkActive = () => {
    circles.forEach((circle, idx) => {
        if (idx + 1 <= current) {
            circle.classList.add('active');
            return;
        }

        circle.classList.remove('active');
    });
};

const fillProgress = () => {
    progress.style.width = `calc(${((current - 1) / (circles.length - 1)) * 100}%)`;
};

prev.addEventListener('click', () => {
    current = Math.max(1, current - 1);
});

next.addEventListener('click', () => {
    current = Math.min(circles.length, current + 1);
});

document.addEventListener('click', () => {
    checkActive();
    checkDisable();
    fillProgress();
});

init();
