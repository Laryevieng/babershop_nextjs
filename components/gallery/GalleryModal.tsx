'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Sparkles } from 'lucide-react';
import { GalleryItem } from '@/types/barbershop';

interface GalleryModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onBookLook: (title: string) => void;
}

export default function GalleryModal({ item, onClose, onBookLook }: GalleryModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative max-w-4xl w-full bg-[#0d0d12] border border-white/15 rounded-2xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.9)] z-10 my-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 bg-black/70 rounded-full text-white hover:bg-white/20 transition-colors border border-white/10"
            aria-label="Close Preview"
          >
            <X size={20} />
          </button>

          {/* Image Display */}
          <div className="relative bg-black flex items-center justify-center max-h-[70vh] overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto max-h-[70vh] object-contain"
            />
          </div>

          {/* Modal Footer Info */}
          <div className="p-6 sm:p-8 bg-[#0a0a0d] border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="text-xs text-blue-400 font-bold uppercase tracking-widest flex items-center space-x-1">
                <Sparkles size={12} />
                <span>{item.category}</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-xs text-gray-400 mt-1 max-w-lg">{item.description}</p>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onBookLook(item.title)}
              className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-[#123C8C] via-[#1E5EFF] to-blue-600 hover:shadow-[0_0_25px_rgba(30,94,255,0.6)] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shrink-0 border border-blue-400/40"
            >
              <Calendar size={14} />
              <span>BOOK THIS LOOK</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
