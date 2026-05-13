import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import React, { ReactNode } from 'react';
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';
import Community from './pages/Community';
import Journal from './pages/Journal';
import Education from './pages/Education';
import AppointmentPrep from './pages/AppointmentPrep';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={
          <PageTransition>
            <Onboarding />
          </PageTransition>
        } />
        <Route path="/dashboard" element={
          <PageTransition>
            <Dashboard />
          </PageTransition>
        } />
        <Route path="/community" element={
          <PageTransition>
            <Community />
          </PageTransition>
        } />
        <Route path="/journal" element={
          <PageTransition>
            <Journal />
          </PageTransition>
        } />
        <Route path="/education" element={
          <PageTransition>
            <Education />
          </PageTransition>
        } />
        <Route path="/appointment-prep" element={
          <PageTransition>
            <AppointmentPrep />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}
