'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  User,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  Building2
} from 'lucide-react';
import { SERVICES_DATA, BARBERS_DATA, BRANCHES_DATA, SHOP_INFO, TIME_SLOTS } from '@/data/barbershopData';
import { BookingState } from '@/types/barbershop';

interface BookingSectionProps {
  initialService?: string;
  initialBarber?: string;
  initialBranch?: string;
}

export default function BookingSection({ initialService, initialBarber, initialBranch }: BookingSectionProps) {
  const today = new Date().toISOString().split('T')[0];

  const [booking, setBooking] = useState<BookingState>({
    name: '',
    phone: '',
    branch: initialBranch || 'Cabang Utama Manislor',
    service: initialService || 'Cukur + Cuci + Pijit',
    barber: initialBarber || 'Any Master Barber',
    date: today,
    time: '14:00',
    notes: '',
  });

  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Sync prop changes
  useEffect(() => {
    if (initialService) {
      setBooking((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialBarber) {
      setBooking((prev) => ({ ...prev, barber: initialBarber }));
    }
  }, [initialBarber]);

  useEffect(() => {
    if (initialBranch) {
      setBooking((prev) => ({ ...prev, branch: initialBranch }));
    }
  }, [initialBranch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!booking.name.trim() || !booking.phone.trim()) return;

    setLoading(true);

    const message = `Halo CAHAYA BARBERSHOP KUNINGAN,
Saya ingin melakukan reservasi grooming / styling:
• Nama: ${booking.name}
• No. WhatsApp: ${booking.phone}
• Lokasi Cabang: ${booking.branch}
• Pilihan Layanan: ${booking.service}
• Pilihan Barber: ${booking.barber}
• Tanggal: ${booking.date}
• Jam: ${booking.time} WIB
${booking.notes ? `• Catatan Khusus: ${booking.notes}` : ''}

Mohon konfirmasi ketersediaan jadwal di cabang ${booking.branch}. Terima kasih!`;

    const encodedMsg = encodeURIComponent(message);
    const waUrl = `https://wa.me/${SHOP_INFO.whatsapp}?text=${encodedMsg}`;

    setBookingSuccess(true);
    setLoading(false);

    setTimeout(() => {
      window.open(waUrl, '_blank');
      setBookingSuccess(false);
    }, 1400);
  };

  const haircuts = SERVICES_DATA.filter((s) => s.category === 'haircut');
  const colors = SERVICES_DATA.filter((s) => s.category === 'color');
  const others = SERVICES_DATA.filter((s) => s.category === 'others');

  return (
    <section id="booking" className="py-28 bg-[#050505] relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-widest uppercase">
              <Sparkles size={12} />
              <span>RESERVASI ONLINE 3 CABANG</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
              Siap Tampil <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-200">
                Lebih Percaya Diri?
              </span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed">
              Reservasi kursi Anda di cabang terdekat secara instan dalam 60 detik. Detail jadwal Anda akan langsung terhubung ke WhatsApp resmi Cahaya Barbershop untuk konfirmasi cepat tanpa perlu antre lama.
            </p>

            {/* Quick Info Badges */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-4 p-4 rounded-xl bg-[#0c0c10] border border-white/5">
                <div className="p-3 rounded-lg bg-blue-950/60 border border-blue-500/30 text-blue-400 shrink-0">
                  <Building2 size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">3 Cabang Aktif</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Manislor (Utama) • Jagabaya • Jalaksana</p>
                  <span className="inline-block text-[10px] text-emerald-400 font-bold mt-1">● Semua Cabang Buka Setiap Hari</span>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl bg-[#0c0c10] border border-white/5">
                <div className="p-3 rounded-lg bg-blue-950/60 border border-blue-500/30 text-blue-400 shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Jam Operasional</h4>
                  <p className="text-xs text-gray-400 mt-0.5">{SHOP_INFO.hours.weekdays}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-[#0c0c12] rounded-3xl p-8 sm:p-10 border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.9)] relative"
          >
            {/* Success Alert Banner */}
            <AnimatePresence>
              {bookingSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 rounded-xl bg-emerald-950/90 border border-emerald-500 text-emerald-200 text-xs font-semibold flex items-center space-x-3 shadow-lg"
                >
                  <CheckCircle2 size={20} className="text-emerald-400 shrink-0" />
                  <span>Data tersimpan! Mengarahkan Anda ke WhatsApp Cahaya Barbershop untuk konfirmasi...</span>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center space-x-1">
                    <span>Nama Lengkap</span>
                    <span className="text-blue-400">*</span>
                  </label>
                  <div className="relative">
                    <User size={18} className="absolute left-3.5 top-3.5 text-gray-500" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Budi Santoso"
                      value={booking.name}
                      onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                      className="w-full bg-[#050505] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center space-x-1">
                    <span>Nomor WhatsApp</span>
                    <span className="text-blue-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone size={18} className="absolute left-3.5 top-3.5 text-gray-500" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 087735495286"
                      value={booking.phone}
                      onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                      className="w-full bg-[#050505] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Branch & Service Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Branch Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center space-x-1">
                    <span>Pilih Cabang</span>
                    <span className="text-blue-400">*</span>
                  </label>
                  <div className="relative">
                    <MapPin size={18} className="absolute left-3.5 top-3.5 text-gray-500" />
                    <select
                      value={booking.branch}
                      onChange={(e) => setBooking({ ...booking, branch: e.target.value })}
                      className="w-full bg-[#050505] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
                    >
                      {BRANCHES_DATA.map((branch) => (
                        <option key={branch.id} value={branch.name} className="bg-[#0e0e14]">
                          {branch.name} {branch.isMain ? '(Pusat)' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                    Pilihan Layanan
                  </label>
                  <select
                    value={booking.service}
                    onChange={(e) => setBooking({ ...booking, service: e.target.value })}
                    className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
                  >
                    <optgroup label="✂️ HAIRCUT SERVICES" className="bg-[#0e0e14] font-bold text-blue-400">
                      {haircuts.map((s) => (
                        <option key={s.id} value={s.name} className="text-white">
                          {s.name} ({s.price})
                        </option>
                      ))}
                    </optgroup>

                    <optgroup label="🎨 HAIR COLOR" className="bg-[#0e0e14] font-bold text-blue-400">
                      {colors.map((s) => (
                        <option key={s.id} value={s.name} className="text-white">
                          {s.name} ({s.price})
                        </option>
                      ))}
                    </optgroup>

                    <optgroup label="🌊 PERM & OTHERS" className="bg-[#0e0e14] font-bold text-blue-400">
                      {others.map((s) => (
                        <option key={s.id} value={s.name} className="text-white">
                          {s.name} ({s.price})
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Row 3: Barber & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                    Pilihan Barber
                  </label>
                  <select
                    value={booking.barber}
                    onChange={(e) => setBooking({ ...booking, barber: e.target.value })}
                    className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
                  >
                    <option value="Any Master Barber" className="bg-[#0e0e14]">
                      Any Master Barber (Siapa saja yang siap)
                    </option>
                    {BARBERS_DATA.map((b) => (
                      <option key={b.id} value={b.name} className="bg-[#0e0e14]">
                        {b.name} ({b.role})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                    Pilih Tanggal
                  </label>
                  <div className="relative">
                    <Calendar size={18} className="absolute left-3.5 top-3.5 text-gray-500" />
                    <input
                      type="date"
                      required
                      min={today}
                      value={booking.date}
                      onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                      className="w-full bg-[#050505] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Row 4: Time Slot */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                  Pilih Jam Kedatangan
                </label>
                <div className="relative">
                  <Clock size={18} className="absolute left-3.5 top-3.5 text-gray-500" />
                  <select
                    value={booking.time}
                    onChange={(e) => setBooking({ ...booking, time: e.target.value })}
                    className="w-full bg-[#050505] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
                  >
                    {TIME_SLOTS.map((time) => (
                      <option key={time} value={time} className="bg-[#0e0e14]">
                        {time} WIB
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 5: Notes */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                  Catatan / Permintaan Khusus (Opsional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Contoh: Ingin potong fade oleh Kang Yayat di cabang Manislor, konsultasi Korean perm, dll..."
                  value={booking.notes}
                  onChange={(e) => setBooking({ ...booking, notes: e.target.value })}
                  className="w-full bg-[#050505] border border-white/10 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02, boxShadow: '0 0 35px rgba(30,94,255,0.6)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-[#123C8C] via-[#1E5EFF] to-blue-600 hover:from-blue-600 hover:to-indigo-600 text-white font-bold rounded-xl text-xs tracking-[0.2em] shadow-[0_0_25px_rgba(30,94,255,0.4)] transition-all uppercase flex items-center justify-center space-x-2.5 border border-blue-400/40 cursor-pointer"
              >
                <MessageSquare size={18} />
                <span>KIRIM RESERVASI VIA WHATSAPP</span>
              </motion.button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
