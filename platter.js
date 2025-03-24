
document.addEventListener('DOMContentLoaded', function() {
    const toggleMoreButton = document.getElementById('toggle-more');
    const productsGrid = document.getElementById('products-grid');
    const productCards = productsGrid.querySelectorAll('.product-card');
    let showingMore = false;
    productCards.forEach(card => {
        const mainImage = card.querySelector('.product-image-main');
        const hoverImage = card.querySelector('.product-image-hover');
        card.addEventListener('mouseenter', () => {
            if (hoverImage) hoverImage.style.opacity = '1';
        });
        card.addEventListener('mouseleave', () => {
            if (hoverImage) hoverImage.style.opacity = '0';
        });
        card.addEventListener('click', () => {
            if (hoverImage) {
                const isVisible = hoverImage.style.opacity === '1';
                hoverImage.style.opacity = isVisible ? '0' : '1';
            }
        });
    });

    function showInitialProducts() {
        if (window.innerWidth <= 768) {
            productCards.forEach((card, index) => {
                if (index >= 4) {
                    card.classList.add('hidden');
                }
            });
            toggleMoreButton.textContent = 'Show More';
            showingMore = false;
        } else {
            productCards.forEach(card => {
                card.classList.remove('hidden');
            });
        }
    }

    function toggleProducts() {
        if (showingMore) {
            productCards.forEach((card, index) => {
                if (index >= 4) {
                    card.classList.add('hidden');
                }
            });
            toggleMoreButton.textContent = 'Show More';
        } else {
            productCards.forEach(card => {
                card.classList.remove('hidden');
            });
            toggleMoreButton.textContent = 'Show Less';
        }
        showingMore = !showingMore;
    }

    toggleMoreButton.addEventListener('click', toggleProducts);
    window.addEventListener('resize', showInitialProducts);

    showInitialProducts();
    const productCard = document.querySelector('.product-card');
    const mainImage = productCard.querySelector('.product-image-main');
    const hoverImage = productCard.querySelector('.product-image-hover');

    productCard.addEventListener('mouseenter', () => {
    hoverImage.classList.remove('opacity-0');
    hoverImage.classList.add('opacity-100');
    mainImage.classList.add('opacity-0');
    });

    productCard.addEventListener('mouseleave', () => {
    hoverImage.classList.remove('opacity-100');
    hoverImage.classList.add('opacity-0');
    mainImage.classList.remove('opacity-0');
    });

});