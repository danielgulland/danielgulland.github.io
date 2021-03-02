const navSlide = () => {
    const nav_icon = document.querySelector('.nav-icon');
    const nav = document.querySelector('.tabs');
    const tabs = document.querySelectorAll('.tabs li');

    nav_icon.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        tabs.forEach((link, index) => 
        {
            if (link.style.animation) 
            {
                link.style.animation = '';
            }
            else 
            {
                link.style.animation = `tabsFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        nav_icon.classList.toggle('toggle');
    });
}

navSlide();