document.addEventListener('DOMContentLoaded', () => {
    const trainingCards = document.querySelectorAll('.training-card');

    trainingCards.forEach(card => {
        card.addEventListener('click', () => {
            // Pokud je karta již zvětšená, zavřít ji
            if (card.classList.contains('expanded')) {
                card.classList.remove('expanded');
                document.body.style.overflow = 'auto'; // Povolit scrollování
            } else {
                // Zavřít všechny ostatní zvětšené karty
                document.querySelectorAll('.training-card.expanded').forEach(expandedCard => {
                    expandedCard.classList.remove('expanded');
                });

                // Zvětšit aktuální kartu
                card.classList.add('expanded');
                document.body.style.overflow = 'hidden'; // Zakázat scrollování
            }
        });
    });
});