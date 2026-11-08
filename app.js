// Ініціалізація Telegram Web App
const tg = window.Telegram.WebApp;

// Підготовка та розгортання
tg.ready();
tg.expand();
tg.setHeaderColor('#000000');
tg.setBackgroundColor('#000000');

// Отримання імені користувача з Telegram
if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
    const user = tg.initDataUnsafe.user;
    const name = user.first_name || 'Студент';
    document.querySelector('.username').textContent = name;
}

// --- Логіка інтерфейсу ---

const videoPreview = document.getElementById('videoPreview');
const navItems = document.querySelectorAll('.nav-item');
const moduleItems = document.querySelectorAll('.module-item');

// Клік по відео
videoPreview.addEventListener('click', () => {
    if (tg.HapticFeedback) tg.HapticFeedback.impactOccurred('medium');
    // Тут в майбутньому буде відкриття плеєра
});

// Перемикання нижнього меню
navItems.forEach(item => {
    item.addEventListener('click', function() {
        if (tg.HapticFeedback) tg.HapticFeedback.selectionChanged();
        
        navItems.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
        
        const page = this.getAttribute('data-page');
        console.log('Перехід на вкладку:', page);
        
        // Логіка зміни сторінок (в майбутньому)
        // if (page === 'home') { ... }
    });
});

// Клік по модулях
moduleItems.forEach(item => {
    item.addEventListener('click', function() {
        if (this.classList.contains('locked')) {
            if (tg.HapticFeedback) tg.HapticFeedback.notificationOccurred('error');
            tg.showAlert('Цей модуль ще заблоковано. Спочатку завершіть Модуль 1.');
        } else {
            if (tg.HapticFeedback) tg.HapticFeedback.impactOccurred('light');
            // Логіка переходу до списку уроків модуля
        }
    });
});