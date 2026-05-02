import {
  Shader,
  ChromaFlow,
  ChromaticAberration,
  CursorRipples,
} from 'shaders/react'

export default function ShaderEffect({ theme }) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        // zIndex: 1,
        overflow: 'hidden',
        background: theme === 'dark' ? '#0a0a0a' : '#fafaf7',
      }}
    >
      <Shader style={{ width: '100%', height: '100%',opacity: theme === 'dark' ? '0.5' : '0.7', }}>
        <ChromaFlow
          baseColor="#fce1b1"
          downColor="#ffb580"
          intensity={1.5}
          leftColor="#f5e8f4"
          radius={1.5}
          rightColor="#d5ffadff"
          transform={{ edges: "stretch" }}
          upColor="#E0D5F5"
          visible={true}
        />
        <CursorRipples
          chromaticSplit={3}
          decay={19.5}
          edges="transparent"
          intensity={20}
          radius={0.3}
        />
        <ChromaticAberration blendMode="normal-oklch" />
      </Shader>
    </div>
  )
}