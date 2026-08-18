import React, { useState } from 'react';
import { 
  Shield, MapPin, AlertTriangle, Upload, Eye, Activity, BarChart3, 
  FileText, CheckCircle2, Clock, Layers, Cpu, Database, Server, 
  Globe, ArrowRight, Lock, Bell, Search, Filter, Download, Zap, Radio
} from 'lucide-react';

export default function AstraGuardApp() {
  const [activeTab, setActiveTab] = useState<'citizen' | 'ai' | 'authority'>('citizen');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  const handleSimulateAI = () => {
    setAnalyzing(true);
    setAnalysisResult(null);
    setTimeout(() => {
      setAnalyzing(false);
      setAnalysisResult({
        hazard: 'Structural Road Damage / Severe Pothole',
        confidence: 98.4,
        severity: 'High',
        riskScore: 84,
        action: 'Dispatched to Public Works Dept'
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 font-sans selection:bg-[#00F2FE] selection:text-black">
      
      {/* 1. NAVIGATION BAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0B0F19]/80 border-b border-slate-800/80 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-tr from-[#6366F1] to-[#00F2FE] rounded-xl shadow-lg shadow-[#00F2FE]/20">
              <Shield className="w-6 h-6 text-black" />
            </div>
            <span className="text-xl font-bold tracking-wider text-white">
              AstraGuard <span className="text-[#00F2FE]">AI</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
            <a href="#home" className="hover:text-[#00F2FE] transition-colors">Home</a>
            <a href="#features" className="hover:text-[#00F2FE] transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-[#00F2FE] transition-colors">How It Works</a>
            <a href="#architecture" className="hover:text-[#00F2FE] transition-colors">Architecture</a>
            <a href="#map" className="hover:text-[#00F2FE] transition-colors">Live Map</a>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 text-sm font-semibold rounded-lg bg-[#00F2FE] text-slate-950 hover:bg-[#00F2FE]/80 transition-all shadow-md shadow-[#00F2FE]/20 flex items-center space-x-2"
            >
              <AlertTriangle className="w-4 h-4" />
              <span>Report Hazard</span>
            </button>
            <button className="px-4 py-2 text-sm font-semibold rounded-lg border border-slate-700 bg-slate-900/50 hover:bg-slate-800 transition-all text-slate-300 flex items-center space-x-2">
              <Lock className="w-4 h-4 text-[#6366F1]" />
              <span>Authority Login</span>
            </button>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section id="home" className="relative pt-20 pb-16 px-6 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#6366F1]/20 to-[#00F2FE]/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[#00F2FE] text-xs font-semibold">
              <Zap className="w-3.5 h-3.5" />
              <span>Next-Gen Community Hazard Intelligence</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Building Safer Communities with <span className="bg-gradient-to-r from-[#00F2FE] via-[#6366F1] to-[#10B981] bg-clip-text text-transparent">AI Intelligence</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl">
              Detect. Report. Protect. Real-time hazard intelligence platform giving citizens and smart cities the speed to resolve urban dangers instantly.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00F2FE] to-[#6366F1] text-slate-950 font-bold hover:opacity-90 transition-all shadow-lg shadow-[#00F2FE]/20 flex items-center space-x-2"
              >
                <span>Report a Hazard</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <a 
                href="#map" 
                className="px-6 py-3 rounded-xl border border-slate-700 bg-slate-900/60 hover:bg-slate-800 transition-all font-semibold text-slate-200 flex items-center space-x-2"
              >
                <Globe className="w-5 h-5 text-[#00F2FE]" />
                <span>View Live Map</span>
              </a>
            </div>
          </div>

          {/* Real-time Risk Score Gauge Preview Card */}
          <div className="relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-[#10B981] animate-ping" />
                <span className="text-sm font-semibold text-slate-300">Live City Monitoring: Metro Zone A</span>
              </div>
              <span className="text-xs bg-slate-800 text-slate-400 px-2.5 py-1 rounded-md">Updated Now</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <p className="text-xs text-slate-400 font-medium">Community Risk Score</p>
                <div className="flex items-baseline space-x-2 mt-2">
                  <span className="text-3xl font-extrabold text-[#00F2FE]">78</span>
                  <span className="text-xs text-red-400 font-semibold">↑ Elevating</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                  <div className="bg-gradient-to-r from-[#10B981] via-yellow-400 to-red-500 h-full w-[78%]" />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <p className="text-xs text-slate-400 font-medium">Active Incidents</p>
                <span className="text-3xl font-extrabold text-white mt-2 block">14</span>
                <p className="text-xs text-slate-500 mt-1">4 high priority active</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/60 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
                <div>
                  <p className="text-sm font-medium text-slate-200">Exposed Cable detected</p>
                  <p className="text-xs text-slate-400">Sector 4 • 2 mins ago</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">Action Pending</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROBLEM VS SOLUTION */}
      <section id="how-it-works" className="py-20 px-6 border-t border-slate-800/60 bg-slate-950/30">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold text-white">Urban Dangers Move Fast. Response Should Move Faster.</h2>
            <p className="text-slate-400">Bridging the critical gap between citizen hazard discoveries and local municipality responses.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-red-950/10 border border-red-900/30 space-y-4">
              <div className="inline-flex p-3 rounded-xl bg-red-500/10 text-red-400">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">The Problem</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Unnoticed urban hazards—like open manholes, fallen electrical lines, and waterlogging—cause catastrophic accidents daily. Slow manual reporting and fragmented municipal processes delay response times by days or weeks.
              </p>
              <ul className="space-y-2 text-sm text-slate-400 pt-2">
                <li className="flex items-center space-x-2"><span className="text-red-400">✕</span> <span>Delayed incident awareness</span></li>
                <li className="flex items-center space-x-2"><span className="text-red-400">✕</span> <span>Lack of automated severity triaging</span></li>
                <li className="flex items-center space-x-2"><span className="text-red-400">✕</span> <span>Zero visibility for concerned citizens</span></li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-[#00F2FE]/5 border border-[#00F2FE]/20 space-y-4">
              <div className="inline-flex p-3 rounded-xl bg-[#00F2FE]/10 text-[#00F2FE]">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">The AstraGuard AI Pipeline</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                An end-to-end automated platform that processes user photo uploads through deep vision AI, calculates localized priority scores, and routes alerts directly to city operational dashboards.
              </p>
              <div className="grid grid-cols-2 gap-2 pt-2 text-xs font-semibold">
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-[#00F2FE]">1. Upload Photo</div>
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-[#00F2FE]">2. AI Detection</div>
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-[#00F2FE]">3. Severity & Priority</div>
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-[#00F2FE]">4. Live City Dispatch</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURE BREAKDOWN GRID (3 TABS) */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-white">Engineered for Citizens, AI Engine, & Authorities</h2>
            <p className="text-slate-400">Explore tailored capabilities built across the AstraGuard intelligence ecosystem.</p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex justify-center border-b border-slate-800">
            <div className="flex space-x-4">
              <button 
                onClick={() => setActiveTab('citizen')}
                className={`pb-4 px-4 font-semibold text-sm transition-all border-b-2 ${activeTab === 'citizen' ? 'border-[#00F2FE] text-[#00F2FE]' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
              >
                Citizen Experience
              </button>
              <button 
                onClick={() => setActiveTab('ai')}
                className={`pb-4 px-4 font-semibold text-sm transition-all border-b-2 ${activeTab === 'ai' ? 'border-[#6366F1] text-[#6366F1]' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
              >
                AI Engine Core
              </button>
              <button 
                onClick={() => setActiveTab('authority')}
                className={`pb-4 px-4 font-semibold text-sm transition-all border-b-2 ${activeTab === 'authority' ? 'border-[#10B981] text-[#10B981]' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
              >
                Authority Dashboard
              </button>
            </div>
          </div>

          {/* Tab Contents */}
          <div className="grid md:grid-cols-3 gap-6">
            {activeTab === 'citizen' && (
              <>
                <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 space-y-3">
                  <MapPin className="w-8 h-8 text-[#00F2FE]" />
                  <h4 className="font-bold text-white">Automated GPS Tracking</h4>
                  <p className="text-sm text-slate-400">Instant precise location tagging for accurate municipal dispatches.</p>
                </div>
                <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 space-y-3">
                  <Upload className="w-8 h-8 text-[#00F2FE]" />
                  <h4 className="font-bold text-white">One-Tap Photo Upload</h4>
                  <p className="text-sm text-slate-400">Simplified visual submission interface optimized for low connectivity.</p>
                </div>
                <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 space-y-3">
                  <Bell className="w-8 h-8 text-[#00F2FE]" />
                  <h4 className="font-bold text-white">Real-Time Status Notifications</h4>
                  <p className="text-sm text-slate-400">Track reported issues live from inspection to resolution.</p>
                </div>
              </>
            )}

            {activeTab === 'ai' && (
              <>
                <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 space-y-3">
                  <Eye className="w-8 h-8 text-[#6366F1]" />
                  <h4 className="font-bold text-white">Vision AI Detection</h4>
                  <p className="text-sm text-slate-400">Detects structural, electrical, and environmental hazards automatically.</p>
                </div>
                <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 space-y-3">
                  <Cpu className="w-8 h-8 text-[#6366F1]" />
                  <h4 className="font-bold text-white">Gemini Text Summarization</h4>
                  <p className="text-sm text-slate-400">Translates visual and user data into actionable incident briefing notes.</p>
                </div>
                <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 space-y-3">
                  <Activity className="w-8 h-8 text-[#6366F1]" />
                  <h4 className="font-bold text-white">Severity Scoring Engine</h4>
                  <p className="text-sm text-slate-400">Calculates localized risk metrics to prioritize critical public safety threats.</p>
                </div>
              </>
            )}

            {activeTab === 'authority' && (
              <>
                <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 space-y-3">
                  <BarChart3 className="w-8 h-8 text-[#10B981]" />
                  <h4 className="font-bold text-white">Incident Queue & Triaging</h4>
                  <p className="text-sm text-slate-400">Sort reports by urgency, location, and hazard type seamlessly.</p>
                </div>
                <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 space-y-3">
                  <FileText className="w-8 h-8 text-[#10B981]" />
                  <h4 className="font-bold text-white">Automated PDF Reporting</h4>
                  <p className="text-sm text-slate-400">Export structured incident audits for field teams and municipal records.</p>
                </div>
                <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 space-y-3">
                  <Radio className="w-8 h-8 text-[#10B981]" />
                  <h4 className="font-bold text-white">Field Force Dispatch</h4>
                  <p className="text-sm text-slate-400">Assign maintenance teams directly based on spatial proximity.</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE COMMUNITY RISK SCORE WIDGET */}
      <section className="py-20 px-6 bg-slate-950/40 border-y border-slate-800/60">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-white">Real-Time Community Risk Analytics</h2>
            <p className="text-slate-400">Comparative regional safety metrics driven by continuous crowd-sourced feeds.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-red-500/30 relative overflow-hidden">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-bold text-red-400 bg-red-500/10 border border-red-500/20 px-2.5 py-1 rounded-md">HIGH RISK AREA</span>
                  <h3 className="text-xl font-bold text-white mt-3">Downtown Sector 7</h3>
                  <p className="text-sm text-slate-400">Multiple active hazards reported</p>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-extrabold text-red-500">92</span>
                  <span className="text-xs text-slate-500 block">/100 Risk</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between text-xs text-slate-400">
                <span>Action: <strong className="text-red-400">Immediate Action Required</strong></span>
                <span>Active Hazards: <strong>12</strong></span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-[#10B981]/30 relative overflow-hidden">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-bold text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/20 px-2.5 py-1 rounded-md">SAFE ZONE</span>
                  <h3 className="text-xl font-bold text-white mt-3">North Heights Sector 2</h3>
                  <p className="text-sm text-slate-400">Infrastructure nominal</p>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-extrabold text-[#10B981]">28</span>
                  <span className="text-xs text-slate-500 block">/100 Risk</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between text-xs text-slate-400">
                <span>Action: <strong className="text-[#10B981]">Routine Monitoring</strong></span>
                <span>Active Hazards: <strong>1</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LIVE MAP & ADMIN DASHBOARD MOCKUPS */}
      <section id="map" className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-3xl font-bold text-white">Live Operations Dashboard</h2>
              <p className="text-slate-400 mt-1">Real-time hazard spatial awareness and triaging table.</p>
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1.5 text-xs font-semibold rounded bg-slate-800 text-slate-300 border border-slate-700 flex items-center space-x-1">
                <Filter className="w-3.5 h-3.5" />
                <span>Filter</span>
              </button>
              <button className="px-3 py-1.5 text-xs font-semibold rounded bg-[#00F2FE]/10 text-[#00F2FE] border border-[#00F2FE]/30 flex items-center space-x-1">
                <Download className="w-3.5 h-3.5" />
                <span>Export PDF</span>
              </button>
            </div>
          </div>

          {/* Interactive Table Mockup */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden backdrop-blur-md">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-950/80 text-xs text-slate-400 uppercase border-b border-slate-800">
                <tr>
                  <th className="px-6 py-4">Hazard Type</th>
                  <th className="px-6 py-4">Location</th>
                  <th className="px-6 py-4">Severity</th>
                  <th className="px-6 py-4">AI Score</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 font-semibold text-white flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                    <span>Open Manhole</span>
                  </td>
                  <td className="px-6 py-4 text-slate-400">Main St & 5th Ave</td>
                  <td className="px-6 py-4"><span className="px-2 py-0.5 rounded text-xs bg-red-500/10 text-red-400 border border-red-500/20 font-medium">Critical</span></td>
                  <td className="px-6 py-4 font-mono text-[#00F2FE]">96/100</td>
                  <td className="px-6 py-4"><span className="px-2 py-0.5 rounded text-xs bg-amber-500/10 text-amber-400 border border-amber-500/20 font-medium">In-Progress</span></td>
                  <td className="px-6 py-4"><button className="text-xs text-[#00F2FE] hover:underline">View Details</button></td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 font-semibold text-white flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                    <span>Fallen Tree Branch</span>
                  </td>
                  <td className="px-6 py-4 text-slate-400">Oakridge Park Lane</td>
                  <td className="px-6 py-4"><span className="px-2 py-0.5 rounded text-xs bg-amber-500/10 text-amber-400 border border-amber-500/20 font-medium">Medium</span></td>
                  <td className="px-6 py-4 font-mono text-[#00F2FE]">64/100</td>
                  <td className="px-6 py-4"><span className="px-2 py-0.5 rounded text-xs bg-slate-800 text-slate-400 font-medium">Pending</span></td>
                  <td className="px-6 py-4"><button className="text-xs text-[#00F2FE] hover:underline">View Details</button></td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 font-semibold text-white flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                    <span>Waterlogging</span>
                  </td>
                  <td className="px-6 py-4 text-slate-400">Underpass Route 9</td>
                  <td className="px-6 py-4"><span className="px-2 py-0.5 rounded text-xs bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 font-medium">Low</span></td>
                  <td className="px-6 py-4 font-mono text-[#00F2FE]">32/100</td>
                  <td className="px-6 py-4"><span className="px-2 py-0.5 rounded text-xs bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 font-medium">Resolved</span></td>
                  <td className="px-6 py-4"><button className="text-xs text-[#00F2FE] hover:underline">View Details</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. SYSTEM ARCHITECTURE & TECH STACK */}
      <section id="architecture" className="py-20 px-6 bg-slate-950/50 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-white">System Architecture & Tech Stack</h2>
            <p className="text-slate-400">Enterprise-grade infrastructure powering zero-latency hazard intelligence.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center space-y-2">
              <Layers className="w-6 h-6 text-[#00F2FE] mx-auto" />
              <p className="text-xs font-bold text-white">Frontend</p>
              <p className="text-[11px] text-slate-400">React, Next.js, Tailwind</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center space-y-2">
              <Server className="w-6 h-6 text-[#6366F1] mx-auto" />
              <p className="text-xs font-bold text-white">Backend</p>
              <p className="text-[11px] text-slate-400">Python, FastAPI</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center space-y-2">
              <Database className="w-6 h-6 text-amber-400 mx-auto" />
              <p className="text-xs font-bold text-white">Database</p>
              <p className="text-[11px] text-slate-400">Firebase Firestore</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center space-y-2">
              <Cpu className="w-6 h-6 text-[#10B981] mx-auto" />
              <p className="text-xs font-bold text-white">AI Engine</p>
              <p className="text-[11px] text-slate-400">Gemini + Vision AI</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center space-y-2">
              <Globe className="w-6 h-6 text-pink-500 mx-auto" />
              <p className="text-xs font-bold text-white">Maps API</p>
              <p className="text-[11px] text-slate-400">Google Maps Platform</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center space-y-2">
              <Zap className="w-6 h-6 text-[#00F2FE] mx-auto" />
              <p className="text-xs font-bold text-white">Hosting</p>
              <p className="text-[11px] text-slate-400">Vercel & Render</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FUTURE ROADMAP */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-white">Platform Expansion Roadmap</h2>
            <p className="text-slate-400">Our vision for scalable smart city hazard integration.</p>
          </div>

          <div className="grid md:grid-cols-6 gap-4">
            {[
              { phase: '01', title: 'Hazard Reporting', desc: 'Live Citizen Feeds' },
              { phase: '02', title: 'Predictive AI', desc: 'Risk Forecasting' },
              { phase: '03', title: 'Drone Integration', desc: 'Aerial Scanning' },
              { phase: '04', title: 'IoT Sensors', desc: 'Infrastructure Grids' },
              { phase: '05', title: 'Government API', desc: 'Municipal Sync' },
              { phase: '06', title: 'Smart Cities', desc: 'Autonomous Dispatch' },
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2">
                <span className="text-xs font-mono font-bold text-[#00F2FE]">Phase {item.phase}</span>
                <h5 className="text-sm font-bold text-white">{item.title}</h5>
                <p className="text-xs text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE REPORTING MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 space-y-6 relative shadow-2xl">
            <div className="flex justify-between items-center border-b border-slate-800 pb-4">
              <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-[#00F2FE]" />
                <span>Submit Urban Hazard Report</span>
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white text-sm">✕</button>
            </div>

            <div className="space-y-4">
              <div className="border-2 border-dashed border-slate-700 rounded-xl p-8 text-center bg-slate-950/50 hover:border-[#00F2FE]/50 transition-colors cursor-pointer">
                <Upload className="w-8 h-8 text-slate-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-slate-300">Drag & drop hazard image here</p>
                <p className="text-xs text-slate-500 mt-1">Supports PNG, JPG up to 10MB</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-[#00F2FE]" />
                  <span>GPS Location Detected</span>
                </span>
                <span className="text-slate-200 font-mono">22.5726° N, 88.3639° E</span>
              </div>

              <button 
                onClick={handleSimulateAI}
                disabled={analyzing}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00F2FE] to-[#6366F1] text-slate-950 font-bold hover:opacity-90 transition-all flex items-center justify-center space-x-2"
              >
                {analyzing ? (
                  <span>Analyzing with Vision AI...</span>
                ) : (
                  <>
                    <Zap className="w-4 h-4" />
                    <span>Simulate AI Analysis</span>
                  </>
                )}
              </button>

              {analysisResult && (
                <div className="p-4 rounded-xl bg-slate-950 border border-[#00F2FE]/30 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>Detected Hazard:</span>
                    <strong className="text-white">{analysisResult.hazard}</strong>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>AI Confidence:</span>
                    <strong className="text-[#00F2FE]">{analysisResult.confidence}%</strong>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Risk Priority Score:</span>
                    <strong className="text-red-400">{analysisResult.riskScore}/100</strong>
                  </div>
                  <div className="pt-2 border-t border-slate-800 text-[#10B981] font-semibold text-center">
                    ✓ {analysisResult.action}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="py-8 border-t border-slate-800 text-center text-xs text-slate-500">
        <p>© 2026 AstraGuard AI. All rights reserved. Live hazard intelligence for safer cities.</p>
      </footer>
    </div>
  );
}