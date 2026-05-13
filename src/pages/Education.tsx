import { motion } from 'motion/react';
import { Layout } from '../components/Layout';
import { BookOpen, CheckCircle2, HelpCircle, AlertCircle, PlayCircle, Globe, ScrollText } from 'lucide-react';
import { useState } from 'react';

const MYTHS = [
  {
    id: 1,
    question: "Are severe cramps normal?",
    fact: "False. While mild discomfort is common, severe pain that stops you from daily activities is NOT normal and warrants investigation for conditions like Endometriosis.",
    tag: "Pain Management"
  },
  {
    id: 2,
    question: "Can PCOS affect thin women?",
    fact: "True. PCOS is a hormonal metabolic condition that affects women of all sizes. The 'classic' visual markers are not present in every case.",
    tag: "PCOS Facts"
  },
  {
    id: 3,
    question: "Is discharge always dangerous?",
    fact: "False. Vaginal discharge is your body's natural cleaning system. Changes in color, smell, or texture after a baseline is what to look for.",
    tag: "Hygiene"
  }
];

const SESSIONS = [
  {
    id: 1,
    title: "Understanding Endometriosis",
    expert: "Dr. Anjali Verma",
    date: "May 15, 6:00 PM",
    language: "English & Hindi",
    attendees: 450
  },
  {
    id: 2,
    title: "Managing PCOS Naturally",
    expert: "Nutritionist Priya Das",
    date: "May 22, 5:30 PM",
    language: "English & Bengali",
    attendees: 1200
  }
];

export default function Education() {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <Layout>
      <div className="space-y-10">
        <header>
          <div className="flex items-center gap-2 text-accent mb-2">
            <ScrollText className="w-5 h-5" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Sacred Archives</span>
          </div>
          <h1 className="text-4xl font-serif font-bold text-indigo">Wisdom & Lore</h1>
          <p className="text-olive font-medium italic">Empowering truths passed through the collective.</p>
        </header>

        <div className="flex p-1.5 bg-parchment/30 rounded-[1.25rem] border border-parchment/50">
          <button 
            onClick={() => setActiveTab('education')}
            className={`flex-1 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${activeTab === 'education' ? 'bg-indigo shadow-lg text-ivory' : 'text-olive hover:bg-white/50'}`}
          >
            Truth vs Lore
          </button>
          <button 
            onClick={() => setActiveTab('expert')}
            className={`flex-1 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${activeTab === 'expert' ? 'bg-indigo shadow-lg text-ivory' : 'text-olive hover:bg-white/50'}`}
          >
            Live Orations
          </button>
        </div>

        {activeTab === 'education' ? (
          <div className="space-y-8">
            <div className="bg-gold/5 p-6 rounded-3xl border border-gold/10 flex gap-4 items-center italic">
              <AlertCircle className="w-10 h-10 text-gold flex-shrink-0" />
              <p className="text-sm text-indigo/80 font-medium leading-relaxed">
                Misinformation is the veil that hides the truth of our health. These records are curated with medical integrity.
              </p>
            </div>

            <div className="space-y-6">
              {MYTHS.map((myth) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={myth.id} 
                  className="manuscript-card overflow-hidden group border-parchment"
                >
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[10px] font-black text-bronze uppercase tracking-[0.2em]">{myth.tag}</span>
                      <HelpCircle className="w-5 h-5 text-gold/50" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-6 text-indigo italic group-hover:text-gold transition-colors">{myth.question}</h3>
                    <div className="flex gap-4 bg-ivory p-6 rounded-2xl border-l-[6px] border-gold relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-4 opacity-5">
                         <ScrollText className="w-12 h-12" />
                      </div>
                      <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-indigo/90 leading-relaxed font-serif font-medium italic">{myth.fact}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-10">
            <section className="bg-indigo p-8 rounded-[2.5rem] text-ivory relative overflow-hidden border border-gold/30 shadow-2xl">
              <div className="relative z-10">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-4">Awaiting Dawn</p>
                <h2 className="text-3xl font-serif font-bold mb-6 italic leading-tight">Orations on Vitality:<br/>PCOS Mastery</h2>
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border border-white/10">
                    <PlayCircle className="w-4 h-4 text-gold" /> Live Video
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border border-white/10">
                    <Globe className="w-4 h-4 text-gold" /> Multilingual
                  </div>
                </div>
                <button className="bg-accent text-indigo px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-transform">
                  Secure Your Token
                </button>
              </div>
              <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -translate-x-1/4 translate-y-1/4"></div>
            </section>

            <div className="space-y-6">
              <h3 className="font-serif font-bold text-2xl text-indigo italic mb-6">Past Orations</h3>
              {SESSIONS.map((session) => (
                <div key={session.id} className="manuscript-card p-6 flex items-center gap-6 border-dashed border-parchment">
                  <div className="w-16 h-16 bg-ivory rounded-2xl flex items-center justify-center text-3xl shadow-inner border border-parchment">👩‍⚕️</div>
                  <div className="flex-1">
                    <h4 className="font-serif font-bold text-lg text-indigo">{session.title}</h4>
                    <p className="text-xs text-olive font-bold italic">Presided by {session.expert}</p>
                    <div className="flex items-center gap-3 mt-3">
                       <span className="text-[9px] font-black bg-gold/5 text-accent border border-gold/10 px-3 py-1 rounded-full uppercase tracking-widest">{session.language}</span>
                       <span className="text-[9px] font-black bg-indigo/5 text-indigo/70 px-3 py-1 rounded-full uppercase tracking-widest">{session.attendees} Witnesses</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
