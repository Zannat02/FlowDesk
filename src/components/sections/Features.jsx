import Badge from '../ui/Badge'
import Heading from '../ui/Heading'
import FeatureStack from '../features/FeatureStack'
import TasksPreview from '../features/TasksPreview'
import ExploreCard from '../features/ExploreCard'


export default function Features() {
  return (
    <section className="px-3 pt-12 sm:px-6 md:pt-24 lg:px-10">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
     
        <div className="order-2 lg:order-1">
          <FeatureStack />
        </div>

        {/* right on desktop, first on mobile/tablet */}
        <div className="order-1 flex flex-col items-start gap-4 lg:order-2 lg:gap-5">
          <Badge>Core Features</Badge>

          <Heading as="h2" className="text-ink-soft">
            Everything You Need to Run Your Team in{' '}
            <span className="font-serif font-normal italic text-ink">One Simple Platform</span>
          </Heading>

          <div className="w-full">
            <TasksPreview />
          </div>

          <div className="w-full">
            <ExploreCard />
          </div>
        </div>
      </div>
    </section>
  )
}