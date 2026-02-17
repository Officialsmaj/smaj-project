// Project Filter Script
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // Project categories mapping
    const projectCategories = {
        'All Projects': 'all',
        'Commerce': ['Commerce', 'Marketplace'],
        'Services': ['Hub', 'Delivery', 'Jobs', 'Health', 'Education', 'Transport'],
        'Marketplace': ['Marketplace', 'Agriculture', 'Charity'],
        'Utilities': ['Utilities', 'Housing', 'Events']
    };

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filterValue = this.textContent;
            const categories = projectCategories[filterValue];

            // Filter projects
            projectCards.forEach(card => {
                const categorySpan = card.querySelector('.project-category');
                const projectCategory = categorySpan ? categorySpan.textContent.trim() : '';

                let shouldShow = false;

                if (categories === 'all') {
                    shouldShow = true;
                } else if (Array.isArray(categories)) {
                    shouldShow = categories.includes(projectCategory);
                }

                // Show or hide with animation
                if (shouldShow) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
});
