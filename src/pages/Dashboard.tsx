import { motion } from 'motion/react';
import { Layout } from '../components/Layout';
import { Bell, Heart, BookOpen, MessageCircle, Calendar, Globe, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="space-y-10">
        <header className="flex justify-between items-end mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-bronze">May 11 • Day 14</span>
            </div>
            <h1 className="text-4xl font-serif font-bold text-indigo">Greetings, Friend</h1>
            <p className="text-olive font-medium flex items-center gap-2 italic">
              Step into the sanctuary.
            </p>
          </div>
          <button className="relative p-2.5 bg-white rounded-2xl border border-parchment shadow-sm temple-glow">
            <Bell className="w-6 h-6 text-olive" />
            <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-terracotta rounded-full border-2 border-white"></span>
          </button>
        </header>

        {/* Sanctuary Summary Card */}
        <motion.div 
          onClick={() => navigate('/journal')}
          whileHover={{ y: -4 }}
          className="manuscript-card bg-indigo text-ivory p-8 shadow-2xl shadow-indigo/30 relative cursor-pointer border-none"
        >
          <div className="relative z-10">
            <h2 className="text-2xl font-serif font-bold mb-2">Cycle Sanctuary</h2>
            <div className="flex items-center gap-6 mb-8">
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest text-accent mb-1">Status</span>
                <span className="text-lg font-serif">Ovulation Phase</span>
              </div>
              <div className="w-px h-8 bg-gold/30"></div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest text-accent mb-1">Feeling</span>
                <span className="text-lg font-serif">Productive</span>
              </div>
            </div>
            <button 
              className="bg-accent text-indigo px-8 py-3 rounded-2xl font-bold text-sm tracking-widest uppercase shadow-xl hover:scale-105 transition-transform"
            >
              Consult Journal
            </button>
          </div>
          <div className="absolute top-[-40px] right-[-40px] w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-20px] left-[-20px] w-48 h-48 bg-terracotta/5 rounded-full blur-3xl"></div>
        </motion.div>

        {/* Stats / Highlights */}
        <div className="grid grid-cols-2 gap-4">
          <div className="manuscript-card p-6 border-l-4 border-l-accent">
            <Calendar className="w-5 h-5 text-accent mb-4" />
            <p className="text-[10px] font-black text-bronze uppercase tracking-[0.2em] mb-1">Live Learning</p>
            <p className="font-serif font-bold text-indigo leading-tight">Wisdom of PCOS</p>
            <p className="text-[10px] text-olive mt-2 font-bold italic">Tomorrow • 6:00 PM</p>
          </div>
          <div className="manuscript-card p-6 border-l-4 border-l-olive">
            <Heart className="w-5 h-5 text-olive mb-4" />
            <p className="text-[10px] font-black text-bronze uppercase tracking-[0.2em] mb-1">The Collective</p>
            <p className="font-serif font-bold text-indigo leading-tight">Shared Support</p>
            <p className="text-[10px] text-olive mt-2 font-bold italic">42 New Conversations</p>
          </div>
        </div>

        {/* Action Sections */}
        <section className="space-y-6">
          <div className="flex items-center gap-4">
            <h3 className="font-serif font-bold text-xl text-indigo">Sanctuary Paths</h3>
            <div className="h-px flex-1 bg-gold/20"></div>
          </div>
          
          <div className="space-y-4">
            <ActionCard 
              icon={<Globe className="w-6 h-6 text-indigo" />}
              title="Shared Wisdom"
              desc="Browse the archive of trusted community care recommendations."
              color="bg-parchment"
              tag="Directory"
              onClick={() => navigate('/community')}
            />
            <ActionCard 
              icon={<BookOpen className="w-6 h-6 text-indigo" />}
              title="Sacred Archives"
              desc="Unlock ancient myths and modern medical realities."
              color="bg-parchment"
              tag="Academy"
              onClick={() => navigate('/education')}
            />
          </div>
        </section>

        {/* Footer Guidance */}
        <div className="p-6 bg-parchment/20 rounded-3xl border border-gold/10 border-dashed text-center">
          <p className="text-xs text-olive font-medium leading-relaxed italic">
            "We are a community-driven beacon of health education. 
            For medical emergencies, please seek immediate professional care."
          </p>
        </div>
      </div>
    </Layout>
  );
}

function ActionCard({ icon, title, desc, color, tag, onClick }: any) {
  return (
    <button onClick={onClick} className="w-full flex items-center gap-6 p-6 manuscript-card text-left group">
      <div className={`p-4 rounded-2xl ${color} shadow-inner group-hover:scale-110 transition-transform border border-gold/10`}>
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex items-baseline gap-2 mb-1">
          <h4 className="font-serif font-bold text-lg text-indigo">{title}</h4>
          <span className="text-[9px] font-black text-accent uppercase tracking-widest">{tag}</span>
        </div>
        <p className="text-sm text-olive font-medium leading-normal italic">{desc}</p>
      </div>
      <ChevronRight className="w-5 h-5 text-gold/50 group-hover:text-gold transition-colors" />
    </button>
  );
}
