const panels = document.querySelectorAll('.panel');

const click = (e) => {
    if (e.target.classList.contains('active')) return;

    const [current] = Array.from(panels).filter((panel) => panel.classList.contains('active'));

    current.classList.remove('active');
    e.target.classList.add('active');
};

function init() {
    // document.addEventListener('click', click);
    panels.forEach((panel) => panel.addEventListener('click', click));
}

init();
