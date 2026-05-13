import { motion } from 'motion/react';
import { Layout } from '../components/Layout';
import { Plus, Mic, ChevronRight, Activity, Calendar, FileText, TrendingUp, Filter } from 'lucide-react';
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const SYMPTOM_CATEGORIES = [
  { id: 'pain', label: 'Pain', icon: '⚡', color: 'text-terracotta' },
  { id: 'bleed', label: 'Bleeding', icon: '🩸', color: 'text-red-600' },
  { id: 'mood', label: 'Mood', icon: '🧠', color: 'text-indigo' },
  { id: 'energy', label: 'Energy', icon: '🔋', color: 'text-olive' },
  { id: 'digestion', label: 'Bloating', icon: '🎈', color: 'text-bronze' },
];

const MOCK_DATA = [
  { name: 'D1', intensity: 2, energy: 4 },
  { name: 'D3', intensity: 5, energy: 2 },
  { name: 'D5', intensity: 8, energy: 1 },
  { name: 'D7', intensity: 4, energy: 3 },
  { name: 'D9', intensity: 2, energy: 5 },
  { name: 'D11', intensity: 1, energy: 7 },
  { name: 'D13', intensity: 3, energy: 6 },
  { name: 'D15', intensity: 4, energy: 5 },
];

export default function Journal() {
  const [activeTab, setActiveTab] = useState('insights');

  return (
    <Layout>
      <div className="space-y-10">
        <header className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-serif font-bold text-indigo">Sacred Journal</h1>
            <p className="text-olive font-medium italic">Witness the patterns of your nature.</p>
          </div>
          <button className="bg-white p-3 rounded-2xl border border-parchment shadow-sm">
            <Filter className="w-5 h-5 text-gold" />
          </button>
        </header>

        <div className="flex p-1.5 bg-parchment/30 rounded-[1.25rem] border border-parchment/50">
          <button 
            onClick={() => setActiveTab('log')}
            className={`flex-1 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${activeTab === 'log' ? 'bg-indigo shadow-lg text-ivory' : 'text-olive hover:bg-white/50'}`}
          >
            Scribe Entry
          </button>
          <button 
            onClick={() => setActiveTab('insights')}
            className={`flex-1 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${activeTab === 'insights' ? 'bg-indigo shadow-lg text-ivory' : 'text-olive hover:bg-white/50'}`}
          >
            Insights & Trends
          </button>
        </div>

        {activeTab === 'log' ? (
          <div className="space-y-10">
            <section>
              <div className="flex items-center gap-3 mb-6">
                <h2 className="font-serif font-bold text-2xl text-indigo italic">Daily Scribe</h2>
                <div className="h-px flex-1 bg-gold/20"></div>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {SYMPTOM_CATEGORIES.map((cat) => (
                  <button key={cat.id} className="flex flex-col items-center gap-2 p-4 manuscript-card border-gold/10 hover:border-accent hover:scale-105 transition-all group">
                    <span className="text-2xl group-hover:scale-110 transition-transform">{cat.icon}</span>
                    <span className="text-[9px] font-black uppercase tracking-tighter text-bronze">{cat.label}</span>
                  </button>
                ))}
              </div>
            </section>

            <section className="manuscript-card p-8 bg-indigo text-ivory border-none">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif text-xl italic flex items-center gap-3 text-accent">
                   Oral History
                </h3>
                <span className="text-[9px] font-black text-ivory/50 uppercase tracking-[0.2em] px-2 py-1 border border-ivory/20 rounded-full">Sanctuary Beta</span>
              </div>
              <p className="text-sm text-ivory/70 mb-8 font-medium leading-relaxed italic">
                Speak your journey. Our archive will distill your voice into medical insights for your next consultation.
              </p>
              <div className="flex justify-center p-8 bg-white/5 rounded-[2rem] border border-white/10 shadow-inner group cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 flex flex-col items-center gap-4">
                   <div className="p-6 bg-accent rounded-full shadow-2xl shadow-accent/20 group-hover:scale-110 transition-transform animate-pulse">
                      <Mic className="w-8 h-8 text-indigo" />
                   </div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-accent">Hold to Record Wisdom</span>
                </div>
              </div>
            </section>

            <button className="w-full btn-primary py-5 text-lg font-serif tracking-widest uppercase shadow-indigo/40">
              Seal Daily Entry
            </button>
          </div>
        ) : (
          <div className="space-y-10">
            {/* Cycle Visualization */}
            <section className="relative p-10 manuscript-card flex flex-col items-center justify-center min-h-[400px]">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
                <svg viewBox="0 0 100 100" className="w-full h-full text-gold">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
                  <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.2" />
                </svg>
              </div>
              
              <div className="relative w-64 h-64 flex items-center justify-center">
                <div className="absolute inset-0 border-8 border-parchment rounded-full"></div>
                <div className="absolute inset-0 border-8 border-gold/40 rounded-full" style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50%)' }}></div>
                
                <div className="text-center z-10">
                   <p className="text-[10px] font-black text-bronze uppercase tracking-[0.3em] mb-2">Cycle Phase</p>
                   <h3 className="text-3xl font-serif font-bold text-indigo italic">Ovulation</h3>
                   <div className="w-8 h-px bg-gold mx-auto my-4"></div>
                   <p className="text-xs font-bold text-olive">14 Days Remaining</p>
                </div>

                <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-4 h-4 bg-terracotta rounded-full border-4 border-white shadow-lg"></div>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-8 w-full">
                <div className="text-center">
                   <p className="text-[9px] font-black text-bronze uppercase mb-1">Pain Index</p>
                   <p className="text-xl font-serif font-bold text-indigo">Mild</p>
                </div>
                <div className="text-center">
                   <p className="text-[9px] font-black text-bronze uppercase mb-1">Vitality</p>
                   <p className="text-xl font-serif font-bold text-indigo">High</p>
                </div>
                <div className="text-center">
                   <p className="text-[9px] font-black text-bronze uppercase mb-1">Clarity</p>
                   <p className="text-xl font-serif font-bold text-indigo">Clear</p>
                </div>
              </div>
            </section>

            {/* Trends Graph */}
            <section className="manuscript-card p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-serif text-xl font-bold flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  Intensity Trends
                </h3>
                <span className="text-[10px] font-bold text-olive uppercase bg-olive/5 px-3 py-1 rounded-full italic">May Analytics</span>
              </div>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={MOCK_DATA}>
                    <defs>
                      <linearGradient id="colorIntensity" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#A53F2B" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#A53F2B" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F5E6CC" />
                    <XAxis dataKey="name" stroke="#6B705C" fontSize={10} axisLine={false} tickLine={false} />
                    <YAxis hide />
                    <Tooltip 
                      contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', fontFamily: 'serif' }}
                    />
                    <Area type="monotone" dataKey="intensity" stroke="#A53F2B" fillOpacity={1} fill="url(#colorIntensity)" strokeWidth={3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <p className="text-xs text-olive font-medium mt-6 leading-relaxed italic border-t border-parchment pt-4">
                "Patterns suggest your energy peaks alongside cycle midpoint. Use this time for active self-care."
              </p>
            </section>

            <div className="space-y-4 pb-10">
              <h3 className="font-serif font-bold text-2xl text-indigo mb-6">Archive of Entries</h3>
              <TimelineItem date="12 May" symptoms="Sacred Cramps, Awakening" intensity="High" />
              <TimelineItem date="11 May" symptoms="Quiet Reflection, Fatigue" intensity="Medium" />
              <TimelineItem date="08 May" symptoms="Light Flow, Softness" intensity="Low" />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

function TimelineItem({ date, symptoms, intensity }: any) {
  const intensityColor = {
    High: 'bg-terracotta',
    Medium: 'bg-accent',
    Low: 'bg-olive'
  }[intensity] || 'bg-indigo/30';

  return (
    <div className="flex gap-6 items-start">
      <div className="flex flex-col items-center">
        <div className={`w-3 h-3 rounded-full mt-2 ${intensityColor} shadow-sm border-2 border-white`}></div>
        <div className="w-px h-full bg-parchment mt-3"></div>
      </div>
      <div className="flex-1 pb-8">
        <div className="manuscript-card p-6 flex items-center justify-between group cursor-pointer hover:border-accent shadow-none border-dashed border-parchment">
          <div>
            <p className="text-[10px] font-black text-bronze uppercase tracking-[0.2em] mb-1">{date}</p>
            <p className="font-serif font-bold text-lg text-indigo italic leading-tight">{symptoms}</p>
          </div>
          <div className="bg-parchment/30 p-2 rounded-xl group-hover:bg-gold/20 transition-colors">
            <ChevronRight className="w-5 h-5 text-gold" />
          </div>
        </div>
      </div>
    </div>
  );
}
