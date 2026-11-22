'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const timelineEvents = [
  {
    year: '10-Year Tenure',
    title: 'All India Radio Artist & Presenter',
    description:
      'Engaged as a junior artist for a decade at All India Radio. Broadened her repertoire through news reading, anchoring iconic radio programs such as Sishu Mahal, Chhutir Ghanta, and Golpo Dadur Ashor, alongside acclaimed poetry recitations.',
  },
  {
    year: 'Dhrupad & Khayal',
    title: 'Classical Training & Lineage',
    description:
      'Commenced formal vocal music training at age 12. Learned Dhrupad at Dagar Ashram from Aloka Nandi (disciple of Ustad Moinuddin Dagar). Mastered Khayal under Vidushi Suranjana Bose (disciple of Meera Bandopadhyay, Prasun Bandopadhyay & Padmabibhushan Girija Devi), with further guidance from Srimati Lopamudra Mitra.',
  },
  {
    year: 'Acclaimed Productions',
    title: 'Concerts & Original Releases',
    description:
      'Performed in major musical concerts across Kolkata. Co-created the celebrated joint production "Eita Tomar Gaan" alongside Pratyaya Raha, earning widespread acclaim for three consecutive years. Recorded original songs in 2021 and 2022.',
  },
  {
    year: 'Present Day',
    title: 'US Residency & Global Stage',
    description:
      'Currently residing in the United States while remaining deeply connected to cultural activities. Notable performances include Bangamela 2023 in the Bay Area, California, as well as solo concerts across diverse genres: Tagore (Rabindra Sangeet), Contemporary, Folk, Recitation, and Anchoring.',
  },
];

export default function BioSection() {
  return (
    <section className="py-12 lg:py-20 relative overflow-hidden">
      {/* Light background ambient */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900/80 border border-gold-500/30 text-gold-400 text-xs sm:text-sm font-medium backdrop-blur-md"
          >
            <span>Biography & Lineage</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl font-bold text-gold-gradient"
          >
            A Life Steeped in Melody
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-stone-300 text-base sm:text-lg leading-relaxed font-light"
          >
            From her early broadcast years at All India Radio to studying under legendary classical gurus and captivating audiences across continents.
          </motion.p>
        </div>

        {/* Feature Grid: Artist Portrait & Highlight Quotes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Portrait Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative group"
          >
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl bg-stone-900 gold-border-glow">
              <Image
                src="/2bw.jpg"
                alt="Sritama Basu Portrait"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-stone-950/80 backdrop-blur-md border border-gold-500/20">
                <span className="font-serif text-lg font-bold text-gold-300 block">Sritama Basu</span>
                <span className="text-xs text-stone-400">Dhrupad, Khayal & Contemporary Artistry</span>
              </div>
            </div>
          </motion.div>

          {/* Core Biography Text Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-stone-900/60 border border-gold-500/20 backdrop-blur-md space-y-4 shadow-xl">
              <h3 className="font-serif text-2xl font-semibold text-gold-300">
                The Classical Foundation
              </h3>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Sritama&apos;s musical voyage began at the age of 12. She was tutored in the ancient art of <strong className="text-gold-400 font-medium">Dhrupad</strong> at Dagar Ashram by Srimati Aloka Nandi, a disciple of the legendary Ustad Moinuddin Dagar. 
              </p>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                She subsequently expanded her mastery into <strong className="text-gold-400 font-medium">Khayal</strong> under Vidushi Suranjana Bose — herself a disciple of Smt. Meera Bandopadhyay, Prasun Bandopadhyay, and Padmabibhushan Girija Devi. She also received invaluable artistic guidance from Srimati Lopamudra Mitra over several key years.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-stone-900/60 border border-gold-500/20 backdrop-blur-md space-y-4 shadow-xl">
              <h3 className="font-serif text-2xl font-semibold text-gold-300">
                Concerts, Stage &amp; International Impact
              </h3>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Having headlined numerous concerts across Kolkata, Sritama co-produced <strong className="text-gold-400 font-medium">&apos;Eita Tomar Gaan&apos;</strong> with Pratyaya Raha, garnering acclaim for three consecutive seasons. In 2021 and 2022, she released her original compositions.
              </p>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Now based in the US, she continues to perform actively on international platforms, including <strong className="text-gold-400 font-medium">Bangamela 2023</strong> in the Bay Area, California, bringing Tagore songs, folk traditions, and recitations to global audiences.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Timeline Sequence */}
        <div className="pt-12 space-y-12">
          <div className="text-center space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gold-gradient">
              Milestones & Journey
            </h2>
            <p className="text-stone-400 text-sm sm:text-base">
              Key phases in Sritama&apos;s artistic evolution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineEvents.map((event, idx) => {
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="p-6 rounded-2xl bg-stone-900/60 border border-gold-500/20 backdrop-blur-md space-y-4 hover:border-gold-500/40 transition-all shadow-lg flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-xs uppercase font-bold tracking-widest text-gold-400 block">
                      {event.year}
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-stone-100">{event.title}</h3>
                    <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">{event.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-stone-900 via-stone-900/90 to-stone-950 border border-gold-500/30 text-center space-y-6 shadow-2xl gold-border-glow max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-gold-gradient">
            Interested in Collaborations or Live Performances?
          </h2>
          <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto font-light">
            Sritama is available for classical concerts, Rabindra Sangeet recitals, cultural events, and stage hosting globally.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 text-stone-950 hover:brightness-110 shadow-xl shadow-gold-500/20 hover:shadow-gold-500/40 transition-all transform hover:-translate-y-0.5"
            >
              <span>Get in Touch</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
