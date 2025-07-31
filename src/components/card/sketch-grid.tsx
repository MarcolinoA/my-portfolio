'use client';

import React from 'react';
import SketchCard from './sketch-card';
import './sketch-grid.css';

const sketches = [
  {
    id: '001',
    date: '2025/06/29',
    imageSrc: '/sketches/beanznbg.png',
    area: 'big', // 2x2
  },
  {
    id: '002',
    date: '2025/02/06',
    imageSrc: '/sketches/iconsnbg.png',
    area: 'tall', // 1x2
  },
  {
    id: '003',
    date: '2025/01/23',
    imageSrc: '/sketches/wireshark.png',
    area: 'small1', // 1x1
  },
  {
    id: '004',
    date: '2025/01/23',
    imageSrc: '/sketches/jestmdb.png',
    area: 'small2', // 1x1
  },
];

const sketches2 = [
  {
    id: '005',
    date: '2025/06/29',
    imageSrc: '/sketches/solananbg.png',
    area: 'big2', // 2x2
  },
  {
    id: '006',
    date: '2025/02/06',
    imageSrc: '/sketches/nextjsnbg.png',
    area: 'tall2', // 1x2
  },
  {
    id: '007',
    date: '2025/01/23',
    imageSrc: '/sketches/rasberrypinbg.png',
    area: 'small3', // 1x1
  },
  {
    id: '008',
    date: '2025/01/23',
    imageSrc: '/sketches/soliditynbg.png',
    area: 'small4', // 1x1
  },
];

export default function SketchGrid() {
  return (
		<>
    <div className="custom-grid py-6">
      {sketches.map((sketch) => (
        <div key={sketch.id} className={`area-${sketch.area}`}>
          <SketchCard
            id={sketch.id}
            date={sketch.date}
            imageSrc={sketch.imageSrc}
          />
        </div>
      ))}
    </div>
		<div className="custom-grid2 py-6 pt-0">
      {sketches2.map((sketch) => (
        <div key={sketch.id} className={`area-${sketch.area}`}>
          <SketchCard
            id={sketch.id}
            date={sketch.date}
            imageSrc={sketch.imageSrc}
          />
        </div>
      ))}
    </div>
		</>
  );
}
