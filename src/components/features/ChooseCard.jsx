import ScaledFrame from '../ui/ScaledFrame'


export default function ChooseCard({ title, text, previewWidth, children }) {
  return (
    <article className="rounded-3xl border border-line bg-surface/80 p-3 shadow-soft backdrop-blur-sm sm:p-4">
      <div
        className="h-[210px] overflow-hidden rounded-2xl bg-surface-2/50 p-3"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, #000 60%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, #000 60%, transparent 100%)',
        }}
      >
        <ScaledFrame designWidth={previewWidth}>{children}</ScaledFrame>
      </div>

      <div className="px-2 pb-3 pt-5 sm:px-3">
        <h3 className="text-base font-semibold md:text-lg">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft md:text-base">{text}</p>
      </div>
    </article>
  )
}