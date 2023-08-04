import { useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Avatar from '../assets/cat.png';

const Body = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const bubbles = [];

    class Bubble {
      constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speedY = Math.random() * 3 + 1;
        this.speedX = Math.random() * 3 - 1.5;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.fill();
      }

      update() {
        this.y -= this.speedY;
        this.x += this.speedX;

        if (this.y + this.radius < 0) {
          this.y = canvas.height + this.radius;
        }
        if (this.x - this.radius > canvas.width || this.x + this.radius < 0) {
          this.x = Math.random() * canvas.width;
        }

        this.draw();
      }
    }

    function createBubbles() {
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 10 + 5;
        bubbles.push(new Bubble(x, y, radius));
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const bubble of bubbles) {
        bubble.update();
      }
    }

    createBubbles();
    animate();
  }, []);

  return (
    <div id="body" className="body">
      <canvas ref={canvasRef} style={{ position: 'absolute', zIndex: -1 }} />
      <div className="body-container">
        <div className="body-profile">
          <img className="body-img" alt='avatar' src={Avatar} />

          <div className="body-content">
            <div className="body-headline">Cat Hu</div>
            <div className="body-text">Software Engineer</div>
          </div>

          <div className="body-icons">
            <a href="https://github.com/emuacat" target="_blank" rel="noreferrer" className="icon-link"><i><FaGithub /></i> </a>
            <a href="https://www.linkedin.com/in/cat-jieting-hu-085b11280/" target="_blank" rel="noreferrer" className="icon-link"><i><FaLinkedin /></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body;
