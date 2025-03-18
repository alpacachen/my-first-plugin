import { useState } from 'react'
import './app.css'
import { ResizeButton } from './resize-button';
import { RenderView } from './render-view';
function App() {
  const [width, setWidth] = useState(490)

  return (
    <div className='relative h-full w-full'>
      <RenderView width={width} />
      <ResizeButton setWidth={setWidth} />
    </div>
  )
}

export default App
