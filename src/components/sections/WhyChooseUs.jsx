import Badge from '../ui/Badge'
import Heading from '../ui/Heading'
import ChooseCard from '../features/ChooseCard'
import EfficiencyChart from '../features/EfficiencyChart'
import ActivityHeatmap from '../dashboard/ActivityHeatmap'
import WorkloadTable from '../dashboard/WorkloadTable'

export default function WhyChooseUs() {
  return (
    <section className="px-3 pb-10 pt-12 sm:px-6 md:pb-20 md:pt-24 lg:px-10">
      <div className="flex flex-col items-center gap-5 text-center lg:gap-6">
        <Badge>Why Choose Us</Badge>
        <Heading as="h2" className="text-ink-soft">
          Why teams choose{' '}
          <span className="font-serif font-normal italic text-ink">FlowDesk</span>
        </Heading>
      </div>

    
      <div className="mx-auto mt-10 grid max-w-md grid-cols-1 gap-5 md:mt-12 lg:max-w-none lg:grid-cols-3 lg:gap-6">
        <ChooseCard
          previewWidth={330}
          title="Finish projects faster"
          text="Smart task tracking helps your team prioritize work, remove bottlenecks and focus on what matters most."
        >
          <ActivityHeatmap />
        </ChooseCard>

        <ChooseCard
          previewWidth={480}
          title="Keep everyone aligned"
          text="See who is busy, who is overloaded and who has room, so work is shared fairly and nothing slips."
        >
          <WorkloadTable />
        </ChooseCard>

        <ChooseCard
          previewWidth={330}
          title="Decide with clear insights"
          text="Simple analytics and reports show team performance, project progress and where your time goes."
        >
          <EfficiencyChart />
        </ChooseCard>
      </div>
    </section>
  )
}