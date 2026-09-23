import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckSquare, Square, Printer, CheckCircle, AlertTriangle, RefreshCcw } from 'lucide-react';
import SEO from '../components/ui/SEO';
import { checklistData } from '../data/checklistData';
import MagneticButton from '../components/ui/MagneticButton';
import BigOrangeCTA from '../components/sections/BigOrangeCTA';

export default function MovingChecklistPage() {
  const [phases, setPhases] = useState(checklistData);

  const toggleTask = (phaseIdx, taskId) => {
    setPhases((prevPhases) =>
      prevPhases.map((phase, pIdx) => {
        if (pIdx !== phaseIdx) return phase;
        return {
          ...phase,
          tasks: phase.tasks.map((task) => {
            if (task.id !== taskId) return task;
            return { ...task, done: !task.done };
          })
        };
      })
    );
  };

  const totalTasks = phases.reduce((acc, p) => acc + p.tasks.length, 0);
  const completedTasks = phases.reduce(
    (acc, p) => acc + p.tasks.filter((t) => t.done).length,
    0
  );
  const progressPercent = Math.round((completedTasks / totalTasks) * 100);

  const resetChecklist = () => {
    setPhases(checklistData.map(p => ({
      ...p,
      tasks: p.tasks.map(t => ({ ...t, done: false }))
    })));
  };

  return (
    <>
      <SEO
        title="8-Week Interactive Moving Checklist & Countdown — SHIFTLINE"
        description="Stay organized with SHIFTLINE's interactive 8-week relocation roadmap. Check off milestones, track progress, and eliminate moving day stress."
      />

      {/* Breadcrumb */}
      <section className="bg-ivory border-b border-editorial-gray py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-charcoal/70 hover:text-electric-orange transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO RESOURCES</span>
          </Link>
        </div>
      </section>

      {/* Header */}
      <section className="bg-ivory border-b-2 border-charcoal pt-12 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 bg-electric-orange" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-charcoal">
                  INTERACTIVE LOGISTICS TRACKER
                </span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-display font-black tracking-tighter uppercase text-charcoal">
                8-WEEK MOVING<br />
                <span className="text-electric-orange">CHECKLIST.</span>
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => window.print()}
                className="px-4 py-2.5 bg-white border-2 border-charcoal font-mono text-xs font-bold uppercase tracking-wider text-charcoal hover:bg-ivory shadow-sharp flex items-center gap-2"
              >
                <Printer className="w-4 h-4 text-electric-orange" />
                <span>Print Checklist</span>
              </button>

              <button
                onClick={resetChecklist}
                className="p-2.5 bg-white border-2 border-charcoal text-charcoal hover:text-electric-orange shadow-sharp"
                title="Reset All Checkboxes"
                aria-label="Reset All Checkboxes"
              >
                <RefreshCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Sticky Progress Bar Card */}
          <div className="p-6 bg-white border-2 border-charcoal shadow-sharp">
            <div className="flex items-center justify-between mb-3 font-mono text-xs font-bold text-charcoal">
              <span>OVERALL RELOCATION READINESS:</span>
              <span className="text-electric-orange text-sm">{completedTasks} OF {totalTasks} COMPLETED ({progressPercent}%)</span>
            </div>

            <div className="w-full h-3 bg-editorial-gray border border-charcoal/20 relative overflow-hidden">
              <div
                className="h-full bg-electric-orange transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-charcoal/60">
              <span>{progressPercent === 100 ? '🎉 All milestones cleared for moving day!' : 'Select completed items below to track.'}</span>
              <span className="text-electric-orange font-bold uppercase">FLAGGED CRITICAL ITEMS HIGHLIGHTED</span>
            </div>
          </div>

        </div>
      </section>

      {/* Checklist Phases */}
      <section className="bg-ivory py-16 border-b-2 border-charcoal">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {phases.map((phase, pIdx) => (
            <div key={phase.phase} className="bg-white border-2 border-charcoal shadow-sharp-lg overflow-hidden">
              {/* Phase Header */}
              <div className="p-6 bg-charcoal text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-charcoal">
                <div>
                  <span className="font-mono text-xs text-electric-orange font-bold uppercase tracking-wider block">
                    STAGE 0{pIdx + 1}
                  </span>
                  <h3 className="font-display font-black text-2xl uppercase tracking-tight">
                    {phase.phase}
                  </h3>
                </div>
                <span className="font-mono text-xs text-editorial-gray/80">
                  {phase.subtitle}
                </span>
              </div>

              {/* Task Items */}
              <div className="divide-y divide-editorial-gray">
                {phase.tasks.map((task) => (
                  <div
                    key={task.id}
                    onClick={() => toggleTask(pIdx, task.id)}
                    className={`p-4 sm:p-5 flex items-start gap-4 cursor-pointer transition-colors select-none ${
                      task.done ? 'bg-ivory/40 text-charcoal/50' : 'bg-white hover:bg-ivory/30'
                    }`}
                  >
                    <button
                      type="button"
                      className="mt-0.5 flex-shrink-0 text-charcoal focus:outline-none"
                    >
                      {task.done ? (
                        <div className="w-5 h-5 bg-electric-orange border-2 border-charcoal flex items-center justify-center text-white text-xs font-bold">
                          ✓
                        </div>
                      ) : (
                        <div className="w-5 h-5 border-2 border-charcoal bg-white" />
                      )}
                    </button>

                    <div className="flex-1">
                      <p className={`font-body text-sm sm:text-base ${
                        task.done ? 'line-through text-charcoal/50' : 'text-charcoal font-medium'
                      }`}>
                        {task.text}
                      </p>
                    </div>

                    {task.critical && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-electric-orange/10 border border-electric-orange text-electric-orange font-mono text-[10px] font-bold uppercase flex-shrink-0">
                        <AlertTriangle className="w-3 h-3" />
                        CRITICAL
                      </span>
                    )}
                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>
      </section>

      <BigOrangeCTA />
    </>
  );
}
