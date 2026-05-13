import { motion } from 'motion/react';
import { Layout } from '../components/Layout';
import { ClipboardCheck, Download, Printer, AlertCircle, FileText, ChevronRight, ShieldCheck } from 'lucide-react';

const SUGGESTED_QUESTIONS = [
  "Based on my pain tracker, is this level of pelvic pain expected?",
  "I've noticed irregular bleeding for 3 months, should we check for PCOS?",
  "Are there specific tests you recommend for these symptoms?",
  "How can I manage my migraines that only happen before my period?",
];

export default function AppointmentPrep() {
  return (
    <Layout>
      <div className="space-y-10">
        <header>
          <div className="flex items-center gap-2 text-bronze mb-2">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Advocacy Portal</span>
          </div>
          <h1 className="text-4xl font-serif font-bold text-indigo">Preparation</h1>
          <p className="text-olive font-medium italic">Arm yourself with your own history and clarity.</p>
        </header>

        <section className="manuscript-card bg-ivory p-8 border-gold/20 relative">
          <div className="flex items-center gap-4 text-indigo mb-6">
            <div className="p-3 bg-indigo rounded-2xl shadow-xl shadow-indigo/10 border border-gold/20">
               <ClipboardCheck className="w-6 h-6 text-accent" />
            </div>
            <h2 className="font-serif text-2xl font-bold italic">Consultation Ledger</h2>
          </div>
          <p className="text-sm text-indigo/70 leading-relaxed font-medium italic mb-8">
            “Self-advocacy is the shield of your healthcare journey. This ledger distills your tracked patterns into a language of clarity for your healthcare provider.”
          </p>
          <div className="flex gap-4">
            <button className="flex-1 bg-indigo text-ivory py-4 rounded-2xl font-serif tracking-widest uppercase text-sm shadow-2xl shadow-indigo/20 active:scale-95 transition-all flex items-center justify-center gap-3">
              <Download className="w-5 h-5 text-accent" /> Export Ledger
            </button>
            <button className="p-4 bg-white text-indigo border-2 border-parchment rounded-2xl active:scale-95 transition-all hover:bg-gold/5">
              <Printer className="w-5 h-5" />
            </button>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-4">
            <h3 className="font-serif font-bold text-xl text-indigo italic">Inquiries for the Healer</h3>
            <div className="h-px flex-1 bg-gold/20"></div>
          </div>
          <div className="space-y-4">
            {SUGGESTED_QUESTIONS.map((q, i) => (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="flex gap-5 p-6 manuscript-card items-start bg-white border-dashed"
              >
                <div className="w-8 h-8 rounded-full bg-parchment flex items-center justify-center text-gold text-sm font-black border border-gold/30 flex-shrink-0 mt-0.5 shadow-inner">
                  ?
                </div>
                <p className="text-sm text-indigo font-serif font-medium leading-relaxed italic">{q}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="space-y-6 pb-10">
          <h3 className="font-serif font-bold text-xl text-indigo italic">Vital Summaries</h3>
          <div className="space-y-4">
            <HistoryCard 
              title="Sacred Cycle Pattern" 
              desc="Intense discomfort reported on days 12-16 of current moon." 
              count="14 Witnessed Logs"
            />
            <HistoryCard 
              title="Restorative Aid Usage" 
              desc="Pain relief taken 6 times during the current cycle." 
              count="Archive Logged"
            />
          </div>
        </section>

        <div className="p-8 manuscript-card bg-indigo text-ivory items-center flex gap-6 border-none shadow-2xl">
          <AlertCircle className="w-12 h-12 text-accent flex-shrink-0" />
          <div className="flex-1">
            <p className="font-serif font-bold text-xl italic text-accent mb-1">Navigating Dismissal</p>
            <p className="text-xs text-ivory/60 font-medium leading-relaxed">If your pain is being diminished, consulting our guide on self-advocacy may empower your voice.</p>
          </div>
          <div className="p-2 bg-white/5 rounded-full">
            <ChevronRight className="w-6 h-6 text-gold/50" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

function HistoryCard({ title, desc, count }: any) {
  return (
    <div className="flex justify-between items-center p-6 manuscript-card border-gold/10 hover:border-gold/30 transition-colors">
      <div className="flex-1 pr-6">
        <h4 className="font-serif font-bold text-lg text-indigo mb-1 leading-none">{title}</h4>
        <p className="text-xs text-olive font-medium italic">{desc}</p>
      </div>
      <div className="text-[9px] font-black text-accent bg-gold/5 border border-gold/10 px-3 py-2 rounded-xl uppercase tracking-widest shrink-0 shadow-inner">
        {count}
      </div>
    </div>
  );
}
