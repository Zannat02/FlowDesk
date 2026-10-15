import { CheckCircle2, Users, BarChart3, KanbanSquare, Clock } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import FeatureItem from './FeatureItem'

const features = [
    { title: 'Task Management', icon: CheckCircle2, tone: 'blue' },
    { title: 'Team Collaboration', icon: Users, tone: 'orange' },
    { title: 'Analytics & Reports', icon: BarChart3, tone: 'violet' },
    { title: 'Project Planning', icon: KanbanSquare, tone: 'green' },
    { title: 'Time Tracking', icon: Clock, tone: 'amber' },
]

const sphere = (extra) => ({
    background: 'radial-gradient(circle at 30% 30%, #3a4a63, #0c1118 70%)',
    ...extra,
})

function GhostCard({ side }) {
    return (
        <div
            className={`absolute top-[44%] hidden h-20 w-48 rounded-2xl border border-line bg-surface-2/60 p-4 sm:block ${side === 'left' ? '-left-36' : '-right-36'
                }`}
        >
            <div className="h-2 w-3/4 rounded-full bg-line" />
            <div className="mt-3 h-2 w-1/2 rounded-full bg-line" />
        </div>
    )
}

export default function FeatureStack() {
    const reduce = useReducedMotion()
    // list is rendered twice so the vertical loop is seamless
    const group = (key) => (
        <div key={key} aria-hidden={key === 'b'}>
            {features.map((f) => (
                <FeatureItem key={f.title} {...f} />
            ))}
        </div>
    )

    return (
        <div className="relative h-[420px] overflow-hidden rounded-3xl border border-line bg-surface/80 sm:h-[460px] md:h-[500px]">
            {/* dashed guide lines */}
            <div className="absolute inset-x-0 top-[34%] border-t border-dashed border-line" />
            <div className="absolute inset-x-0 top-[58%] border-t border-dashed border-line" />

            {/* ghost cards peeking from the sides */}
            <GhostCard side="left" />
            <GhostCard side="right" />

            {/* floating spheres */}
            <span className="absolute right-[12%] top-[9%] h-10 w-10 rounded-full" style={sphere()} />
            <span className="absolute left-[7%] top-[26%] h-5 w-5 rounded-full" style={sphere()} />
            <span className="absolute bottom-[34%] left-[6%] z-20 h-12 w-12 rounded-full" style={sphere()} />

            {/* scrolling cards */}
            <div className="absolute inset-x-0 top-0 h-[68%] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0,#000_24%,#000_68%,transparent_100%)]">
                <motion.div
                    className="mx-auto w-[72%] max-w-[340px] pt-4"
                    animate={reduce ? undefined : { y: ['0%', '-50%'] }}
                    transition={{ duration: 24, ease: 'linear', repeat: Infinity }}
                >
                    {group('a')}
                    {group('b')}
                </motion.div>
            </div>

            {/* cast shadow on the ground */}
            <div className="pointer-events-none absolute inset-x-[3%] bottom-[6%] h-[11%] rounded-[50%] bg-black opacity-90 blur-xl" />
            <div className="pointer-events-none absolute inset-x-[9%] bottom-[10%] h-[4%] rounded-[50%] bg-black blur-md" />

            {/* 3D pedestal */}
            <div className="absolute inset-x-0 bottom-[12%] h-[24%]">
                <div
                    className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-primary/25 to-surface-2"
                    style={{ clipPath: 'polygon(7% 0, 93% 0, 100% 100%, 0 100%)' }}
                />
            </div>
        </div>
    )
}