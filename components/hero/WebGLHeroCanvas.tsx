'use client';

import React, { useEffect, useRef } from 'react';

export default function WebGLHeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !canvas.parentElement) return;

    let animationFrameId: number;
    const getDpr = () => Math.min(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1, 1.5);
    const dpr = getDpr();
    let width = (canvas.width = Math.floor(canvas.parentElement.offsetWidth * dpr));
    let height = (canvas.height = Math.floor(canvas.parentElement.offsetHeight * dpr));

    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');

    if (!gl) {
      // 2D Canvas Fallback
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      let time = 0;

      const draw2d = () => {
        time += 0.008;
        ctx.fillStyle = '#050505';
        ctx.fillRect(0, 0, width, height);

        const grad1 = ctx.createRadialGradient(
          width * 0.75 + Math.sin(time) * 40,
          height * 0.5 + Math.cos(time * 0.8) * 30,
          20,
          width * 0.75,
          height * 0.5,
          width * 0.55
        );
        grad1.addColorStop(0, 'rgba(30, 94, 255, 0.28)');
        grad1.addColorStop(0.5, 'rgba(18, 60, 140, 0.12)');
        grad1.addColorStop(1, 'rgba(5, 5, 5, 0)');

        ctx.fillStyle = grad1;
        ctx.fillRect(0, 0, width, height);

        animationFrameId = requestAnimationFrame(draw2d);
      };
      draw2d();

      const handle2DResize = () => {
        if (!canvas.parentElement) return;
        width = canvas.width = canvas.parentElement.offsetWidth;
        height = canvas.height = canvas.parentElement.offsetHeight;
      };
      window.addEventListener('resize', handle2DResize);
      return () => {
        window.removeEventListener('resize', handle2DResize);
        cancelAnimationFrame(animationFrameId);
      };
    }

    // WebGL Shader setup
    const vsSource = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision mediump float;
      uniform vec2 u_resolution;
      uniform float u_time;

      void main() {
        vec2 st = gl_FragCoord.xy / u_resolution.xy;
        float aspect = u_resolution.x / u_resolution.y;
        
        // Dynamic center: on mobile portrait it centers nicely, on desktop it accents the right hero visual
        vec2 center = aspect > 1.0 ? vec2(1.15, 0.45) : vec2(0.5 * aspect, 0.42);
        st.x *= aspect;

        float d = distance(st, center);

        float wave = sin(st.x * 2.8 + u_time * 0.7) * cos(st.y * 2.8 + u_time * 0.4) * 0.18;
        float circle = smoothstep(0.85, 0.0, d + wave);

        vec3 deepBg = vec3(0.02, 0.02, 0.035);
        vec3 royalBlue = vec3(0.06, 0.22, 0.58);
        vec3 electricBlue = vec3(0.12, 0.38, 0.98);

        vec3 finalColor = mix(deepBg, royalBlue, circle * 0.65);
        finalColor += electricBlue * pow(circle, 2.2) * 0.4;

        // Subtle Vignette
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        float vignette = uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y);
        vignette = clamp(pow(16.0 * vignette, 0.25), 0.0, 1.0);
        finalColor *= vignette;

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const createShader = (glCtx: WebGLRenderingContext, type: number, source: string) => {
      const shader = glCtx.createShader(type);
      if (!shader) return null;
      glCtx.shaderSource(shader, source);
      glCtx.compileShader(shader);
      return shader;
    };

    const vertShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const posAttrLoc = gl.getAttribLocation(program, 'a_position');
    const resUniformLoc = gl.getUniformLocation(program, 'u_resolution');
    const timeUniformLoc = gl.getUniformLocation(program, 'u_time');

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      const currentDpr = getDpr();
      width = canvas.width = Math.floor(canvas.parentElement.offsetWidth * currentDpr);
      height = canvas.height = Math.floor(canvas.parentElement.offsetHeight * currentDpr);
      gl.viewport(0, 0, width, height);
    };

    window.addEventListener('resize', handleResize);

    const startTime = performance.now();
    const render = () => {
      const currentTime = (performance.now() - startTime) * 0.001;
      gl.viewport(0, 0, width, height);
      gl.useProgram(program);

      gl.enableVertexAttribArray(posAttrLoc);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(posAttrLoc, 2, gl.FLOAT, false, 0, 0);

      gl.uniform2f(resUniformLoc, width, height);
      gl.uniform1f(timeUniformLoc, currentTime);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 pointer-events-none"
    />
  );
}
