'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Shield, Zap, Target, ChevronDown } from 'lucide-react'

export default function ThatosLanding() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    const video = document.querySelector('video')
    if (video) {
      video.addEventListener('loadeddata', () => setIsVideoLoaded(true))
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Video Background */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-70"
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ASCII_8_8_2025_11_02_12%20AM-iIU4ejhoBVCkfs2nYAzWDevxNfsszD.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="flex justify-center pt-8 pb-4">
          <img 
            src="/thatos-logo-final.png" 
            alt="THATOS" 
            className="h-32 w-auto"
          />
        </header>

        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center px-4 -mt-20">
          <div className="text-center max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 font-mono drop-shadow-2xl">
              TACTICAL
              <br />
              <span className="text-red-500">DOMINANCE</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold mb-12 max-w-2xl mx-auto leading-tight drop-shadow-lg">
              NEXT-GENERATION MILITARY TECHNOLOGY FOR THE MODERN BATTLEFIELD
            </p>
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
            >
              ENGAGE SYSTEMS <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="absolute bottom-8 animate-bounce">
            <ChevronDown className="h-8 w-8 text-red-500" />
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl md:text-6xl font-black mb-8 font-mono">
                  MISSION
                  <br />
                  <span className="text-red-500">CRITICAL</span>
                </h2>
                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="font-semibold">
                    THATOS DELIVERS CUTTING-EDGE MILITARY SOLUTIONS THAT REDEFINE TACTICAL SUPERIORITY.
                  </p>
                  <p>
                    Our advanced systems integrate seamlessly with existing infrastructure, 
                    providing unmatched operational efficiency and battlefield awareness.
                  </p>
                  <p>
                    From autonomous defense platforms to next-gen communication arrays, 
                    we engineer the future of military technology.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-6 py-4">
                  <h3 className="text-2xl font-bold mb-2">PRECISION</h3>
                  <p>Millimeter-accurate targeting systems with AI-enhanced prediction algorithms.</p>
                </div>
                <div className="border-l-4 border-red-500 pl-6 py-4">
                  <h3 className="text-2xl font-bold mb-2">RELIABILITY</h3>
                  <p>Battle-tested components designed for extreme environments and conditions.</p>
                </div>
                <div className="border-l-4 border-red-500 pl-6 py-4">
                  <h3 className="text-2xl font-bold mb-2">INNOVATION</h3>
                  <p>Breakthrough technologies that push the boundaries of what's possible.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 px-4 bg-black/80">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black text-center mb-16 font-mono">
              TACTICAL
              <br />
              <span className="text-red-500">ARSENAL</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gray-900/50 border-gray-700 p-8 hover:border-red-500 transition-colors">
                <Shield className="h-12 w-12 text-red-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4">AEGIS DEFENSE</h3>
                <p className="text-gray-300 mb-6">
                  Autonomous perimeter defense system with 360° threat detection and neutralization capabilities.
                </p>
                <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                  SPECIFICATIONS
                </Button>
              </Card>

              <Card className="bg-gray-900/50 border-gray-700 p-8 hover:border-red-500 transition-colors">
                <Zap className="h-12 w-12 text-red-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4">STORM ARRAY</h3>
                <p className="text-gray-300 mb-6">
                  High-frequency communication network with quantum encryption and global reach.
                </p>
                <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                  SPECIFICATIONS
                </Button>
              </Card>

              <Card className="bg-gray-900/50 border-gray-700 p-8 hover:border-red-500 transition-colors">
                <Target className="h-12 w-12 text-red-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4">VIPER STRIKE</h3>
                <p className="text-gray-300 mb-6">
                  Precision-guided munition system with adaptive targeting and minimal collateral impact.
                </p>
                <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                  SPECIFICATIONS
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-8 font-mono">
              READY FOR
              <br />
              <span className="text-red-500">DEPLOYMENT</span>
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Join the elite forces already utilizing THATOS technology. 
              Contact our tactical specialists for classified briefings and system demonstrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
              >
                REQUEST BRIEFING
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold px-8 py-4 text-lg"
              >
                TECHNICAL SPECS
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-gray-800">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-400 font-mono">
              THATOS TACTICAL SYSTEMS © 2025 | CLASSIFIED OPERATIONS DIVISION
            </p>
            <p className="text-sm text-gray-500 mt-2">
              All specifications subject to security clearance requirements
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
