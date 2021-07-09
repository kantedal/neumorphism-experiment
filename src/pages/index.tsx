import NeuDiv from 'components/NeuDiv'
import { NextPage } from 'next'
import { useEffect, useRef } from 'react'

const Home: NextPage = () => {
  const lightSize = 1600
  const lightRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      if (!lightRef.current) {
        return
      }

      lightRef.current.style.top = e.clientY - lightSize / 2 + 'px'
      lightRef.current.style.left = e.clientX - lightSize / 2 + 'px'
    })
  }, [])

  return (
    <div className='min-h-screen bg-[#e0e0e0] flex flex-col'>
      <div className='mx-auto flex-center max-w-7xl p-12'>
        <h1 className='text-black'>Hhehe</h1>
      </div>
      <div
        ref={lightRef}
        className='fixed z-[1]'
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.0), transparent, transparent)',
          width: lightSize,
          height: lightSize,
        }}
      />
      <div className='min-h-screen relative'>
        <NeuDiv
          className='w-64 h-64 rounded-3xl absolute top-[200px] left-[200px]'
          style={{
            background: 'radial-gradient(circle at center, transparent, transparent, rgba(0,0,0,0.05))',
            borderRadius: 49,
          }}
        />

        <NeuDiv
          className='w-64 h-64 rounded-3xl absolute bottom-[200px] right-[200px]'
          style={{
            borderRadius: 49,
          }}
        />
      </div>
      <div className='min-h-screen relative'>
        <NeuDiv
          className='w-64 h-64 rounded-3xl absolute top-[200px] left-[200px]'
          style={{
            borderRadius: 49,
          }}
        />

        <NeuDiv
          className='w-64 h-64 rounded-3xl absolute bottom-[200px] right-[200px]'
          style={{
            borderRadius: 49,
          }}
        />
      </div>
    </div>
  )
}

export default Home
