import React, { useState, useEffect, useRef } from 'react';
import {
  Scissors,
  Sparkles,
  Award,
  Clock,
  MapPin,
  Phone,
  Instagram,
  CheckCircle2,
  Star,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  Calendar,
  User,
  MessageSquare,
  ExternalLink,
  Eye,
  Flame,
  ShieldCheck,
  Crown,
  Share2,
  BookOpen
} from 'lucide-react';

const SERVICES_DATA = [
  {
    id: 'haircut',
    name: 'HAIRCUT',
    price: 'Rp 45.000',
    numericPrice: 45000,
    time: '45 mins',
    desc: 'Precision haircut tailored to your head shape, hair type, and personal style. Includes hot towel finishing.',
    icon: Scissors,
    tag: 'POPULAR'
  },
  {
    id: 'haircut-wash',
    name: 'HAIRCUT + WASH',
    price: 'Rp 65.000',
    numericPrice: 65000,
    time: '60 mins',
    desc: 'Custom cut followed by refreshing scalp wash, scalp massage, and professional blow-dry finishing.',
    icon: Sparkles,
    tag: 'RECOMMENDED'
  },
  {
    id: 'premium-package',
    name: 'PREMIUM PACKAGE',
    price: 'Rp 120.000',
    numericPrice: 120000,
    time: '90 mins',
    desc: 'Complete royal grooming experience: Haircut, beard sculpture, facial massage, hair tonic, wash, and style.',
    icon: Crown,
    tag: 'BEST VALUE'
  },
  {
    id: 'beard-trim',
    name: 'BEARD TRIM & SHAPE',
    price: 'Rp 35.000',
    numericPrice: 35000,
    time: '30 mins',
    desc: 'Clean and precise beard shaping, line work with razor detail, hot towel, and hydrating beard oil.',
    icon: Flame,
    tag: 'CLASSIC'
  },
  {
    id: 'kids-haircut',
    name: 'KIDS HAIRCUT',
    price: 'Rp 40.000',
    numericPrice: 40000,
    time: '35 mins',
    desc: 'Patient, comfortable, and stylish cuts for boys under 12 years old in a welcoming barbershop setting.',
    icon: ShieldCheck,
    tag: 'JUNIOR'
  },
  {
    id: 'hair-styling',
    name: 'HAIR STYLING & POMADE',
    price: 'Rp 30.000',
    numericPrice: 30000,
    time: '20 mins',
    desc: 'Quick wash, blow-dry, and professional texture application with premium matte or shine pomade.',
    icon: Award,
    tag: 'EXPRESS'
  }
];

const PRICING_PACKAGES = [
  {
    id: 'basic',
    name: 'BASIC',
    subtitle: 'Essential Everyday Grooming',
    price: 'Rp 45.000',
    highlighted: false,
    features: [
      'Consultation & Custom Cut',
      'Neck & Sideburn Shave',
      'Hot Towel Refresh',
      'Basic Pomade/Wax Styling'
    ]
  },
  {
    id: 'signature',
    name: 'SIGNATURE',
    subtitle: 'The Kuningan Favorite',
    price: 'Rp 85.000',
    highlighted: true,
    popularBadge: 'MOST POPULAR',
    features: [
      'Precision Custom Haircut',
      'Scalp Cleansing Wash & Massage',
      'Cold Refreshment Beverage',
      'Beard Line Detailing or Face Massage',
      'Premium Pomade & Hair Tonic'
    ]
  },
  {
    id: 'premium',
    name: 'PREMIUM VIP',
    subtitle: 'Full Royal Treatment',
    price: 'Rp 120.000',
    highlighted: false,
    features: [
      'Complete Haircut & Hair Sculpture',
      'Full Beard Trim & Razor Line Contour',
      'Relaxing Scalp & Shoulder Massage',
      'Charcoal Facial Cleansing Mask',
      'Hair Tonic & Signature Pomade'
    ]
  }
];

const BARBERS_DATA = [
  {
    id: 1,
    name: 'Reza "The Blade" Pratama',
    role: 'Senior Master Barber',
    exp: '7+ Years Exp.',
    specialty: 'Classic Tapers & Razor Fades',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
    instagram: '@reza_barberkun'
  },
  {
    id: 2,
    name: 'Dimas Kurniawan',
    role: 'Fade & Texture Specialist',
    exp: '5+ Years Exp.',
    specialty: 'Modern Crop & Mid-Fade Specialist',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
    instagram: '@dimas_barberkun'
  },
  {
    id: 3,
    name: 'Aris "Slick" Nugroho',
    role: 'Beard & Sculpting Expert',
    exp: '6+ Years Exp.',
    specialty: 'Beard Architecture & Hot Towel Shave',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600',
    instagram: '@aris_barberkun'
  },
  {
    id: 4,
    name: 'Bima Satria',
    role: 'Style & Grooming Consultant',
    exp: '4+ Years Exp.',
    specialty: 'Mullet, Textured Scissors & Hair Art',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=600',
    instagram: '@bima_barberkun'
  }
];

const GALLERY_DATA = [
  {
    id: 1,
    category: 'cuts',
    title: 'Clean Low Burst Fade',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    category: 'interior',
    title: 'Luxury Leather Barber Station',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    category: 'beard',
    title: 'Precision Beard Line Detailing',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    category: 'process',
    title: 'Hot Towel Scalp Treatment',
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    category: 'cuts',
    title: 'Textured Crop with Mid Skin Fade',
    image: 'https://images.unsplash.com/photo-1517832606589-715003058476?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 6,
    category: 'interior',
    title: 'Vintage Chrome Barber Chair Detail',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800'
  }
];

const REVIEWS_DATA = [
  {
    id: 1,
    name: 'Andika Wijaya',
    role: 'Regular Client',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    review: 'Pelayanannya nyaman banget, tempatnya clean & luxury. Mas Reza paham banget sama bentuk muka saya, potongan potongannya super rapi dan tahan lama!'
  },
  {
    id: 2,
    name: 'Farhan Hidayat',
    role: 'Business Executive',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    review: 'Barbershop paling rekomended di Kuningan. Barbernya ramah, dikasih saran pomade yang cocok, plus wash & scalp massagenya bikin hilang stres.'
  },
  {
    id: 3,
    name: 'Rian Putra',
    role: 'Creative Designer',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    review: 'Tempat barbershop modern dengan vibe maskulin kelas atas. Booking via website gampang banget dan ga perlu nunggu antrean lama.'
  }
];

const BLOG_DATA = [
  {
    id: 1,
    title: '5 Classic Haircuts That Never Go Out of Style',
    date: 'Sep 18, 2026',
    category: 'Style Guide',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=600',
    excerpt: 'Discover timeless men hairstyles that maintain sharpness regardless of changing fashion trends.',
    content: 'Classic haircuts like the Executive Side Part, Slick Back, Pompadour, Crew Cut, and Buzz Cut continue to define masculine elegance. In this guide, our master barbers break down how to communicate these styles to your barber and which products keep them looking sharp all day.'
  },
  {
    id: 2,
    title: 'How to Choose a Hairstyle Based on Your Face Shape',
    date: 'Aug 29, 2026',
    category: 'Barber Advice',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600',
    excerpt: 'Square, oval, round, or diamond? Learn how your face shape dictates your optimal haircut contour.',
    content: 'Matching your cut to your natural jawline and cheekbone structure elevates your entire look. Oval shapes suit almost any cut, while square jaws thrive with high-fade contrasts. Learn the rules of symmetry used by BARBERKUN craftsmen.'
  },
  {
    id: 3,
    title: 'Essential Beard Care Routine After a Fresh Trim',
    date: 'Aug 10, 2026',
    category: 'Grooming',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=600',
    excerpt: 'Keep your beard healthy, hydrated, and precisely lined between your barbershop visits.',
    content: 'A razor-sharp beard line requires daily care. Learn how proper beard wash, natural oils, and boar bristle brushing maintain softness and eliminate skin irritation under your beard.'
  }
];

function WebGLHeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    if (!gl) {
      // Fallback to 2D Canvas ambient fluid glow if WebGL isn't supported
      const ctx = canvas.getContext('2d');
      let time = 0;
      const draw2d = () => {
        time += 0.01;
        ctx.fillStyle = '#050505';
        ctx.fillRect(0, 0, width, height);

        const grad1 = ctx.createRadialGradient(
          width * 0.75 + Math.sin(time) * 40,
          height * 0.5 + Math.cos(time * 0.8) * 30,
          20,
          width * 0.75,
          height * 0.5,
          width * 0.5
        );
        grad1.addColorStop(0, 'rgba(30, 94, 255, 0.25)');
        grad1.addColorStop(0.5, 'rgba(18, 60, 140, 0.1)');
        grad1.addColorStop(1, 'rgba(5, 5, 5, 0)');

        ctx.fillStyle = grad1;
        ctx.fillRect(0, 0, width, height);
        animationFrameId = requestAnimationFrame(draw2d);
      };
      draw2d();
      return () => cancelAnimationFrame(animationFrameId);
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
        st.x *= u_resolution.x / u_resolution.y;

        vec2 center = vec2(1.2, 0.4);
        float d = distance(st, center);

        float wave = sin(st.x * 3.0 + u_time * 0.8) * cos(st.y * 3.0 + u_time * 0.5) * 0.15;
        float circle = smoothstep(0.8, 0.0, d + wave);

        vec3 deepBg = vec3(0.02, 0.02, 0.03);
        vec3 royalBlue = vec3(0.07, 0.23, 0.55);
        vec3 electricBlue = vec3(0.11, 0.36, 0.95);

        vec3 finalColor = mix(deepBg, royalBlue, circle * 0.6);
        finalColor += electricBlue * pow(circle, 2.2) * 0.35;

        // Add subtle vignette
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        float vignette = uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y);
        vignette = clamp(pow(16.0 * vignette, 0.25), 0.0, 1.0);
        finalColor *= vignette;

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const createShader = (gl, type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };

    const vertShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    const program = gl.createProgram();
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
      if (!canvas) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
      gl.viewport(0, 0, width, height);
    };

    window.addEventListener('resize', handleResize);

    let startTime = performance.now();
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

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [galleryFilter, setGalleryFilter] = useState('all');
  const [selectedGalleryImg, setSelectedGalleryImg] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Booking Form State
  const [booking, setBooking] = useState({
    name: '',
    phone: '',
    service: 'HAIRCUT + WASH',
    barber: 'Any Master Barber',
    date: new Date().toISOString().split('T')[0],
    time: '14:00',
    notes: ''
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Scroll listener for translucent header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // WhatsApp Pre-filled Redirect
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!booking.name || !booking.phone) return;

    const message = `Hello BARBERKUN KUNINGAN,
I would like to book a grooming appointment:
• Name: ${booking.name}
• Phone: ${booking.phone}
• Service: ${booking.service}
• Preferred Barber: ${booking.barber}
• Date: ${booking.date}
• Time: ${booking.time}
${booking.notes ? `• Notes: ${booking.notes}` : ''}`;

    const encodedMsg = encodeURIComponent(message);
    const waUrl = `https://wa.me/6281234567890?text=${encodedMsg}`;

    setBookingSuccess(true);
    setTimeout(() => {
      window.open(waUrl, '_blank');
      setBookingSuccess(false);
    }, 1200);
  };

  // Filter gallery images
  const filteredGallery = galleryFilter === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === galleryFilter);

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#1E5EFF] selection:text-white relative overflow-x-hidden">

      { }
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? 'bg-[#050505]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-black/80 to-transparent py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Desktop Left Nav */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs tracking-[0.2em] font-semibold text-gray-300">
            <button onClick={() => scrollToSection('home')} className="hover:text-blue-400 transition-colors uppercase">HOME</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition-colors uppercase">ABOUT</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-blue-400 transition-colors uppercase">SERVICES</button>
          </nav>

          {/* Centered Brand Logo */}
          <div
            onClick={() => scrollToSection('home')}
            className="cursor-pointer text-center group flex flex-col items-center select-none"
          >
            <div className="flex items-center space-x-2">
              <span className="font-serif text-2xl sm:text-3xl tracking-widest font-black text-white group-hover:text-blue-400 transition-colors">
                BARBERKUN
              </span>
            </div>
            <span className="text-[9px] sm:text-[10px] tracking-[0.4em] text-blue-400 font-bold -mt-1 uppercase">
              KUNINGAN
            </span>
          </div>

          {/* Desktop Right Nav */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs tracking-[0.2em] font-semibold text-gray-300">
            <button onClick={() => scrollToSection('barbers')} className="hover:text-blue-400 transition-colors uppercase">BARBERS</button>
            <button onClick={() => scrollToSection('gallery')} className="hover:text-blue-400 transition-colors uppercase">GALLERY</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition-colors uppercase">CONTACT</button>
            <button
              onClick={() => scrollToSection('booking')}
              className="px-5 py-2 bg-gradient-to-r from-[#123C8C] to-[#1E5EFF] text-white rounded text-[11px] font-bold tracking-wider hover:shadow-[0_0_20px_rgba(30,94,255,0.5)] transition-all transform hover:-translate-y-0.5"
            >
              BOOK NOW
            </button>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-blue-400 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation Sheet Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0a0a0c]/98 backdrop-blur-xl border-b border-white/10 px-6 py-8 space-y-5 animate-in slide-in-from-top-5 duration-200">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-sm font-bold tracking-widest uppercase hover:text-blue-400">HOME</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-sm font-bold tracking-widest uppercase hover:text-blue-400">ABOUT</button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-sm font-bold tracking-widest uppercase hover:text-blue-400">SERVICES</button>
            <button onClick={() => scrollToSection('pricing')} className="block w-full text-left py-2 text-sm font-bold tracking-widest uppercase hover:text-blue-400">PACKAGES</button>
            <button onClick={() => scrollToSection('barbers')} className="block w-full text-left py-2 text-sm font-bold tracking-widest uppercase hover:text-blue-400">BARBERS</button>
            <button onClick={() => scrollToSection('gallery')} className="block w-full text-left py-2 text-sm font-bold tracking-widest uppercase hover:text-blue-400">GALLERY</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-sm font-bold tracking-widest uppercase hover:text-blue-400">CONTACT</button>
            <button
              onClick={() => scrollToSection('booking')}
              className="w-full py-3 bg-gradient-to-r from-[#123C8C] to-[#1E5EFF] text-white font-bold rounded tracking-wider shadow-lg text-center uppercase text-sm"
            >
              BOOK YOUR STOPOVER
            </button>
          </div>
        )}
      </header>

      { }
      <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#050505]">
        {/* Procedural WebGL Background Shader */}
        <WebGLHeroCanvas />

        {/* Oversized Brand Watermark Background (matching reference) */}
        <div className="absolute -left-12 bottom-10 pointer-events-none opacity-[0.04] select-none hidden lg:block">
          <h1 className="font-serif text-[180px] font-extrabold tracking-tighter leading-none text-white">
            BARBERKUN
          </h1>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left pt-6 lg:pt-0">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest text-blue-300 uppercase">
                PREMIUM BARBERSHOP • KUNINGAN
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white leading-[1.08]">
              LOOK SHARP. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-blue-400">
                FEEL CONFIDENT.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Premium men’s grooming experience in Kuningan. Custom precision cuts, hot towel shaves, and scalp treatments designed for style and confidence.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => scrollToSection('booking')}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#123C8C] via-[#1E5EFF] to-blue-600 text-white font-bold rounded text-xs tracking-[0.2em] shadow-[0_0_30px_rgba(30,94,255,0.4)] hover:shadow-[0_0_45px_rgba(30,94,255,0.7)] transition-all transform hover:-translate-y-1 uppercase flex items-center justify-center space-x-2"
              >
                <span>BOOK YOUR STOPOVER</span>
                <ChevronRight size={16} />
              </button>

              <button
                onClick={() => scrollToSection('services')}
                className="w-full sm:w-auto px-8 py-4 bg-black/40 hover:bg-white/10 text-white font-semibold rounded text-xs tracking-[0.2em] border border-white/20 transition-all uppercase backdrop-blur-sm"
              >
                EXPLORE SERVICES
              </button>
            </div>

            {/* Micro Badge Highlights */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
              <div>
                <p className="font-serif text-2xl font-bold text-white">5.0 ★</p>
                <p className="text-[10px] text-gray-400 tracking-wider uppercase">Google Rating</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-white">1,200+</p>
                <p className="text-[10px] text-gray-400 tracking-wider uppercase">Happy Clients</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-white">100%</p>
                <p className="text-[10px] text-gray-400 tracking-wider uppercase">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Column (Matching Reference Composition) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">

            {/* Radial Glow Frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-blue-900/10 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>

            {/* Main Barber Chair Hero Asset Container */}
            <div className="relative w-full max-w-md lg:max-w-none group">

              {/* Main Realistic Barber Chair Visual */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-gray-900/80 to-black p-3 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1000"
                  alt="BARBERKUN Modern Barber Chair"
                  className="w-full h-[420px] sm:h-[480px] object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                />

                {/* Gradient Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 pointer-events-none"></div>

                {/* Floating 3D Blue Badge Overlay (Inspired by Design Reference Tag) */}
                <div
                  onClick={() => scrollToSection('booking')}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-gradient-to-r from-[#123C8C] via-[#1E5EFF] to-[#123C8C] p-0.5 rounded-lg shadow-[0_0_35px_rgba(30,94,255,0.8)] border border-blue-400/50 hover:scale-110 transition-all duration-300 group/btn"
                >
                  <div className="bg-black/80 backdrop-blur-md px-6 py-4 rounded-[6px] text-center border border-blue-500/30">
                    <span className="block text-[10px] font-bold tracking-[0.3em] text-blue-300 uppercase">
                      RESERVE YOUR CHAIR
                    </span>
                    <span className="block text-lg sm:text-xl font-serif font-bold text-white mt-0.5 group-hover/btn:text-blue-300 transition-colors">
                      Book Your Stopover
                    </span>
                  </div>
                </div>

                {/* Bottom Chair Badge Info */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md p-3 rounded-lg border border-white/10 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-md bg-blue-600/30 border border-blue-500/40 text-blue-400">
                      <Scissors size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white uppercase tracking-wider">BARBERKUN CHAIR #1</p>
                      <p className="text-[10px] text-gray-400">Comfort • Precision • Luxury</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-1 rounded">
                    OPEN NOW
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      { }
      <section id="about" className="py-24 bg-[#0a0a0c] relative border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Image Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=800"
                  alt="Barberkun Craftsmanship"
                  className="w-full h-[450px] object-cover filter brightness-90 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                {/* Floating Experience Counter */}
                <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md p-5 rounded-lg border border-white/15 max-w-xs">
                  <p className="text-3xl font-serif font-bold text-white">5+ YEARS</p>
                  <p className="text-xs text-blue-400 uppercase font-semibold tracking-widest mt-1">
                    EXCELLENCE IN KUNINGAN
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block px-3 py-1 rounded bg-blue-950/50 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-widest uppercase">
                THE BARBERKUN STORY
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
                More Than Just <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                  A Haircut.
                </span>
              </h2>

              <p className="text-gray-300 leading-relaxed font-light text-base">
                <strong className="text-white font-semibold">BARBERKUN KUNINGAN</strong> is a modern barbershop created for men who appreciate meticulous precision, tailored styles, and a relaxed luxury atmosphere.
              </p>

              <p className="text-gray-400 leading-relaxed font-light text-sm">
                Every visit begins with a personal style consultation. From razor-sharp tapers to classic pompadours and beard contouring, our team ensures you step out looking sharp and feeling confident.
              </p>

              {/* Pillars Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-lg bg-white/[0.02] border border-white/10">
                  <Scissors className="text-blue-400 mb-2" size={22} />
                  <h3 className="font-bold text-white text-sm">Master Craftsmanship</h3>
                  <p className="text-xs text-gray-400 mt-1">Trained barbers focused on line geometry and hair health.</p>
                </div>

                <div className="p-4 rounded-lg bg-white/[0.02] border border-white/10">
                  <Sparkles className="text-blue-400 mb-2" size={22} />
                  <h3 className="font-bold text-white text-sm">Premium Atmosphere</h3>
                  <p className="text-xs text-gray-400 mt-1">Air-conditioned lounge, espresso bar, and relaxing hot towels.</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      { }
      <section id="services" className="py-24 bg-[#050505] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold tracking-[0.3em] text-blue-400 uppercase">
              TAILORED GROOMING
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              Our Signature Services
            </h2>
            <p className="text-gray-400 text-sm sm:text-base font-light">
              Choose from our curated men grooming menu delivered by skilled barbers using top-tier products.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative bg-[#0d0d12] rounded-xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(30,94,255,0.25)] flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-lg bg-blue-950/60 border border-blue-500/30 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <IconComp size={24} />
                      </div>
                      <span className="text-[10px] font-bold tracking-widest px-2.5 py-1 rounded bg-white/5 border border-white/10 text-gray-300 uppercase">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {service.name}
                    </h3>

                    <p className="text-gray-400 text-xs leading-relaxed font-light">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="block text-lg font-bold text-white">{service.price}</span>
                      <span className="text-[10px] text-gray-400">{service.time} session</span>
                    </div>

                    <button
                      onClick={() => {
                        setBooking({ ...booking, service: service.name });
                        scrollToSection('booking');
                      }}
                      className="px-4 py-2 bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white text-xs font-bold rounded transition-colors"
                    >
                      SELECT
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      { }
      <section id="pricing" className="py-24 bg-[#0a0a0c] border-t border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold tracking-[0.3em] text-blue-400 uppercase">
              EXCLUSIVITY & SAVINGS
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              Grooming Packages
            </h2>
            <p className="text-gray-400 text-sm font-light">
              Select the package that matches your grooming standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {PRICING_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${pkg.highlighted
                    ? 'bg-gradient-to-b from-[#0f1d38] via-[#091122] to-[#050a14] border-2 border-blue-500 shadow-[0_0_40px_rgba(30,94,255,0.3)] transform md:-translate-y-3'
                    : 'bg-[#0d0d12] border border-white/10 hover:border-white/20'
                  }`}
              >
                {pkg.popularBadge && (
                  <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-bold tracking-widest px-4 py-1 rounded-full uppercase shadow-md">
                    {pkg.popularBadge}
                  </div>
                )}

                <div>
                  <h3 className="font-serif text-2xl font-bold text-white">{pkg.name}</h3>
                  <p className="text-xs text-gray-400 mt-1">{pkg.subtitle}</p>

                  <div className="my-6">
                    <span className="text-3xl sm:text-4xl font-serif font-extrabold text-white">{pkg.price}</span>
                  </div>

                  <ul className="space-y-3 my-6">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center space-x-3 text-xs text-gray-300">
                        <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => {
                    setBooking({ ...booking, service: `${pkg.name} PACKAGE` });
                    scrollToSection('booking');
                  }}
                  className={`w-full py-3.5 rounded font-bold text-xs tracking-wider uppercase transition-all ${pkg.highlighted
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                >
                  SELECT PACKAGE
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      { }
      <section id="barbers" className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold tracking-[0.3em] text-blue-400 uppercase">
              THE CRAFTSMEN
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              Meet Our Barbers
            </h2>
            <p className="text-gray-400 text-sm font-light">
              Master barbers dedicated to precision, geometry, and personal style.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {BARBERS_DATA.map((barber) => (
              <div
                key={barber.id}
                className="group bg-[#0a0a0d] rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={barber.image}
                    alt={barber.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                  <span className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-bold text-blue-300 border border-blue-500/30">
                    {barber.exp}
                  </span>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {barber.name}
                  </h3>
                  <p className="text-xs text-blue-400 font-semibold">{barber.role}</p>
                  <p className="text-xs text-gray-400 font-light">{barber.specialty}</p>

                  <div className="pt-4 flex items-center justify-between text-[11px] text-gray-400 border-t border-white/10 mt-4">
                    <span className="flex items-center space-x-1">
                      <Instagram size={14} className="text-pink-500" />
                      <span>{barber.instagram}</span>
                    </span>
                    <button
                      onClick={() => {
                        setBooking({ ...booking, barber: barber.name });
                        scrollToSection('booking');
                      }}
                      className="text-blue-400 hover:text-white font-bold uppercase text-[10px]"
                    >
                      BOOK CHAIR
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      { }
      <section id="gallery" className="py-24 bg-[#0a0a0c] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold tracking-[0.3em] text-blue-400 uppercase">
                PORTFOLIO & ATMOSPHERE
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-1">
                Barbershop Gallery
              </h2>
            </div>

            {/* Gallery Category Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {['all', 'cuts', 'beard', 'interior', 'process'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setGalleryFilter(cat)}
                  className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all ${galleryFilter === cat
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white/5 hover:bg-white/10 text-gray-400'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry / Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedGalleryImg(item)}
                className="group relative rounded-xl overflow-hidden cursor-pointer border border-white/10 bg-black h-72"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white">{item.title}</h3>
                  <div className="mt-2 flex items-center space-x-1 text-xs text-gray-300">
                    <Eye size={14} />
                    <span>Click to view full screen</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      { }
      {selectedGalleryImg && (
        <div
          onClick={() => setSelectedGalleryImg(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div className="relative max-w-4xl w-full bg-[#0d0d12] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedGalleryImg(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/60 rounded-full text-white hover:bg-white/20"
            >
              <X size={20} />
            </button>
            <img
              src={selectedGalleryImg.image}
              alt={selectedGalleryImg.title}
              className="w-full max-h-[75vh] object-contain bg-black"
            />
            <div className="p-6 bg-[#0a0a0d] flex justify-between items-center">
              <div>
                <span className="text-xs text-blue-400 font-bold uppercase">{selectedGalleryImg.category}</span>
                <h3 className="text-xl font-serif font-bold text-white">{selectedGalleryImg.title}</h3>
              </div>
              <button
                onClick={() => {
                  setSelectedGalleryImg(null);
                  scrollToSection('booking');
                }}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded font-bold text-xs uppercase"
              >
                BOOK THIS LOOK
              </button>
            </div>
          </div>
        </div>
      )}

      { }
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="p-6 rounded-xl bg-[#0a0a0d] border border-white/10 space-y-3">
              <div className="p-3 w-fit rounded-lg bg-blue-950/60 border border-blue-500/30 text-blue-400">
                <Scissors size={24} />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">PRECISION</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                Every haircut and beard line is executed with geometric perfection and razor-sharp detailing.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0a0a0d] border border-white/10 space-y-3">
              <div className="p-3 w-fit rounded-lg bg-blue-950/60 border border-blue-500/30 text-blue-400">
                <Sparkles size={24} />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">COMFORT</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                Enjoy cold refreshments, air-conditioned luxury lounge, hot towels, and ergonomic chairs.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0a0a0d] border border-white/10 space-y-3">
              <div className="p-3 w-fit rounded-lg bg-blue-950/60 border border-blue-500/30 text-blue-400">
                <Crown size={24} />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">STYLE</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                Custom cut recommendations based on face shape, lifestyle, and modern trend aesthetics.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0a0a0d] border border-white/10 space-y-3">
              <div className="p-3 w-fit rounded-lg bg-blue-950/60 border border-blue-500/30 text-blue-400">
                <Award size={24} />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">PROFESSIONAL</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                Trained and certified master barbers dedicated to hygienic, high-grade men grooming.
              </p>
            </div>

          </div>
        </div>
      </section>

      { }
      <section className="py-24 bg-[#0a0a0c] border-t border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center space-y-4 mb-16">
            <span className="text-xs font-bold tracking-[0.3em] text-blue-400 uppercase">
              CLIENT REVIEWS
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              What Our Clients Say
            </h2>
          </div>

          <div className="relative bg-[#0d0d12] rounded-2xl p-8 sm:p-12 border border-white/10 shadow-2xl">
            <div className="flex flex-col items-center text-center space-y-6">

              <div className="flex space-x-1 text-amber-400">
                {[...Array(REVIEWS_DATA[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>

              <p className="text-base sm:text-xl font-serif italic text-gray-200 max-w-2xl leading-relaxed">
                "{REVIEWS_DATA[activeTestimonial].review}"
              </p>

              <div className="flex items-center space-x-4 pt-4">
                <img
                  src={REVIEWS_DATA[activeTestimonial].avatar}
                  alt={REVIEWS_DATA[activeTestimonial].name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
                />
                <div className="text-left">
                  <h4 className="font-bold text-white text-sm">{REVIEWS_DATA[activeTestimonial].name}</h4>
                  <p className="text-xs text-gray-400">{REVIEWS_DATA[activeTestimonial].role}</p>
                </div>
              </div>

            </div>

            {/* Slider Controls */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/10">
              <button
                onClick={() => setActiveTestimonial((prev) => (prev === 0 ? REVIEWS_DATA.length - 1 : prev - 1))}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-white transition-colors"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex space-x-2">
                {REVIEWS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${activeTestimonial === idx ? 'bg-blue-500 w-8' : 'bg-white/20'
                      }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setActiveTestimonial((prev) => (prev === REVIEWS_DATA.length - 1 ? 0 : prev + 1))}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-white transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>

          </div>

        </div>
      </section>

      { }
      <section id="booking" className="py-24 bg-[#050505] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold tracking-[0.3em] text-blue-400 uppercase">
                RESERVE YOUR CHAIR
              </span>

              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
                Ready For Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  Next Fresh Look?
                </span>
              </h2>

              <p className="text-gray-300 text-sm font-light leading-relaxed">
                Book your grooming session online in under 60 seconds. Our system directly transfers your appointment details to our WhatsApp team for instant confirmation.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-blue-950/60 border border-blue-500/30 text-blue-400 shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Opening Hours</h4>
                    <p className="text-xs text-gray-400">Monday - Sunday: 10:00 - 21:00 WIB</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-blue-950/60 border border-blue-500/30 text-blue-400 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Shop Address</h4>
                    <p className="text-xs text-gray-400">Jl. Siliwangi No. 128, Kuningan City Center, Jawa Barat</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Booking Form */}
            <div className="lg:col-span-7 bg-[#0d0d12] rounded-2xl p-8 sm:p-10 border border-white/10 shadow-2xl">

              {bookingSuccess && (
                <div className="mb-6 p-4 rounded-lg bg-emerald-950/80 border border-emerald-500 text-emerald-300 text-xs font-bold flex items-center space-x-2 animate-in fade-in duration-300">
                  <CheckCircle2 size={18} />
                  <span>Redirecting to WhatsApp to send your booking confirmation...</span>
                </div>
              )}

              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">Your Full Name</label>
                    <div className="relative">
                      <User size={18} className="absolute left-3.5 top-3.5 text-gray-500" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Budi Santoso"
                        value={booking.name}
                        onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                        className="w-full bg-[#050505] border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone / WA Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">WhatsApp Number</label>
                    <div className="relative">
                      <Phone size={18} className="absolute left-3.5 top-3.5 text-gray-500" />
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 081234567890"
                        value={booking.phone}
                        onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                        className="w-full bg-[#050505] border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                  {/* Service Selection */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">Select Service</label>
                    <select
                      value={booking.service}
                      onChange={(e) => setBooking({ ...booking, service: e.target.value })}
                      className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      {SERVICES_DATA.map((s) => (
                        <option key={s.id} value={s.name} className="bg-black">{s.name} ({s.price})</option>
                      ))}
                      <option value="SIGNATURE PACKAGE" className="bg-black">SIGNATURE PACKAGE (Rp 85.000)</option>
                      <option value="PREMIUM VIP PACKAGE" className="bg-black">PREMIUM VIP PACKAGE (Rp 120.000)</option>
                    </select>
                  </div>

                  {/* Barber Selection */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">Barber Preference</label>
                    <select
                      value={booking.barber}
                      onChange={(e) => setBooking({ ...booking, barber: e.target.value })}
                      className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="Any Master Barber" className="bg-black">Any Master Barber Available</option>
                      {BARBERS_DATA.map((b) => (
                        <option key={b.id} value={b.name} className="bg-black">{b.name}</option>
                      ))}
                    </select>
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                  {/* Date Picker */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">Select Date</label>
                    <div className="relative">
                      <Calendar size={18} className="absolute left-3.5 top-3.5 text-gray-500" />
                      <input
                        type="date"
                        required
                        value={booking.date}
                        onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                        className="w-full bg-[#050505] border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Time Slot Picker */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">Select Time</label>
                    <select
                      value={booking.time}
                      onChange={(e) => setBooking({ ...booking, time: e.target.value })}
                      className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      {['10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00', '19:00', '20:00'].map((time) => (
                        <option key={time} value={time} className="bg-black">{time} WIB</option>
                      ))}
                    </select>
                  </div>

                </div>

                {/* Additional Notes */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">Notes / Special Requests (Optional)</label>
                  <textarea
                    rows="3"
                    placeholder="e.g. Skin fade with razor hard part or beard trim request..."
                    value={booking.notes}
                    onChange={(e) => setBooking({ ...booking, notes: e.target.value })}
                    className="w-full bg-[#050505] border border-white/10 rounded-lg p-4 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#123C8C] via-[#1E5EFF] to-blue-600 hover:from-blue-600 hover:to-indigo-600 text-white font-bold rounded-lg text-xs tracking-[0.2em] shadow-[0_0_25px_rgba(30,94,255,0.4)] transition-all uppercase flex items-center justify-center space-x-2"
                >
                  <MessageSquare size={16} />
                  <span>CONFIRM BOOKING VIA WHATSAPP</span>
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>

      { }
      <section className="py-24 bg-[#0a0a0c] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold tracking-[0.3em] text-blue-400 uppercase">
              JOURNAL & GUIDES
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              Grooming Articles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_DATA.map((article) => (
              <div
                key={article.id}
                onClick={() => setSelectedBlog(article)}
                className="group bg-[#0d0d12] rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 cursor-pointer transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                    />
                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                      {article.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <span className="text-[10px] text-gray-400 font-semibold">{article.date}</span>
                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-xs font-light leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center space-x-2 text-xs font-bold text-blue-400 group-hover:text-white transition-colors">
                  <span>READ ARTICLE</span>
                  <ChevronRight size={14} />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      { }
      {selectedBlog && (
        <div
          onClick={() => setSelectedBlog(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-[#0d0d12] border border-white/10 rounded-2xl overflow-hidden p-8 space-y-6 max-h-[85vh] overflow-y-auto"
          >
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-4 right-4 p-2 bg-black/60 rounded-full text-white hover:bg-white/20"
            >
              <X size={20} />
            </button>

            <span className="text-xs text-blue-400 font-bold uppercase tracking-widest">{selectedBlog.category} • {selectedBlog.date}</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">{selectedBlog.title}</h2>
            <img src={selectedBlog.image} alt={selectedBlog.title} className="w-full h-56 object-cover rounded-xl" />
            <p className="text-gray-300 text-sm leading-relaxed font-light">{selectedBlog.content}</p>

            <div className="pt-4 border-t border-white/10 flex justify-between items-center">
              <span className="text-xs text-gray-500">By BARBERKUN Editorial Team</span>
              <button
                onClick={() => setSelectedBlog(null)}
                className="px-5 py-2 bg-blue-600 text-white rounded font-bold text-xs uppercase"
              >
                CLOSE READ
              </button>
            </div>
          </div>
        </div>
      )}

      { }
      <section id="contact" className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold tracking-[0.3em] text-blue-400 uppercase">
              LOCATION & HOURS
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              Visit BARBERKUN
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Contact Details Card */}
            <div className="lg:col-span-5 bg-[#0d0d12] rounded-2xl p-8 border border-white/10 space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-bold text-white">BARBERKUN KUNINGAN</h3>
                <p className="text-xs text-blue-400 mt-1 uppercase font-semibold tracking-widest">Premium Men Grooming</p>
              </div>

              <div className="space-y-4 text-xs text-gray-300">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-blue-400 shrink-0 mt-0.5" size={18} />
                  <span>Jl. Siliwangi No. 128, Kuningan City Center, Jawa Barat 45511</span>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="text-blue-400 shrink-0" size={18} />
                  <span>+62 812-3456-7890</span>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="text-blue-400 shrink-0" size={18} />
                  <span>Mon - Sun: 10:00 - 21:00 WIB</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex gap-4">
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2"
                >
                  <MessageSquare size={16} />
                  <span>WHATSAPP</span>
                </a>

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-white/10 hover:bg-white/20 text-white rounded text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2"
                >
                  <ExternalLink size={16} />
                  <span>MAPS</span>
                </a>
              </div>
            </div>

            {/* Map Placeholder Graphic */}
            <div className="lg:col-span-7 bg-[#0d0d12] rounded-2xl overflow-hidden border border-white/10 h-[340px] relative flex items-center justify-center">
              <iframe
                title="BARBERKUN KUNINGAN Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.16347871!2d108.43!3d-6.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f16f393867825%3A0xc39ed58564db7bd5!2sKuningan%2C%20Kuningan%20Regency%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1680000000000!5m2!1sen!2sid"
                className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-70"
                loading="lazy"
              ></iframe>

              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded border border-white/10 text-xs font-bold text-white">
                📍 BARBERKUN KUNINGAN CITY CENTER
              </div>
            </div>

          </div>
        </div>
      </section>

      { }
      <footer className="bg-[#020203] text-gray-400 border-t border-white/10 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">

            {/* Brand Info */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-black text-white tracking-widest">
                  BARBERKUN
                </span>
                <span className="text-[9px] tracking-[0.4em] text-blue-400 font-bold uppercase -mt-1">
                  KUNINGAN
                </span>
              </div>

              <p className="text-xs text-gray-400 max-w-sm leading-relaxed font-light">
                Your Style. Our Craft. Premium grooming, modern cuts, and masculine luxury designed for confidence.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest">Quick Navigation</h4>
              <ul className="space-y-2 text-xs">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-blue-400 transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-blue-400 transition-colors">Services & Pricing</button></li>
                <li><button onClick={() => scrollToSection('barbers')} className="hover:text-blue-400 transition-colors">Barbers</button></li>
                <li><button onClick={() => scrollToSection('gallery')} className="hover:text-blue-400 transition-colors">Gallery</button></li>
              </ul>
            </div>

            {/* Socials & Working Hours */}
            <div className="md:col-span-4 space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest">Follow Our Craftsmen</h4>
              <div className="flex space-x-3 text-white pt-1">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-white/5 hover:bg-blue-600 transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-white/5 hover:bg-emerald-600 transition-colors">
                  <MessageSquare size={18} />
                </a>
              </div>
              <p className="text-[11px] text-gray-500 pt-2">
                Open Daily: 10:00 - 21:00 WIB
              </p>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
            <p>© 2026 BARBERKUN KUNINGAN. All rights reserved.</p>
            <p className="text-[11px]">Luxury Men's Grooming Experience</p>
          </div>

        </div>
      </footer>

      { }
      <a
        href="https://wa.me/6281234567890?text=Hello%20BARBERKUN%20KUNINGAN,%20I%20have%20a%20question%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex items-center space-x-3 bg-black/80 hover:bg-black backdrop-blur-md border border-emerald-500/40 p-2 pr-4 rounded-full shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all transform hover:scale-105 group"
      >
        <div className="bg-emerald-500 text-white p-2.5 rounded-full animate-pulse">
          <MessageSquare size={20} />
        </div>
        <div className="hidden sm:block text-left">
          <span className="block text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Need Assistance?</span>
          <span className="block text-xs font-bold text-white group-hover:text-emerald-300">Chat with us</span>
        </div>
      </a>

    </div>
  );
}