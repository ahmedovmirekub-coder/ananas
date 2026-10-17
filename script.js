function showSection(id) {
    scrollToSection(id);
}

function showToast(message) {
    // Находим контейнер для всплывающих уведомлений по ID
    const container = document.getElementById('toast-container');

    // Создаём новый элемент <div> для уведомления
    const toast = document.createElement('div');

    // Задаём CSS-классы стилей для уведомления
    toast.className = 'bg-navy-900 text-white px-4 py-3 rounded-xl shadow-xl text-sm border border-slate-700/50 flex items-center gap-3 transition-all duration-300 transform translate-y-2 opacity-0';

    // Заполняем содержимое уведомления (иконка и текст)
    toast.innerHTML = `
        <i class="fa-solid fa-circle-check text-terracotta-500"></i>
        <span>${message}</span>
    `;

    // Добавляем уведомление в контейнер
    container.appendChild(toast);

    // Задержка для анимации появления (убираем прозрачность и смещение)
    setTimeout(() => {
        toast.classList.remove('translate-y-2', 'opacity-0');
    }, 10);

    // Задержка для скрытия и удаления уведомления через 3 секунды (3000 мс)
    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-2');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}