import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>

           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
  <h1 className="text-7xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]">ॐ नमः शिवाय</h1>
</div>


        <div className="fixed bottom-10 left-0 right-0 flex justify-center flex-wrap gap-4 px-4">

          <button onClick={() => setColor("red")} className="px-4 py-2 rounded text-white bg-red-600">Red</button>
          <button onClick={() => setColor("green")} className="px-4 py-2 rounded text-white bg-green-600">Green</button>
          <button onClick={() => setColor("blue")} className="px-4 py-2 rounded text-white bg-blue-600">Blue</button>
          <button onClick={() => setColor("black")} className="px-4 py-2 rounded text-white bg-black">Black</button>
          <button onClick={() => setColor("pink")} className="px-4 py-2 rounded text-white bg-pink-600">Pink</button>
          <button onClick={() => setColor("yellow")} className="px-4 py-2 rounded text-white bg-yellow-600">Yellow</button>
          <button onClick={() => setColor("brown")} className="px-4 py-2 rounded text-white bg-amber-600">Brown</button>
          <button onClick={() => setColor("gray")} className="px-4 py-2 rounded text-white bg-gray-600">Gray</button>

          {/* Additional Colors */}
          <button onClick={() => setColor("purple")} className="px-4 py-2 rounded text-white bg-purple-600">Purple</button>
          <button onClick={() => setColor("orange")} className="px-4 py-2 rounded text-white bg-orange-600">Orange</button>
          <button onClick={() => setColor("teal")} className="px-4 py-2 rounded text-white bg-teal-600">Teal</button>
          <button onClick={() => setColor("indigo")} className="px-4 py-2 rounded text-white bg-indigo-600">Indigo</button>
          <button onClick={() => setColor("cyan")} className="px-4 py-2 rounded text-white bg-cyan-600">Cyan</button>
        </div>
      </div>
    </>
  )
}

export default App
