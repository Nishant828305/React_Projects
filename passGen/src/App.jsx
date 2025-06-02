import { useState,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(12)
  const [includeUpper, setIncludeUpper] = useState(true)
  const [includeLower, setIncludeLower] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  const [password, setPassword] = useState("")

  const generatePassword = () => {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lower = "abcdefghijklmnopqrstuvwxyz"
    const numbers = "0123456789"
    const symbols = "!@#$%^&*()_+[]{}<>?/"

    let charset = ""
    if (includeUpper) charset += upper
    if (includeLower) charset += lower
    if (includeNumbers) charset += numbers
    if (includeSymbols) charset += symbols

    if (!charset) {
      alert("Select at least one option")
      return
    }

    let generated = ""
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length)
      generated += charset[randomIndex]
    }

    setPassword(generated)
  }
  // use ref
   const passwordref = useRef(null)
  const copyToClipboard = () => {
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0,40);
    if (!password) return
    window.navigator.clipboard.writeText(password)

    alert("Password copied!")
  }

  return (
    <>
      <div className="max-w-md mx-auto p-6 bg-white rounded shadow mt-10 bg-gray-500">
        <h1 className="text-2xl font-bold mb-4 text-center text-red-500">🔐 Password Generator</h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            readOnly
            value={password}
            placeholder="Your generated password"
           
            className="flex-1 p-2 border rounded bg-gray-100 text-gray-700"
             ref={passwordref}
          />
          <button
            onClick={copyToClipboard}
            className="bg-red-500 text-white px-4 rounded hover:bg-red-600"
          >
            Copy
          </button>
        </div>

        <label className="block mb-2 font-medium text-black">
          Password Length: {length}
          <input
            type="range"
            min="4"
            max="32"
            value ={length}
            onChange={e => setLength(Number(e.target.value))}
            className="w-full mt-1"
          />
         
        </label>

        <div className="space-y-2 mb-4">
          <label className="flex items-center gap-2 text-red-600">
            <input
              type="checkbox"
              checked={includeUpper}
              onChange={() => setIncludeUpper(!includeUpper)}
            />
            Include Uppercase
          </label>
          <label className="flex items-center gap-2 text-red-600">
            <input
              type="checkbox"
              checked={includeLower}
              onChange={() => setIncludeLower(!includeLower)}
            />
            Include Lowercase
          </label>
          <label className="flex items-center gap-2 text-red-600">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
            Include Numbers
          </label>
          <label className="flex items-center gap-2 text-red-600" >
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
            />
            Include Symbols
          </label>
        </div>

        <button
          onClick={generatePassword}
          className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
        >
          Generate Password
        </button>
      </div>
    </>
  )
}

export default App
