import { useEffect, useRef, useState } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
  twinkleSpeed: number;
  twinkleOffset: number;
  layer: number;
}

interface Constellation {
  points: { x: number; y: number }[];
  color: string;
  glowUntil: number;
  pulseUntil: number;
}

interface HeavenlyBody {
  x: number;
  y: number;
  radius: number;
  color: string;
  opacity: number;
  layer: number;
  orbitSpeed: number;
  orbitRadius: number;
  orbitAngle: number;
  pulseUntil: number;
}

const CosmicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDark, setIsDark] = useState(false);
  const [useFallback, setUseFallback] = useState(false);
  const starsRef = useRef<Star[]>([]);
  const constellationsRef = useRef<Constellation[]>([]);
  const heavenlyBodiesRef = useRef<HeavenlyBody[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollOffsetRef = useRef(0);
  const animationFrameRef = useRef<number>();
  const fpsRef = useRef({ frames: 0, lastTime: performance.now(), currentFPS: 60 });
  const prefersReducedMotion = useRef(window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  // Check theme
  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  // Initialize stars, constellations, and heavenly bodies
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || useFallback) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeStars();
      initializeConstellations();
      initializeHeavenlyBodies();
    };

    const initializeStars = () => {
      const numStars = isDark ? 70 : 50;
      const colors = isDark 
        ? ['hsl(182 56% 48%)', 'hsl(254 29% 51%)', 'hsl(0 0% 67%)'] // cyan, purple, white
        : ['hsl(206 82% 91%)', 'hsl(262 48% 88%)', 'hsl(46 67% 79%)']; // blue, lavender, gold
      
      starsRef.current = Array.from({ length: numStars }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        twinkleSpeed: Math.random() * 0.008 + 0.004, // Slower: 4-8s cycles
        twinkleOffset: Math.random() * Math.PI * 2,
        layer: Math.random() * 3 + 1 // 1-4 for parallax depth
      }));
    };

    const initializeConstellations = () => {
      const numConstellations = 4;
      constellationsRef.current = Array.from({ length: numConstellations }, () => {
        const numPoints = Math.floor(Math.random() * 3) + 3;
        const centerX = Math.random() * canvas.width;
        const centerY = Math.random() * canvas.height;
        const radius = 80 + Math.random() * 40;
        
        return {
          points: Array.from({ length: numPoints }, (_, i) => ({
            x: centerX + Math.cos((i / numPoints) * Math.PI * 2) * radius,
            y: centerY + Math.sin((i / numPoints) * Math.PI * 2) * radius
          })),
          color: isDark ? 'hsl(225 20% 49%)' : 'hsl(0 0% 75%)',
          glowUntil: 0,
          pulseUntil: 0
        };
      });
    };

    const initializeHeavenlyBodies = () => {
      const numBodies = 3;
      const bodyColor = isDark ? 'hsl(240 15% 25%)' : 'hsl(220 20% 90%)';
      
      heavenlyBodiesRef.current = Array.from({ length: numBodies }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 30 + 20,
        color: bodyColor,
        opacity: 0.03 + Math.random() * 0.02, // 3-5% opacity
        layer: Math.random() * 2 + 1,
        orbitSpeed: Math.random() * 0.0002 + 0.0001,
        orbitRadius: Math.random() * 20 + 10,
        orbitAngle: Math.random() * Math.PI * 2,
        pulseUntil: 0
      }));
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, [isDark, useFallback]);

  // Mouse and scroll tracking with interaction detection
  useEffect(() => {
    if (useFallback) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      // Check constellation hover
      constellationsRef.current.forEach(constellation => {
        const isNear = constellation.points.some(point => {
          const dx = point.x - e.clientX;
          const dy = point.y - e.clientY + scrollOffsetRef.current;
          return Math.sqrt(dx * dx + dy * dy) < 60;
        });
        
        if (isNear) {
          constellation.glowUntil = Date.now() + 2000;
        }
      });

      // Check heavenly body hover
      heavenlyBodiesRef.current.forEach(body => {
        const dx = body.x - e.clientX;
        const dy = body.y - e.clientY + scrollOffsetRef.current;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < body.radius + 20) {
          body.pulseUntil = Date.now() + 1500;
        }
      });
    };

    const handleClick = (e: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      // Check constellation click
      constellationsRef.current.forEach(constellation => {
        const isNear = constellation.points.some(point => {
          const dx = point.x - e.clientX;
          const dy = point.y - e.clientY + scrollOffsetRef.current;
          return Math.sqrt(dx * dx + dy * dy) < 60;
        });
        
        if (isNear) {
          constellation.pulseUntil = Date.now() + 1000;
        }
      });
    };

    const handleScroll = () => {
      scrollOffsetRef.current = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [useFallback]);

  // Animation loop with performance monitoring
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || useFallback) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;

    const monitorPerformance = () => {
      const now = performance.now();
      fpsRef.current.frames++;
      
      if (now >= fpsRef.current.lastTime + 1000) {
        fpsRef.current.currentFPS = Math.round((fpsRef.current.frames * 1000) / (now - fpsRef.current.lastTime));
        fpsRef.current.frames = 0;
        fpsRef.current.lastTime = now;
        
        // Enable fallback if FPS drops below 30
        if (fpsRef.current.currentFPS < 30) {
          console.warn('Cosmic background: Low FPS detected, switching to static fallback');
          setUseFallback(true);
        }
      }
    };

    const animate = () => {
      if (prefersReducedMotion.current) {
        // Still draw, but without animation
        time = 0;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.016;

      // Draw heavenly bodies first (background layer)
      const now = Date.now();
      heavenlyBodiesRef.current.forEach(body => {
        const isPulsing = now < body.pulseUntil;
        
        // Orbital motion
        if (!prefersReducedMotion.current) {
          body.orbitAngle += body.orbitSpeed;
        }
        
        const orbitalX = Math.cos(body.orbitAngle) * body.orbitRadius;
        const orbitalY = Math.sin(body.orbitAngle) * body.orbitRadius;
        
        // Parallax
        const parallaxX = (mouseRef.current.x - canvas.width / 2) * (body.layer * 0.003);
        const parallaxY = (mouseRef.current.y - canvas.height / 2) * (body.layer * 0.003) + 
                         (scrollOffsetRef.current * body.layer * 0.008);
        
        const finalX = body.x + orbitalX + parallaxX;
        const finalY = body.y + orbitalY - parallaxY;
        
        // Draw with subtle gradient
        const gradient = ctx.createRadialGradient(finalX, finalY, 0, finalX, finalY, body.radius);
        const baseOpacity = isPulsing ? body.opacity * 1.5 : body.opacity;
        gradient.addColorStop(0, body.color.replace(')', ` / ${baseOpacity})`));
        gradient.addColorStop(1, body.color.replace(')', ' / 0)'));
        
        ctx.beginPath();
        ctx.arc(finalX, finalY, body.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Draw stars with enhanced twinkle and parallax
      starsRef.current.forEach(star => {
        const parallaxX = (mouseRef.current.x - canvas.width / 2) * (star.layer * 0.006);
        const parallaxY = (mouseRef.current.y - canvas.height / 2) * (star.layer * 0.006) + 
                         (scrollOffsetRef.current * star.layer * 0.012);
        
        const twinkle = prefersReducedMotion.current ? 0 : Math.sin(time * star.twinkleSpeed * 100 + star.twinkleOffset);
        const currentOpacity = star.opacity + twinkle * 0.25;
        
        ctx.beginPath();
        ctx.arc(star.x + parallaxX, star.y - parallaxY, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color.replace(')', ` / ${Math.max(0, Math.min(1, currentOpacity))})`);
        ctx.fill();
      });

      // Draw constellations with interactive effects
      constellationsRef.current.forEach(constellation => {
        const isGlowing = now < constellation.glowUntil;
        const isPulsing = now < constellation.pulseUntil;
        
        const baseOpacity = isGlowing ? 0.3 : 0.12;
        const pulseOpacity = isPulsing ? 0.5 : baseOpacity;
        
        ctx.strokeStyle = constellation.color.replace(')', ` / ${pulseOpacity})`);
        ctx.lineWidth = isGlowing || isPulsing ? 1.5 : 1;
        
        if (isGlowing || isPulsing) {
          ctx.shadowBlur = isPulsing ? 15 : 10;
          ctx.shadowColor = constellation.color;
        }
        
        ctx.beginPath();
        constellation.points.forEach((point, i) => {
          if (i === 0) {
            ctx.moveTo(point.x, point.y - scrollOffsetRef.current * 0.5);
          } else {
            ctx.lineTo(point.x, point.y - scrollOffsetRef.current * 0.5);
          }
        });
        ctx.closePath();
        ctx.stroke();
        
        // Draw constellation points
        constellation.points.forEach(point => {
          ctx.beginPath();
          ctx.arc(point.x, point.y - scrollOffsetRef.current * 0.5, 2, 0, Math.PI * 2);
          ctx.fillStyle = constellation.color.replace(')', ` / ${pulseOpacity * 1.5})`);
          ctx.fill();
        });
        
        ctx.shadowBlur = 0;
      });

      monitorPerformance();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isDark, useFallback]);

  return (
    <div className={`cosmic-background ${useFallback ? 'static' : ''}`}>
      {!useFallback && <canvas ref={canvasRef} className="cosmic-canvas" />}
    </div>
  );
};

export default CosmicBackground;
