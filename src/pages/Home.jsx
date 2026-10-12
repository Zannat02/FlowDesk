import Navbar from '../components/layout/Navbar'
import Hero from '../components/hero/Hero'
import Dashboard from '../components/dashboard/Dashboard'
import ScaledFrame from '../components/ui/ScaledFrame'
import FeatureTabs from '../components/layout/FeatureTabs'
import WaveBackground from '../components/ui/WaveBackground'
import TrustedBy from '../components/sections/TrustedBy'
import Features from '../components/sections/Features'
import WhyChooseUs from '../components/sections/WhyChooseUs'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-bg">
      <WaveBackground />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <Navbar />
        <Hero />

        <main className="px-3 sm:px-6 lg:px-10">
        
          <div className="rounded-2xl border border-line bg-surface/70 p-2 shadow-soft backdrop-blur-sm sm:p-4 md:rounded-3xl">
            <ScaledFrame designWidth={1100}>
              <Dashboard />
            </ScaledFrame>
          </div>

          <FeatureTabs />
        </main>

        <TrustedBy />
        <Features />
         <WhyChooseUs />
      </div>
    </div>
  )
}