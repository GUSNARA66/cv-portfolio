"use client";
import { useEffect, useRef } from "react";

export default function AnimeBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    let stars = [];
    let sakura = [];
    let meteors = [];
    let lightning = [];
    let explosions = [];
    let angle = 0;
    let mouse = { x: 0, y: 0 };
    let scrollY = 0;

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener("scroll", () => {
      scrollY = window.scrollY * 0.15;
    });

    // ===== STAR FIELD =====
    for (let i = 0; i < 170; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.6 + 0.3,
        speedX: Math.random() * 0.2 - 0.1,
        speedY: Math.random() * 0.2 - 0.1,
        opacity: Math.random(),
        blink: Math.random() * 0.02 + 0.01,
      });
    }

    // ===== SAKURA PARTICLES =====
    for (let i = 0; i < 60; i++) {
      sakura.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 0.6 + 0.2,
        rot: Math.random() * 360,
      });
    }

    function createMeteor() {
      meteors.push({
        x: Math.random() * canvas.width,
        y: 0,
        len: Math.random() * 140 + 80,
        speed: Math.random() * 7 + 6,
      });
    }

    function createLightning() {
      lightning.push({
        x: Math.random() * canvas.width,
        life: 6,
      });
    }

    function createExplosion(x, y) {
      for (let i = 0; i < 20; i++) {
        explosions.push({
          x,
          y,
          dx: Math.random() * 4 - 2,
          dy: Math.random() * 4 - 2,
          life: 20,
        });
      }
    }

    canvas.addEventListener("click", (e) => {
      createExplosion(e.clientX, e.clientY);
    });

    setInterval(createMeteor, 2600);
    setInterval(createLightning, 6000);

    function drawGalaxySwirl() {
      angle += 0.002;

      const cx = canvas.width / 2 + (mouse.x - canvas.width / 2) * 0.03;
      const cy = canvas.height / 2 + (mouse.y - canvas.height / 2) * 0.03;

      for (let i = 0; i < 40; i++) {
        const r = i * 12;
        const x = cx + Math.cos(angle + i) * r;
        const y = cy + Math.sin(angle + i) * r + scrollY;

       ctx.fillStyle = "rgba(0,242,255,0.05)";
        ctx.beginPath();
        ctx.arc(x, y, 36, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function drawAnimeSilhouette() {
      const x = canvas.width * 0.12;
      const y = canvas.height * 0.75 + scrollY * 0.3;

      ctx.fillStyle = "rgba(60,90,160,0.12)";
      ctx.beginPath();
      ctx.arc(x, y, 90, 0, Math.PI * 2);
      ctx.fill();
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

    function drawSakura() {
      sakura.forEach((s) => {
        s.y += s.speed;
        s.rot += 0.5;

        if (s.y > canvas.height) s.y = 0;

        ctx.fillStyle = "rgba(255,170,200,0.35)";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function drawExplosions() {
      explosions.forEach((e, i) => {
        ctx.fillStyle = "rgba(120,180,255,0.6)";
        ctx.beginPath();
        ctx.arc(e.x, e.y, 2, 0, Math.PI * 2);
        ctx.fill();

        e.x += e.dx;
        e.y += e.dy;
        e.life--;

        if (e.life <= 0) explosions.splice(i, 1);
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

    let last = 0;
    
    function drawMatrix() {
  ctx.fillStyle = "rgba(0,255,170,0.04)";
  ctx.font = "14px monospace";

  for (let i = 0; i < 30; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;

    ctx.fillText(
      Math.random() > 0.5 ? "1" : "0",
      x,
      y
    );
  }
}
    function animate(t) {
      const delta = t - last;
      last = t;

      if (delta < 20) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawGalaxySwirl();
        drawAnimeSilhouette();
        drawStars();
        drawSakura();
        drawMeteors();
        drawLightning();
        drawExplosions();
        drawMatrix(); 
      }

      requestAnimationFrame(animate);
    }

    animate(0);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
}
