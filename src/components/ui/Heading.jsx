
const styles = {
  h1: 'text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.15]',
  h2: 'text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-[1.2]',
}

export default function Heading({ as = 'h1', className = '', children }) {
  const Tag = as
  return <Tag className={`${styles[as]} ${className}`}>{children}</Tag>
}
