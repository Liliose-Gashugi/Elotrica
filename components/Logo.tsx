"use client";
import { useState, useEffect } from "react";

function removeBackground(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
  const w = canvas.width;
  const h = canvas.height;
  const imageData = ctx.getImageData(0, 0, w, h);
  const d = imageData.data;

  // Sample background from 4 corners
  let bgR = 0, bgG = 0, bgB = 0;
  const corners = [[0, 0], [w - 1, 0], [0, h - 1], [w - 1, h - 1]];
  for (const [cx, cy] of corners) {
    const i = (cy * w + cx) * 4;
    bgR += d[i]; bgG += d[i + 1]; bgB += d[i + 2];
  }
  bgR /= 4; bgG /= 4; bgB /= 4;

  // Step 1: Flood-fill from corners to remove connected background
  const visited = new Uint8Array(w * h);
  const queue: number[] = [];
  const enqueue = (x: number, y: number) => {
    if (x < 0 || x >= w || y < 0 || y >= h) return;
    const idx = y * w + x;
    if (visited[idx]) return;
    const i = idx * 4;
    const dr = d[i] - bgR, dg = d[i + 1] - bgG, db = d[i + 2] - bgB;
    if (Math.sqrt(dr * dr + dg * dg + db * db) > 80) return;
    visited[idx] = 1;
    d[i + 3] = 0;
    queue.push(x, y);
  };
  for (const [cx, cy] of corners) enqueue(cx, cy);
  let qi = 0;
  while (qi < queue.length) {
    const x = queue[qi++], y = queue[qi++];
    enqueue(x - 1, y); enqueue(x + 1, y);
    enqueue(x, y - 1); enqueue(x, y + 1);
  }

  // Step 2: Remove all non-gold fringe pixels
  for (let i = 0; i < d.length; i += 4) {
    if (d[i + 3] === 0) continue;
    const r = d[i], g = d[i + 1], b = d[i + 2];

    // Too bright (near-white or light fringe)
    if (r + g + b > 410) { d[i + 3] = 0; continue; }

    // Low saturation (grayish / colorless fringe)
    if (Math.max(r, g, b) - Math.min(r, g, b) < 50 && r + g + b > 160) {
      d[i + 3] = 0; continue;
    }

    // Not warm enough to be gold (gold: R >> B by at least 60, and R > G)
    if (r - b < 60 || r <= g) { d[i + 3] = 0; continue; }
  }

  ctx.putImageData(imageData, 0, 0);
}

export default function Logo({ height = "h-[14px]" }: { height?: string }) {
  const [src, setSrc] = useState("/image.png");

  useEffect(() => {
    const img = new Image();
    img.src = "/image.png";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(img, 0, 0);
      removeBackground(canvas, ctx);
      setSrc(canvas.toDataURL("image/png"));
    };
  }, []);

  return (
    <img src={src} alt="Elotrica" className={`${height} w-auto object-contain`} />
  );
}
