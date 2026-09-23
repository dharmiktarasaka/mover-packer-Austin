import React from 'react';
import { AlertTriangle, CheckCircle, Calculator, Users } from 'lucide-react';
import { crewTradeoffs } from '../../data/austinContent';

export default function CrewTradeoffsSection() {
  return (
    <section className="bg-white border-b-2 border-charcoal py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="border-b-2 border-charcoal pb-8 mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-electric-orange" />
              <span className="font-mono text-xs uppercase tracking-widest text-charcoal font-semibold">
                HOURLY RATE VS. TOTAL BILLABLE MATH
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-black tracking-tighter uppercase text-charcoal leading-[0.95]">
              IS THE CHEAPEST AUSTIN MOVER<br />
              <span className="text-electric-orange">ACTUALLY THE CHEAPEST?</span>
            </h2>
          </div>

          <p className="font-body text-charcoal/80 text-base max-w-md leading-relaxed">
            Budget movers advertise “2 movers, $89/hour” to win the click. For a 3-bedroom home, an undersized crew means fatigue, double trips, and hours that stack up until the “cheap” quote costs more than a 4-person crew.
          </p>
        </div>

        {/* Trade-off Matrix Table */}
        <div className="border-2 border-charcoal shadow-sharp-lg overflow-x-auto bg-ivory">
          <table className="w-full text-left border-collapse font-mono text-xs">
            <thead>
              <tr className="bg-charcoal text-white border-b-2 border-charcoal text-xs uppercase tracking-wider">
                <th className="p-4 sm:p-6 font-display font-black text-sm">Crew Size / Pricing Model</th>
                <th className="p-4 sm:p-6 font-display font-black text-sm">When It Works</th>
                <th className="p-4 sm:p-6 font-display font-black text-sm">When It Fails</th>
                <th className="p-4 sm:p-6 font-display font-black text-sm">Risk Assessment</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-charcoal font-body text-sm bg-white">
              {crewTradeoffs.map((item, idx) => (
                <tr key={idx} className="hover:bg-ivory/50 transition-colors">
                  <td className="p-4 sm:p-6 border-r-2 border-charcoal font-display font-bold text-base text-charcoal">
                    <div>{item.crew}</div>
                    <span className="font-mono text-xs text-charcoal/50 block font-normal mt-1">{item.rateType}</span>
                  </td>
                  <td className="p-4 sm:p-6 border-r-2 border-charcoal text-charcoal/85">
                    {item.whenWorks}
                  </td>
                  <td className="p-4 sm:p-6 border-r-2 border-charcoal text-charcoal/85">
                    {item.whenFails}
                  </td>
                  <td className="p-4 sm:p-6 font-mono text-xs">
                    <span className={`inline-block px-3 py-1 font-bold uppercase border ${
                      idx === 1 
                        ? 'bg-muted-green/30 text-charcoal border-muted-green-dark'
                        : 'bg-electric-orange/15 text-charcoal border-electric-orange'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Key Takeaway Banner */}
        <div className="mt-8 p-6 bg-ivory border-2 border-charcoal flex flex-col sm:flex-row items-center justify-between gap-4 font-body text-sm text-charcoal">
          <div className="flex items-center gap-3">
            <Calculator className="w-6 h-6 text-electric-orange flex-shrink-0" />
            <p>
              <strong>The Fix:</strong> Ask how many movers are actually coming and do the total hours math yourself (Rate × Hours) before comparing quotes side-by-side.
            </p>
          </div>
          <span className="font-mono text-xs text-electric-orange font-bold uppercase tracking-wider flex-shrink-0">
            TRANSPARENT SIZING FIRST
          </span>
        </div>

      </div>
    </section>
  );
}
