import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { serviceData } from '@/lib/pageData';

const services = Object.entries(serviceData).map(([slug, s]) => ({ slug, ...s }));

export default function ServicesSlider() {
  return (
    <section className="py-16 lg:py-24 overflow-hidden" style={{ background: '#26272C' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <span className="text-xs font-mono tracking-widest uppercase mb-2 block" style={{ color: '#CC0100' }}>Ďalšie služby</span>
            <h2 className="text-2xl sm:text-3xl font-space font-bold text-white">Objavte celé portfólio</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="swiper-prev-btn w-10 h-10 rounded-full flex items-center justify-center transition-all"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#CC0100'; e.currentTarget.style.borderColor = '#CC0100'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
            >
              <ArrowLeft className="w-4 h-4 text-white" />
            </button>
            <button
              className="swiper-next-btn w-10 h-10 rounded-full flex items-center justify-center transition-all"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#CC0100'; e.currentTarget.style.borderColor = '#CC0100'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
            >
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        <Swiper



          modules={[Navigation, Pagination, A11y]}
          spaceBetween={16}
          slidesPerView={1}
          navigation={{ prevEl: '.swiper-prev-btn', nextEl: '.swiper-next-btn' }}
          pagination={{ clickable: true, el: '.swiper-dots' }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!overflow-visible"
        >
          {services.map((service) => (
            <SwiperSlide key={service.slug}>
              <ServiceSlide service={service} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-dots flex justify-center gap-2 mt-8" />
      </div>

      <style>{`
        .swiper-dots .swiper-pagination-bullet {
          width: 6px; height: 6px;
          background: rgba(255,255,255,0.2);
          border-radius: 9999px;
          opacity: 1;
          transition: all 0.3s;
        }
        .swiper-dots .swiper-pagination-bullet-active {
          background: #CC0100;
          width: 20px;
        }
      `}</style>
    </section>
  );
}

function ServiceSlide({ service }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group block rounded-2xl overflow-hidden relative"
      style={{ border: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="aspect-[2.3/2] h-full overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 transition-all duration-500"
          style={{ background: 'linear-gradient(to top, rgba(26,27,30,0.95) 0%, rgba(26,27,30,0.3) 60%, transparent 100%)' }}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5">
        {/* <span className="text-xs font-mono tracking-widest uppercase block mb-1" style={{ color: '#CC0100' }}>{service.subtitle}</span> */}
        <h3 className="text-base font-space font-bold text-white mb-1">{service.title}</h3>
        <p className="text-xs leading-relaxed line-clamp-2" style={{ color: 'rgba(255,255,255,0.45)' }}>{service.desc}</p>
        <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-white/50 group-hover:text-brand-red transition-colors">
          Zobraziť viac <ArrowRight className="w-3 h-3" />
        </div>
      </div>
    </Link>
  );
}