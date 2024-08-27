// Unwrap Gift Interaction
document.getElementById('giftBox').addEventListener('click', function() {
    document.getElementById('giftContent').style.display = 'block';
    this.style.display = 'none';
});

// Additional Floating Hearts Animation
function createHearts() {
    const floatingHearts = document.querySelector('.floating-hearts');
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = 5 + Math.random() * 10 + 's';
        floatingHearts.appendChild(heart);
    }
}

createHearts();