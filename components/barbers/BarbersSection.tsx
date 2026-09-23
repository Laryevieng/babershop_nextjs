'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Star, Calendar } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/Icons';
import { BARBERS_DATA } from '@/data/barbershopData';

interface BarbersSectionProps {
  onSelectBarber: (barberName: string) => void;
}

export default function BarbersSection({ onSelectBarber }: BarbersSectionProps) {
  return (
    <section id="barbers" className="py-28 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto space-y-4 mb-16"
        >
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-blue-400 uppercase">
            THE CRAFTSMEN
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            Meet Our Master Barbers
          </h2>
          <p className="text-gray-400 text-sm font-light">
            Tim profesional dengan sertifikasi keahlian potongan rambut presisi, beard grooming, dan konsultasi gaya.
          </p>
        </motion.div>

        {/* Barber Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {BARBERS_DATA.map((barber, idx) => (
            <motion.div
              key={barber.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -6 }}
              className="group bg-[#0a0a0e] rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(30,94,255,0.2)] flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden bg-gray-900">
                <img
                  src={barber.image}
                  alt={barber.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e] via-transparent to-transparent"></div>

                {/* Experience Badge */}
                <span className="absolute top-3.5 right-3.5 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-blue-300 border border-blue-500/30">
                  {barber.exp}
                </span>
              </div>

              {/* Information Container */}
              <div className="p-6 space-y-2">
                <h3 className="font-serif text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  {barber.name}
                </h3>
                <p className="text-xs text-blue-400 font-semibold">{barber.role}</p>
                <p className="text-xs text-gray-400 font-light leading-relaxed">{barber.specialty}</p>

                <div className="pt-4 flex items-center justify-between text-[11px] text-gray-400 border-t border-white/10 mt-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 text-gray-400 hover:text-pink-400 transition-colors"
                  >
                    <InstagramIcon size={14} className="text-pink-500" />
                    <span>{barber.instagram}</span>
                  </a>

                  <button
                    onClick={() => onSelectBarber(barber.name)}
                    className="text-blue-400 hover:text-blue-300 font-bold uppercase text-[10px] tracking-wider flex items-center space-x-1 bg-blue-950/60 px-2.5 py-1 rounded border border-blue-500/30"
                  >
                    <Calendar size={11} />
                    <span>BOOK</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
