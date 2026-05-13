import { motion } from 'motion/react';
import { ArrowRight, Shield, Heart, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Onboarding() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-background relative overflow-hidden">
      {/* Background Motifs */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-64 h-64 border-[30px] border-gold rounded-full"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-96 h-96 border-[1px] border-gold rounded-full"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mb-12 relative"
      >
        <div className="w-20 h-20 bg-indigo rounded-[2rem] mx-auto flex items-center justify-center text-ivory mb-8 shadow-2xl border border-gold/30">
          <span className="text-4xl font-serif font-bold">A</span>
        </div>
        <h1 className="text-5xl font-serif font-bold text-indigo mb-4 tracking-tighter">Aegis</h1>
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="h-px w-8 bg-gold"></div>
          <p className="text-sm font-bold text-accent uppercase tracking-[0.3em]">Sanctuary of Care</p>
          <div className="h-px w-8 bg-gold"></div>
        </div>
        <p className="text-lg text-olive max-w-xs mx-auto font-medium leading-relaxed italic">
          "A haven where women's wisdom protects and guides your health journey."
        </p>
      </motion.div>

      <div className="space-y-4 w-full max-w-sm mb-12">
        <FeatureItem 
          icon={<Shield className="w-5 h-5 text-gold" />} 
          title="Protected Space" 
          desc="Anonymous community anchored in trust." 
          delay={0.1}
        />
        <FeatureItem 
          icon={<Globe className="w-5 h-5 text-gold" />} 
          title="Shared Wisdom" 
          desc="Access community-curated care networks." 
          delay={0.2}
        />
        <FeatureItem 
          icon={<Heart className="w-5 h-5 text-gold" />} 
          title="Sacred Insights" 
          desc="Intelligent analytics for your cycle and wellness." 
          delay={0.3}
        />
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={() => navigate('/dashboard')}
        className="w-full max-w-sm btn-primary py-4 text-lg tracking-widest uppercase font-serif"
      >
        Enter Sanctuary <ArrowRight className="w-5 h-5 ml-2" />
      </motion.button>
      
      <p className="mt-8 text-[11px] text-bronze uppercase tracking-[0.2em] font-bold">
        A Nonprofit Mission for Health Advocacy
      </p>
    </div>
  );
}

function FeatureItem({ icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="flex items-start gap-4 text-left p-4 manuscript-card"
    >
      <div className="bg-indigo p-3 rounded-2xl shadow-inner border border-gold/20">
        {icon}
      </div>
      <div>
        <h3 className="font-serif font-bold text-indigo italic text-base">{title}</h3>
        <p className="text-xs text-olive font-medium leading-normal">{desc}</p>
      </div>
    </motion.div>
  );
}
