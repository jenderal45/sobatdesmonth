import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeCanvasBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020617, 0.0018);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 35, 75);
    camera.lookAt(0, 0, 0);

    // 2. Renderer Setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // 3. Dynamic 3D Geometric Wave Grid (Terrain of Progress)
    const gridCols = 85;
    const gridRows = 85;
    const gridSpacing = 2.4;
    const count = gridCols * gridRows;

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const scales = new Float32Array(count);

    const color1 = new THREE.Color(0x0284c7); // Sky blue
    const color2 = new THREE.Color(0x1d4ed8); // Royal blue
    const color3 = new THREE.Color(0x38bdf8); // Bright cyan
    const colorDark = new THREE.Color(0x0f172a);

    let idx = 0;
    for (let i = 0; i < gridCols; i++) {
      for (let j = 0; j < gridRows; j++) {
        const x = (i - gridCols / 2) * gridSpacing;
        const z = (j - gridRows / 2) * gridSpacing;
        const y = 0;

        positions[idx * 3] = x;
        positions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = z;

        // Radial distance from center for color blending
        const dist = Math.sqrt(x * x + z * z);
        const t = Math.min(dist / 90, 1);
        const c = new THREE.Color().lerpColors(color3, color1, t * 0.7);
        if (dist > 70) c.lerp(colorDark, (dist - 70) / 30);

        colors[idx * 3] = c.r;
        colors[idx * 3 + 1] = c.g;
        colors[idx * 3 + 2] = c.b;

        scales[idx] = Math.random() * 1.5 + 1.2;
        idx++;
      }
    }

    const gridGeometry = new THREE.BufferGeometry();
    gridGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    gridGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    gridGeometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    // Particle Shader / Material for Glowing Dots
    const gridMaterial = new THREE.PointsMaterial({
      size: 1.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const gridPoints = new THREE.Points(gridGeometry, gridMaterial);
    gridPoints.position.y = -18;
    scene.add(gridPoints);

    // 4. Floating 3D Star Constellations / Ambient Energy Spheres
    const starCount = 350;
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 200;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 120 + 10;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 200;

      const starColor = Math.random() > 0.4 ? color3 : color2;
      starColors[i * 3] = starColor.r;
      starColors[i * 3 + 1] = starColor.g;
      starColors[i * 3 + 2] = starColor.b;
    }

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // 5. 3D Floating Luminous Ribbon Rings (Emblem Orbit)
    const ringGeometry = new THREE.TorusGeometry(32, 0.4, 16, 120);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x2563eb,
      transparent: true,
      opacity: 0.25,
      wireframe: true,
    });
    const ring1 = new THREE.Mesh(ringGeometry, ringMaterial);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    ring1.position.set(0, 0, -20);
    scene.add(ring1);

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(44, 0.2, 16, 140),
      new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.15,
        wireframe: true,
      })
    );
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.z = Math.PI / 5;
    ring2.position.set(0, -5, -30);
    scene.add(ring2);

    // 6. Interactive Mouse & Scroll Parallax Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let scrollY = 0;

    const onMouseMove = (event: MouseEvent) => {
      targetMouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const onScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    // 7. Responsive Resize Handler
    const onWindowResize = () => {
      if (!container) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onWindowResize);

    // 8. Render Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Animate 3D Wave Grid
      const pos = gridGeometry.attributes.position.array as Float32Array;
      let pIdx = 0;
      for (let i = 0; i < gridCols; i++) {
        for (let j = 0; j < gridRows; j++) {
          const x = (i - gridCols / 2) * gridSpacing;
          const z = (j - gridRows / 2) * gridSpacing;

          // Double sine wave with ripple
          const wave1 = Math.sin(x * 0.08 + elapsedTime * 1.2) * 3.5;
          const wave2 = Math.cos(z * 0.08 + elapsedTime * 0.9) * 3.5;
          const waveCenter = Math.sin(Math.sqrt(x * x + z * z) * 0.07 - elapsedTime * 1.5) * 2.5;

          pos[pIdx * 3 + 1] = wave1 + wave2 + waveCenter;
          pIdx++;
        }
      }
      gridGeometry.attributes.position.needsUpdate = true;

      // Animate 3D Rings
      ring1.rotation.z = elapsedTime * 0.12;
      ring1.rotation.x = Math.PI / 3 + Math.sin(elapsedTime * 0.3) * 0.1;
      ring2.rotation.z = -elapsedTime * 0.08;

      // Stars slow rotation
      stars.rotation.y = elapsedTime * 0.03;
      stars.rotation.x = Math.sin(elapsedTime * 0.02) * 0.05;

      // Parallax Camera motion based on mouse and scroll
      camera.position.x = mouseX * 12;
      camera.position.y = 35 - mouseY * 10 - scrollY * 0.015;
      camera.position.z = 75 + Math.sin(elapsedTime * 0.5) * 2;
      camera.lookAt(0, -5 - scrollY * 0.01, -15);

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onWindowResize);
      cancelAnimationFrame(animationFrameId);

      gridGeometry.dispose();
      gridMaterial.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      renderer.dispose();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-85"
      style={{ willChange: 'transform' }}
    />
  );
};
