import { Shader, ChromaFlow, ChromaticAberration, CursorRipples } from 'shaders/react'

// The heavy WebGL layer, split into its own chunk so it only downloads on the
// desktop home route (where ShaderEffect lazy-loads it). Phones and case-study
// pages never pay for the shaders library.
export default function ChromaShader({ theme }) {
  return (
    <Shader style={{ width: '100%', height: '100%', opacity: theme === 'dark' ? 0.5 : 0.7 }}>
      <ChromaFlow
        baseColor="#fce1b1"
        downColor="#ffb580"
        intensity={1.5}
        leftColor="#f5e8f4"
        radius={1.5}
        rightColor="#d5ffadff"
        transform={{ edges: 'stretch' }}
        upColor="#E0D5F5"
        visible={true}
      />
      <CursorRipples chromaticSplit={3} decay={19.5} edges="transparent" intensity={20} radius={0.3} />
      <ChromaticAberration blendMode="normal-oklch" />
    </Shader>
  )
}
