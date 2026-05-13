import { motion } from 'motion/react';
import { Layout } from '../components/Layout';
import { Search, MessageSquare, Heart, Shield, Share2, Globe, Sparkles, MapPin, Award } from 'lucide-react';
import { useState } from 'react';

const RECOMMENDATIONS = [
  { id: 1, title: 'Painful Periods', members: '4.2k', icon: '🩸' },
  { id: 2, title: 'PCOS Support', members: '12.5k', icon: '🦋' },
  { id: 3, title: 'Teen Health', members: '2.1k', icon: '🎒' },
  { id: 4, title: 'Menopause Journey', members: '3.8k', icon: '🌅' },
];

const SHARED_WISDOM_DOCS = [
  {
    id: 1,
    name: "Dr. Elena Gregoria",
    specialty: "Reproductive Endocrinologist",
    location: "Mumbai",
    experience: "14 Years",
    recommendations: 124,
    note: "Extremely patient. She spent 45 minutes explaining my ultrasound results. I finally felt like a person, not a patient ID.",
    tags: ["Good Listener", "PCOS-Aware", "Comfortable for Teens"]
  },
  {
    id: 2,
    name: "Dr. Amara Sen",
    specialty: "General Gynecologist",
    location: "Bangalore",
    experience: "8 Years",
    recommendations: 89,
    note: "She normalized my pelvic pain but didn't dismiss it. She was the one who suggested testing for Endometriosis after years of being told it was 'just stress'.",
    tags: ["Empathetic", "Bilingual", "Explains Clearly"]
  }
];

const FEED_POSTS = [
  {
    id: 1,
    author: 'Anonymous Sunflower',
    group: 'PCOS Support',
    content: "Has anyone tried Spearmint tea for hormonal acne? I'm starting to feel overwhelmed with the breakouts and just want to know if it actually helps. No judgment please.",
    likes: 24,
    replies: 12,
    time: '2h ago'
  }
];

export default function Community() {
  const [activeTab, setActiveTab] = useState('wisdom');

  return (
    <Layout>
      <div className="space-y-10">
        <header>
          <h1 className="text-4xl font-serif font-bold text-indigo">The Collective</h1>
          <p className="text-olive font-medium italic">Shared wisdom and protected stories.</p>
        </header>

        <div className="flex p-1.5 bg-parchment/30 rounded-[1.25rem] border border-parchment/50">
          <button 
            onClick={() => setActiveTab('wisdom')}
            className={`flex-1 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${activeTab === 'wisdom' ? 'bg-indigo shadow-lg text-ivory' : 'text-olive hover:bg-white/50'}`}
          >
            Shared Wisdom
          </button>
          <button 
            onClick={() => setActiveTab('discussions')}
            className={`flex-1 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${activeTab === 'discussions' ? 'bg-indigo shadow-lg text-ivory' : 'text-olive hover:bg-white/50'}`}
          >
            Sanctuary Feed
          </button>
        </div>

        {activeTab === 'wisdom' ? (
          <div className="space-y-10">
            <section className="manuscript-card p-8 bg-gold/5 border-gold/10 relative">
               <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-5 h-5 text-gold" />
                    <h2 className="font-serif text-2xl font-bold text-indigo">The Archive of Care</h2>
                  </div>
                  <p className="text-sm text-olive font-medium leading-relaxed italic mb-6">
                    “For generations, women have turned to each other for guidance in healthcare. Shared Wisdom preserves trusted community recommendations in one protected space.”
                  </p>
                  <p className="text-[11px] text-bronze font-bold leading-relaxed uppercase tracking-wider opacity-70">
                    Community-curated care networks help us navigate uncertainty and find more supportive healthcare experiences.
                  </p>
               </div>
               <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Globe className="w-24 h-24" />
               </div>
            </section>

            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold/60" />
              <input 
                type="text" 
                placeholder="Find a trusted sanctuary by city or specialty..." 
                className="input-field pl-12 border-gold/20"
              />
            </div>

            <section className="space-y-6">
               <h3 className="font-serif font-bold text-xl text-indigo border-b border-gold/10 pb-2">Trusted Recommendations</h3>
               <div className="space-y-6">
                  {SHARED_WISDOM_DOCS.map((doc) => (
                    <motion.div
                      key={doc.id}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="manuscript-card"
                    >
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                           <div className="flex items-center gap-4">
                             <div className="w-14 h-14 bg-parchment rounded-2xl flex items-center justify-center text-indigo border border-gold/20 shadow-inner italic font-serif text-xl">
                                {doc.name.split(' ')[1][0]}
                             </div>
                             <div>
                               <h4 className="font-serif font-bold text-lg text-indigo">{doc.name}</h4>
                               <p className="text-xs text-olive font-medium">{doc.specialty}</p>
                             </div>
                           </div>
                           <div className="flex items-center gap-1.5 text-accent font-bold text-[10px] tracking-widest bg-gold/5 px-3 py-1 rounded-full border border-gold/10">
                              <Award className="w-3 h-3" /> {doc.recommendations} RECOMMENDATIONS
                           </div>
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-indigo/70">
                            <MapPin className="w-3.5 h-3.5 text-gold" /> {doc.location}
                          </div>
                          <div className="w-1 h-1 bg-gold/30 rounded-full"></div>
                          <div className="text-xs font-bold text-indigo/70 uppercase tracking-tighter">{doc.experience} EXP</div>
                        </div>

                        <div className="bg-ivory/50 p-4 rounded-2xl border border-parchment italic mb-5 relative">
                           <span className="absolute top-2 left-2 text-2xl text-gold/20 font-serif leading-none">“</span>
                           <p className="text-sm text-indigo/80 leading-relaxed pl-4 pr-2">
                              {doc.note}
                           </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                           {doc.tags.map(tag => (
                             <span key={tag} className="text-[10px] font-black text-olive border border-olive/20 px-3 py-1 rounded-full uppercase tracking-tighter">
                               {tag}
                             </span>
                           ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
               </div>
            </section>
          </div>
        ) : (
          <div className="space-y-8">
            <section>
              <h2 className="font-serif font-bold text-xl mb-4 text-indigo">Collective Circles</h2>
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {RECOMMENDATIONS.map((group) => (
                  <motion.div
                    key={group.id}
                    whileTap={{ scale: 0.95 }}
                    className="flex-shrink-0 w-36 manuscript-card p-6 flex flex-col items-center text-center gap-3 border-gold/10"
                  >
                    <span className="text-4xl">{group.icon}</span>
                    <h3 className="text-sm font-serif font-bold text-indigo leading-tight italic">{group.title}</h3>
                    <span className="text-[9px] text-accent font-black tracking-widest uppercase">{group.members}</span>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="font-serif font-bold text-xl text-indigo">Sacred Feed</h2>
                <button className="text-[10px] font-black text-accent uppercase tracking-widest border-b border-accent pb-0.5">Whisper Anonymously</button>
              </div>

              <div className="space-y-6">
                {FEED_POSTS.map((post) => (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={post.id} 
                    className="manuscript-card p-8 space-y-6"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-parchment flex items-center justify-center text-xl shadow-inner border border-gold/10">🌻</div>
                        <div>
                          <p className="text-sm font-serif font-bold text-indigo italic">{post.author}</p>
                          <p className="text-[9px] text-accent font-black uppercase tracking-[0.2em]">{post.group}</p>
                        </div>
                      </div>
                      <span className="text-[10px] text-bronze/50 font-bold uppercase tracking-widest">{post.time}</span>
                    </div>
                    
                    <p className="text-indigo/80 leading-relaxed font-medium italic italic">
                      {post.content}
                    </p>

                    <div className="flex items-center gap-8 pt-4 border-t border-parchment">
                      <button className="flex items-center gap-2 text-indigo/60 hover:text-terracotta transition-colors group">
                        <Heart className="w-4 h-4 group-hover:fill-terracotta" />
                        <span className="text-[10px] font-black">{post.likes}</span>
                      </button>
                      <button className="flex items-center gap-2 text-indigo/60 hover:text-gold transition-colors">
                        <MessageSquare className="w-4 h-4" />
                        <span className="text-[10px] font-black">{post.replies}</span>
                      </button>
                      <button className="flex items-center gap-2 text-indigo/60 hover:text-indigo transition-colors ml-auto">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        )}
      </div>
    </Layout>
  );
}
