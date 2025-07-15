
document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const messageDiv = document.getElementById('message');
    const heartsContainer = document.getElementById('heartsContainer');

    // Messages for Yes and No
    const yesMessages = [
        "Yay! I knew it! ❤️",
        "i really like you! 😊",
        "That's the best answer ever! 🥰",
        "You make me so happy! 😄",
        "I love you too! 😘"
    ];

    const noMessages = [
        "Aww, try again! 😉",
        "Are you sure? Just one more try! 🥺",
        "My heart just broke a little... 💔 (Just kidding, try again!)",
        "Don't play with my feelings! 😂 Try clicking 'Yes'!",
        "Hmm, I think you misclicked! Try again! 🤔"
    ];

    // Yes button click handler
    yesBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * yesMessages.length);
        messageDiv.textContent = yesMessages[randomIndex];
        messageDiv.style.color = '#e91e63'; // Red for love
        resetNoButtonPosition(); // Reset No button if it moved
    });

    // No button hover (makes it run away!)
    noBtn.addEventListener('mouseover', () => {
        // Only move if the message is not already showing a "yes" message
        if (!messageDiv.textContent.includes("Yay!") && !messageDiv.textContent.includes("My heart just skipped a beat!")) {
            const container = noBtn.parentElement;
            const containerRect = container.getBoundingClientRect();
            const btnRect = noBtn.getBoundingClientRect();

            // Calculate new position within the wrapper, with some padding
            // We want it to stay within the 'buttons-wrapper' div
            const minX = 0;
            const maxX = containerRect.width - btnRect.width;
            const minY = 0;
            const maxY = containerRect.height - btnRect.height;

            const newX = Math.random() * maxX;
            const newY = Math.random() * maxY;

            // Set the position relative to its parent 'buttons-wrapper'
            noBtn.style.position = 'absolute';
            noBtn.style.left = `${newX}px`;
            noBtn.style.top = `${newY}px`;
            noBtn.style.transition = 'all 0.1s ease'; // Smooth transition for movement
        }
    });

    // No button click handler (just in case they manage to click it)
    noBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * noMessages.length);
        messageDiv.textContent = noMessages[randomIndex];
        messageDiv.style.color = '#8e44ad'; // Purple for a bit of mischief
        resetNoButtonPosition(); // Reset its position after click
    });

    // Function to reset No button position
    function resetNoButtonPosition() {
        noBtn.style.position = 'static'; // Reset to normal flow
        noBtn.style.left = 'auto';
        noBtn.style.top = 'auto';
        noBtn.style.transition = 'none'; // Remove transition for instant reset
    }

    // --- Dynamic Hearts Background ---
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heartsContainer.appendChild(heart);

        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 5 + 5 + 's'; // 5-10s
        heart.style.animationDelay = Math.random() * 2 + 's';
        heart.style.opacity = Math.random() * 0.7 + 0.3; // 0.3 to 1 opacity
        heart.style.fontSize = Math.random() * 10 + 10 + 'px'; // 10-20px size variation

        // Remove heart after animation to prevent DOM clutter
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }

    // Create hearts at intervals
    setInterval(createHeart, 300); // Create a new heart every 300ms
});
