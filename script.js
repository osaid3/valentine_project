document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const response = document.getElementById('response');
    let noAttempts = 0;
    let yesAttempts = 0;
    
    // Function to handle No button clicks
    function handleNoClick() {
        noAttempts++;
        
        // Show message every 5 attempts
        if (noAttempts % 5 === 0) {
            const messages = [
                "Such a french...🙄",
                "Stop being a French already Monia!!"
            ];
            response.textContent = messages[(noAttempts/5 - 1) % messages.length];
            response.style.display = 'block';
            
            setTimeout(() => {
                response.textContent = '';
                response.style.display = 'none';
            }, 2000);
        }
    }
    
    // Handle both mouse and touch events for the No button
    noBtn.addEventListener('click', handleNoClick);
    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        handleNoClick();
    });
    
    // Handle Yes button click
    function handleYesClick() {
        yesAttempts++;
        
        if (yesAttempts === 1) {
            response.textContent = "Pfft Did you think it will be that easy, new yorker? Try again";
            response.style.display = 'block';
            setTimeout(() => {
                response.textContent = '';
                response.style.display = 'none';
            }, 5000);
        } else if (yesAttempts === 3) {
            // Create new page content
            document.body.innerHTML = `
                <div style="
                    background: url('images/library.jpg') no-repeat center center fixed;
                    background-size: cover;
                    width: 100vw;
                    height: 100vh;
                    margin: 0;
                    padding: 0;
                    position: fixed;
                    top: 0;
                    left: 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    color: white;
                    font-family: 'Pacifico', cursive;
                ">
                    <div style="
                        background: rgba(0, 0, 0, 0.7);
                        padding: 2rem;
                        border-radius: 20px;
                        margin-bottom: 2rem;
                        max-width: 90%;
                    ">
                        <h1 style="font-size: 2.5rem; margin-bottom: 2rem;">Congrats you are third in the queue..</h1>
                        <h2 style="font-size: 2rem; margin-bottom: 2rem;">JK</h2>
                    </div>
                    <img src="images/michael_scott.jpg" alt="Michael Scott" style="
                        max-width: 300px;
                        width: 90%;
                        border-radius: 15px;
                        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
                    ">
                </div>
            `;
            // Add CSS to ensure full screen
            document.body.style.margin = '0';
            document.body.style.overflow = 'hidden';
        }
    }
    
    yesBtn.addEventListener('click', handleYesClick);
    yesBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        handleYesClick();
    });
});

function createHeartShower() {
    const elements = ['❤️', '🐧', '💖', '💝', '💕', '🎀'];
    const container = document.querySelector('.container');
    const isMobile = window.innerWidth <= 768;
    const heartCount = isMobile ? 15 : 30; // Fewer hearts on mobile
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'falling-heart';
        heart.textContent = elements[Math.floor(Math.random() * elements.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        heart.style.opacity = Math.random();
        heart.style.fontSize = (Math.random() * (isMobile ? 1 : 1.5) + 1) + 'rem';
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

// Add this CSS for falling hearts animation and mobile optimization
const style = document.createElement('style');
style.textContent = `
    .buttons {
        position: relative;
        min-height: 100px;
        margin: 2rem 0;
    }

    .no-btn {
        position: absolute;
        transition: none !important;
    }

    .falling-heart {
        position: fixed;
        top: -20px;
        animation: fall linear forwards;
        z-index: 1000;
        pointer-events: none;
    }
    
    @keyframes fall {
        to {
            transform: translateY(100vh);
        }
    }

    .response {
        min-height: 3rem;
        font-size: 1.5rem;
        color: #ff69b4;
        margin-top: 1rem;
    }
`;
document.head.appendChild(style); 