document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const response = document.getElementById('response');
    let noAttempts = 0;
    
    // Make the No button run away and count attempts
    noBtn.addEventListener('mouseover', () => {
        noAttempts++;
        const xMultiplier = Math.random() > 0.5 ? 1 : -1;
        const yMultiplier = Math.random() > 0.5 ? 1 : -1;
        
        noBtn.style.setProperty('--x-multiplier', xMultiplier);
        noBtn.style.setProperty('--y-multiplier', yMultiplier);

        // After 3 attempts, show the French message
        if (noAttempts >= 3) {
            response.textContent = "Tellement français... 🙄";
            response.style.display = 'block';
            
            // Reset the message after 2 seconds
            setTimeout(() => {
                response.textContent = '';
            }, 2000);
        }
    });
    
    // Add penguin waddle animation
    const penguin = document.querySelector('.penguin');
    penguin.addEventListener('click', () => {
        penguin.style.transform = 'scale(1.2)';
        setTimeout(() => {
            penguin.style.transform = 'scale(1)';
        }, 200);
    });
    
    // Handle Yes button click
    yesBtn.addEventListener('click', () => {
        // Hide the buttons
        document.querySelector('.buttons').style.display = 'none';
        
        // Show success message with typing effect
        const message = "Tu me rends la personne la plus heureuse du monde! Mon petit pingouin d'amour! 🐧❤️";
        let i = 0;
        
        response.style.display = 'block';
        response.textContent = '';
        
        const typing = setInterval(() => {
            if (i < message.length) {
                response.textContent += message.charAt(i);
                i++;
            } else {
                clearInterval(typing);
                createHeartShower();
            }
        }, 50);
    });
});

function createHeartShower() {
    const elements = ['❤️', '🐧', '💖', '💝', '💕', '🎀'];
    const container = document.querySelector('.container');
    
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.className = 'falling-heart';
        heart.textContent = elements[Math.floor(Math.random() * elements.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        heart.style.opacity = Math.random();
        heart.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
        container.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

// Add this CSS for falling hearts animation
const style = document.createElement('style');
style.textContent = `
    .falling-heart {
        position: fixed;
        top: -20px;
        animation: fall linear forwards;
        z-index: 1000;
    }
    
    @keyframes fall {
        to {
            transform: translateY(100vh);
        }
    }
`;
document.head.appendChild(style); 