import React from 'react'

type Props = {
  node: any
  children: any
  options: scrollReveal.ScrollRevealObjectOptions
}

const SVComponent: React.FC<Props> = ({ node, children, options }) => {
  React.useEffect(() => {
    async function animate() {
      if (node?.current) {
        const sr = (await import('scrollreveal')).default
        sr().reveal(node.current, options)
      }
    }
    animate()
  }, [options, node])

  return <div>{children}</div>
}

export default SVComponent
