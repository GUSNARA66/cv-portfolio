"use client";
import { useEffect, useRef } from "react";

export default function AnimeBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars = [];
    let dust = [];
    let meteors = [];
    let lightning = [];
    let angle = 0;
    let mouse = { x: 0, y: 0 };

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    // ===== STARS =====
    for (let i = 0; i < 160; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.6 + 0.3,
        speedX: Math.random() * 0.3 - 0.15,
        speedY: Math.random() * 0.3 - 0.15,
        opacity: Math.random(),
        blink: Math.random() * 0.02 + 0.01,
      });
    }

    // ===== COSMIC DUST =====
    for (let i = 0; i < 80; i++) {
      dust.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.25,
      });
    }

    function createMeteor() {
      meteors.push({
        x: Math.random() * canvas.width,
        y: 0,
        len: Math.random() * 140 + 80,
        speed: Math.random() * 9 + 7,
      });
    }

    function createLightning() {
      lightning.push({
        x: Math.random() * canvas.width,
        life: 8,
      });
    }

    setInterval(createMeteor, 2200);
    setInterval(createLightning, 5000);

    function drawGrid() {
      ctx.strokeStyle = "rgba(60,90,160,0.05)";
      for (let x = 0; x < canvas.width; x += 70) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
    }

    function drawNebula() {
      const g = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        50,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width * 0.9
      );

      g.addColorStop(0, "rgba(40,70,150,0.2)");
      g.addColorStop(0.5, "rgba(20,40,90,0.14)");
      g.addColorStop(1, "rgba(0,0,0,0)");

      ctx.fillStyle = g;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function drawAurora() {
      ctx.fillStyle = "rgba(80,160,255,0.05)";
      ctx.fillRect(
        0,
        canvas.height * 0.6 +
          Math.sin(angle) * 20,
        canvas.width,
        120
      );
    }

    function drawGalaxySwirl() {
      angle += 0.002;

      const cx = canvas.width / 2 + (mouse.x - canvas.width / 2) * 0.02;
      const cy = canvas.height / 2 + (mouse.y - canvas.height / 2) * 0.02;

      for (let i = 0; i < 45; i++) {
        const r = i * 12;
        const x = cx + Math.cos(angle + i) * r;
        const y = cy + Math.sin(angle + i) * r;

        ctx.fillStyle = `rgba(80,120,255,0.04)`;
        ctx.beginPath();
        ctx.arc(x, y, 38, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function drawPlanet() {
      const x = canvas.width * 0.8;
      const y = canvas.height * 0.25;

      ctx.fillStyle = "rgba(40,90,200,0.3)";
      ctx.beginPath();
      ctx.arc(x, y, 80, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = "rgba(100,150,255,0.2)";
      ctx.beginPath();
      ctx.ellipse(x, y, 120, 40, angle, 0, Math.PI * 2);
      ctx.stroke();
    }

    function drawStars() {
      stars.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        p.opacity += p.blink;
        if (p.opacity > 1 || p.opacity < 0.3) p.blink *= -1;

        ctx.shadowBlur = 6;
        ctx.shadowColor = "#6fa8ff";
        ctx.fillStyle = `rgba(170,200,255,${p.opacity})`;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function drawMeteors() {
      meteors.forEach((m, i) => {
        ctx.strokeStyle = "rgba(200,220,255,0.9)";
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x - m.len, m.y - m.len);
        ctx.stroke();

        m.x += m.speed;
        m.y += m.speed;

        if (m.x > canvas.width) meteors.splice(i, 1);
      });
    }

    function drawLightning() {
      lightning.forEach((l, i) => {
        ctx.strokeStyle = "rgba(180,200,255,0.8)";
        ctx.beginPath();
        ctx.moveTo(l.x, 0);
        ctx.lineTo(l.x + Math.random() * 50, canvas.height);
        ctx.stroke();

        l.life--;
        if (l.life <= 0) lightning.splice(i, 1);
      });
    }

    function drawWarp() {
      ctx.fillStyle = "rgba(120,170,255,0.02)";
      ctx.fillRect(
        mouse.x - 60,
        mouse.y - 60,
        120,
        120
      );
    }

    let last = 0;

    function animate(t) {
      const delta = t - last;
      last = t;

      if (delta < 18) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawGrid();
        drawNebula();
        drawAurora();
        drawGalaxySwirl();
        drawPlanet();
        drawStars();
        drawMeteors();
        drawLightning();
        drawWarp();
      }

      requestAnimationFrame(animate);
    }

    animate(0);

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
}
