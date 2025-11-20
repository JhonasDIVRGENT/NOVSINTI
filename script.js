document.addEventListener('DOMContentLoaded', () => {
    // WhatsApp Integration
    const form = document.getElementById('whatsappForm');
    const phoneNumber = '51940186312';

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('name');
            const name = nameInput.value.trim();

            if (!name) {
                alert('Por favor, ingresa tu nombre para separar tu cupo.');
                return;
            }

            // Construct the message
            const message = `Hola, soy ${name}. Me gustaría separar mi cupo para la clase "NOV SIN TI" del viernes 21.`;
            const encodedMessage = encodeURIComponent(message);

            // Create the WhatsApp URL
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

            // Open in new tab
            window.open(whatsappUrl, '_blank');
        });
    }

    // Google Calendar Integration
    const calendarBtn = document.getElementById('calendarBtn');
    if (calendarBtn) {
        calendarBtn.addEventListener('click', () => {
            const event = {
                title: 'NOV SIN TI - Clase de Danza',
                details: 'Clase suelta de movimiento contemporáneo con Jhonas. NeoDance Interface.',
                location: 'C. San José 303 – int N°07',
                start: '20251121T163000', // YYYYMMDDTHHMMSS
                end: '20251121T180000'
            };

            const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&details=${encodeURIComponent(event.details)}&location=${encodeURIComponent(event.location)}&dates=${event.start}/${event.end}`;

            window.open(googleCalendarUrl, '_blank');
        });
    }

    // NeoDance Modal Logic
    const neoBtn = document.getElementById('neodanceBtn');
    const modal = document.getElementById('neoModal');
    const closeBtn = document.querySelector('.close-modal');

    if (neoBtn && modal && closeBtn) {
        neoBtn.addEventListener('click', () => {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });

        const closeModal = () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        };

        closeBtn.addEventListener('click', closeModal);

        // Close on click outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }

    // 3D Tilt Effect for Glass Card
    const card = document.querySelector('.glass-card');
    const container = document.querySelector('.container');

    if (card && container && window.innerWidth > 768) {
        container.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;

            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        container.addEventListener('mouseenter', (e) => {
            card.style.transition = 'none';
        });

        container.addEventListener('mouseleave', (e) => {
            card.style.transition = 'all 0.5s ease';
            card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        });
    }
});
