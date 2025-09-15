// יצירת כוכבים ברקע
function createStars() {
    const starsContainer = document.querySelector('.stars');
    const numberOfStars = 1000;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// עדכון ספירת הזמן
function updateCounter() {
    const startDate = new Date('1994-06-12'); // ג' תמוז תשנ"ד
    const now = new Date();
    const diff = now - startDate;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const timeUnits = [
        { value: years, label: years === 1 ? 'שנה' : 'שנים' },
        { value: months, label: months === 1 ? 'חודש' : 'חודשים' },
        { value: days, label: days === 1 ? 'יום' : 'ימים' },
        { value: hours, label: hours === 1 ? 'שעה' : 'שעות' },
        { value: minutes, label: minutes === 1 ? 'דקה' : 'דקות' },
        { value: seconds, label: seconds === 1 ? 'שניה' : 'שניות' }
    ];

    const timeUnitsContainer = document.getElementById('timeUnits');
    timeUnitsContainer.innerHTML = '';

    timeUnits.forEach(unit => {
        const unitDiv = document.createElement('div');
        unitDiv.className = 'time-unit';
        unitDiv.innerHTML = `
                    <span class="time-number">${unit.value}</span>
                    <div class="time-label">${unit.label}</div>
                `;
        timeUnitsContainer.appendChild(unitDiv);
    });
}

// התחלת האתר
document.addEventListener('DOMContentLoaded', function () {
    createStars();
    updateCounter();
    setInterval(updateCounter, 1000);
});

// לא מאפשר קליק ימני
document.addEventListener('contextmenu', event => event.preventDefault());

// לא מאפשר זום עם Ctrl + גלגל עכבר
document.addEventListener('wheel', function (e) {
    if (e.ctrlKey) e.preventDefault();
}, { passive: false });

// לא מאפשר זום עם Ctrl + + או Ctrl + -
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && (e.key === '+' || e.key === '-' || e.key === '=')) {
        e.preventDefault();
    }
});