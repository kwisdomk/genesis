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
  isHovered: boolean;
  glowUntil: number;
}

const CosmicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDark, setIsDark] = useState(false);
  const starsRef = useRef<Star[]>([]);
  const constellationsRef = useRef<Constellation[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollOffsetRef = useRef(0);
  const animationFrameRef = useRef<number>();

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

  // Initialize stars and constellations
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeStars();
      initializeConstellations();
    };

    const initializeStars = () => {
      const numStars = isDark ? 80 : 60;
      const colors = isDark 
        ? ['rgb(46, 156, 160)', 'rgb(110, 91, 170)', 'rgb(170, 170, 170)']
        : ['rgb(167, 199, 231)', 'rgb(201, 182, 228)', 'rgb(230, 216, 167)'];
      
      starsRef.current = Array.from({ length: numStars }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        twinkleSpeed: Math.random() * 0.02 + (isDark ? 0.005 : 0.01),
        twinkleOffset: Math.random() * Math.PI * 2,
        layer: Math.random() * 3 // For parallax
      }));
    };

    const initializeConstellations = () => {
      const numConstellations = 3;
      constellationsRef.current = Array.from({ length: numConstellations }, () => {
        const numPoints = Math.floor(Math.random() * 3) + 3;
        const centerX = Math.random() * canvas.width;
        const centerY = Math.random() * canvas.height;
        const radius = 100;
        
        return {
          points: Array.from({ length: numPoints }, (_, i) => ({
            x: centerX + Math.cos((i / numPoints) * Math.PI * 2) * radius,
            y: centerY + Math.sin((i / numPoints) * Math.PI * 2) * radius
          })),
          color: isDark ? 'rgb(100, 110, 150)' : 'rgb(200, 200, 200)',
          isHovered: false,
          glowUntil: 0
        };
      });
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, [isDark]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      // Check constellation hover
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      constellationsRef.current.forEach(constellation => {
        const isNear = constellation.points.some(point => {
          const dx = point.x - e.clientX;
          const dy = point.y - e.clientY;
          return Math.sqrt(dx * dx + dy * dy) < 50;
        });
        
        if (isNear) {
          constellation.glowUntil = Date.now() + 2000;
        }
      });
    };

    const handleScroll = () => {
      scrollOffsetRef.current = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.016;

      // Draw stars with twinkle and parallax
      starsRef.current.forEach(star => {
        const parallaxX = (mouseRef.current.x - canvas.width / 2) * (star.layer * 0.005);
        const parallaxY = (mouseRef.current.y - canvas.height / 2) * (star.layer * 0.005) + 
                         (scrollOffsetRef.current * star.layer * 0.01);
        
        const twinkle = Math.sin(time * star.twinkleSpeed * 100 + star.twinkleOffset);
        const currentOpacity = star.opacity + twinkle * 0.3;
        
        ctx.beginPath();
        ctx.arc(star.x + parallaxX, star.y - parallaxY, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color.replace(')', `, ${Math.max(0, Math.min(1, currentOpacity))})`).replace('rgb', 'rgba');
        ctx.fill();
      });

      // Draw constellations
      const now = Date.now();
      constellationsRef.current.forEach(constellation => {
        const isGlowing = now < constellation.glowUntil;
        ctx.strokeStyle = constellation.color.replace(')', `, ${isGlowing ? 0.4 : 0.15})`).replace('rgb', 'rgba');
        ctx.lineWidth = isGlowing ? 1.5 : 1;
        
        if (isGlowing) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = constellation.color;
        }
        
        ctx.beginPath();
        constellation.points.forEach((point, i) => {
          if (i === 0) {
            ctx.moveTo(point.x, point.y);
          } else {
            ctx.lineTo(point.x, point.y);
          }
        });
        ctx.closePath();
        ctx.stroke();
        
        ctx.shadowBlur = 0;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isDark]);

  return (
    <div className="cosmic-background">
      <canvas ref={canvasRef} className="cosmic-canvas" />
    </div>
  );
};

export default CosmicBackground;
