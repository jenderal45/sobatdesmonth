import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  GraduationCap, 
  Activity, 
  ShieldAlert, 
  FileCheck, 
  Sparkles,
  Info,
  Layers,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { VISION_MISSION } from '../data/mockData';

export const ThreeInteractiveOrbitPillars: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [activePillarIndex, setActivePillarIndex] = useState<number>(0);
  const [isRotating, setIsRotating] = useState<boolean>(true);

  const pillars = VISION_MISSION.missions;

  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 450;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 8, 22);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x38bdf8, 2.5, 50);
    pointLight.position.set(5, 10, 15);
    scene.add(pointLight);

    const blueLight = new THREE.PointLight(0x1d4ed8, 2.0, 50);
    blueLight.position.set(-8, -5, 10);
    scene.add(blueLight);

    // 3. Central 3D Crystal Core (Icosahedron / Diamond)
    const coreGeometry = new THREE.IcosahedronGeometry(2.5, 1);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0284c7,
      emissive: 0x0369a1,
      emissiveIntensity: 0.6,
      roughness: 0.1,
      metalness: 0.8,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: true,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(coreMesh);

    // Inner glowing sphere
    const innerCore = new THREE.Mesh(
      new THREE.SphereGeometry(1.6, 24, 24),
      new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        emissive: 0x0284c7,
        emissiveIntensity: 1.2,
      })
    );
    scene.add(innerCore);

    // 4. Orbit Rings
    const orbitRadius = 7.5;
    const ringGeo = new THREE.TorusGeometry(orbitRadius, 0.05, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.35,
    });
    const orbitRing = new THREE.Mesh(ringGeo, ringMat);
    orbitRing.rotation.x = Math.PI / 2.3;
    scene.add(orbitRing);

    // Secondary tilted ring
    const ringGeo2 = new THREE.TorusGeometry(orbitRadius + 0.8, 0.03, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x1d4ed8,
      transparent: true,
      opacity: 0.25,
    });
    const orbitRing2 = new THREE.Mesh(ringGeo2, ringMat2);
    orbitRing2.rotation.x = -Math.PI / 2.8;
    orbitRing2.rotation.y = Math.PI / 6;
    scene.add(orbitRing2);

    // 5. 5 Orbital Satellite Nodes (Representing 5 Panca Misi)
    const nodeMeshes: THREE.Mesh[] = [];
    const nodeGlows: THREE.Mesh[] = [];

    const nodeColors = [0x38bdf8, 0x60a5fa, 0x2563eb, 0x0284c7, 0x3b82f6];

    for (let i = 0; i < 5; i++) {
      // Solid Orb
      const nodeGeo = new THREE.SphereGeometry(0.75, 24, 24);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: nodeColors[i],
        emissive: nodeColors[i],
        emissiveIntensity: 0.8,
        metalness: 0.5,
        roughness: 0.2,
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);

      // Outer Wireframe Halo
      const haloGeo = new THREE.IcosahedronGeometry(1.1, 1);
      const haloMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true,
        transparent: true,
        opacity: 0.4,
      });
      const haloMesh = new THREE.Mesh(haloGeo, haloMat);
      nodeMesh.add(haloMesh);

      scene.add(nodeMesh);
      nodeMeshes.push(nodeMesh);
      nodeGlows.push(haloMesh);
    }

    // 6. Particle Halo around central core
    const pCount = 120;
    const pPositions = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 3.5 + Math.random() * 2;
      pPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pPositions[i * 3 + 2] = r * Math.cos(phi);
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    const pMat = new THREE.PointsMaterial({
      size: 0.15,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const coreParticles = new THREE.Points(pGeo, pMat);
    scene.add(coreParticles);

    // 7. Interactive Raycaster for clicking nodes
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleCanvasClick = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes);

      if (intersects.length > 0) {
        const clickedMesh = intersects[0].object;
        const index = nodeMeshes.indexOf(clickedMesh as THREE.Mesh);
        if (index !== -1) {
          setActivePillarIndex(index);
        }
      }
    };

    container.addEventListener('click', handleCanvasClick);

    // 8. Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Spin central core
      coreMesh.rotation.y = t * 0.4;
      coreMesh.rotation.x = t * 0.2;
      innerCore.rotation.y = -t * 0.3;
      coreParticles.rotation.y = t * 0.2;

      // Orbit the 5 satellite nodes
      const angleOffset = orbitRing.rotation.x;
      for (let i = 0; i < 5; i++) {
        const angle = t * 0.35 + (i * Math.PI * 2) / 5;
        const x = Math.cos(angle) * orbitRadius;
        const z = Math.sin(angle) * orbitRadius * Math.cos(angleOffset);
        const y = Math.sin(angle) * orbitRadius * Math.sin(angleOffset) * 0.6;

        nodeMeshes[i].position.set(x, y, z);
        nodeGlows[i].rotation.x = t + i;
        nodeGlows[i].rotation.y = t * 1.5;

        // Highlight active node
        if (i === activePillarIndex) {
          nodeMeshes[i].scale.setScalar(1.35 + Math.sin(t * 4) * 0.1);
        } else {
          nodeMeshes[i].scale.setScalar(1.0);
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('click', handleCanvasClick);
      cancelAnimationFrame(animId);
      renderer.dispose();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [activePillarIndex]);

  const activePillar = pillars[activePillarIndex] || pillars[0];

  return (
    <div className="relative rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900/90 to-blue-950/40 border border-blue-500/30 p-6 sm:p-8 overflow-hidden shadow-2xl">
      {/* Top Header Tag */}
      <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-blue-600/30 border border-blue-400/50 flex items-center justify-center text-sky-400">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-base font-bold text-white tracking-wide font-cinzel">
              3D Interactive Hologram: 5 Pilar Perjuangan
            </h4>
            <span className="text-[11px] text-slate-400 block">
              Klik orb 3D untuk memutar & membedah rincian program kerja strategis
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full bg-blue-950 border border-blue-500/40 text-sky-300 text-[10px] font-mono font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            3D WEBGL ENGINE ACTIVE
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Interactive 3D Canvas */}
        <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
          <div
            ref={canvasRef}
            className="w-full h-[320px] sm:h-[400px] cursor-grab active:cursor-grabbing relative"
          />

          {/* Node Selector Pills underneath 3D Canvas */}
          <div className="flex flex-wrap justify-center gap-1.5 mt-2 z-10">
            {pillars.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActivePillarIndex(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activePillarIndex === idx
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/40 border border-blue-400 scale-105'
                    : 'bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                Pilar #{p.id}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Dynamic Pillar Details Panel */}
        <div className="lg:col-span-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="p-6 rounded-2xl bg-slate-900/95 border border-blue-500/40 shadow-xl space-y-4"
            >
              {/* Badge & Pillar ID */}
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-lg bg-blue-600 text-white font-mono text-xs font-extrabold shadow-md shadow-blue-600/30">
                  PILAR UTAMA #{activePillar.id}
                </span>
                <span className="text-xs font-semibold text-sky-400 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Program Kerja Konkret
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white font-cinzel leading-snug">
                {activePillar.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {activePillar.description}
              </p>

              {/* Action Targets List */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <span className="text-[11px] font-bold text-sky-300 uppercase tracking-wider block">
                  Sasaran Aksi Nyata di Lapangan:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activePillar.focusAreas.map((tgt, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs text-slate-200 flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-tight">{tgt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Navigation to Aspirasi */}
              <div className="pt-3 flex items-center justify-between text-xs">
                <span className="text-slate-400">Punya usulan terkait program ini?</span>
                <a
                  href="#aspirasi"
                  className="text-sky-400 font-bold hover:text-sky-300 flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <span>Sampaikan Ide Anda</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
