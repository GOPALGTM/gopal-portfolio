module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0B0F14',
        text: '#E6EDF3',
        cyan: '#00E5FF',
        violet: '#7C4DFF',
        success: '#00C853'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      boxShadow: {
        neon: '0 0 10px 1px #00E5FF55, 0 0 30px 2px #7C4DFF22',
      },
      backgroundImage: {
        grid: 'radial-gradient(rgba(124,77,255,0.08) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
}
