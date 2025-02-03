const lanzarConfetti = () => {
    const duration = 5 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
        confetti({
            particleCount: 5,
            spread: 90,
            origin: { y: 0.6 },
            colors: ['#ff0000', '#ff9a9e', '#fad0c4', '#ffdde1']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    };

    frame();
};

lanzarConfetti();
