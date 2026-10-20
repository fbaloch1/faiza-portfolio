document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('mobile-menu-btn');
    const navigation = document.getElementById('nav-content');
    const mobile = window.matchMedia('(max-width: 767px)');
    if (button && navigation) {
        function closeMenu() {
            navigation.classList.toggle('mobile-collapsed', mobile.matches);
            button.hidden = !mobile.matches;
            button.setAttribute('aria-expanded', String(!mobile.matches));
        }
        closeMenu();
        mobile.addEventListener('change', closeMenu);
        button.addEventListener('click', () => {
            const collapsed = navigation.classList.toggle('mobile-collapsed');
            button.setAttribute('aria-expanded', String(!collapsed));
        });
        navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && mobile.matches && button.getAttribute('aria-expanded') === 'true') {
                closeMenu();
                button.focus();
            }
        });
    }
    const principles = [
        {text: '“The most important thing is to try and inspire people so that they can be great in whatever they want to do.”', label: 'Kobe Bryant'},
        {text: 'Small steps and consistent practice build stronger skills.', label: 'My approach to learning'},
        {text: 'Clear communication is part of every good solution.', label: 'My approach to teamwork'}
    ];
    let index = 0;
    const display = document.getElementById('quote-display');
    function updatePrinciple(direction) {
        if (!display) return;
        index = (index + direction + principles.length) % principles.length;
        display.querySelector('blockquote').textContent = principles[index].text;
        display.querySelector('p').textContent = principles[index].label;
    }
    document.getElementById('prev-quote')?.addEventListener('click', () => updatePrinciple(-1));
    document.getElementById('next-quote')?.addEventListener('click', () => updatePrinciple(1));
    document.getElementById('print-resume')?.addEventListener('click', () => window.print());
    document.querySelectorAll('.year-span').forEach(element => {
        element.textContent = new Date().getFullYear();
    });
});
