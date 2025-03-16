import { useEffect, useState } from 'react'
import './app.css'
import { ResizeButton } from './resize-button';
import { RenderView } from './render-view';
function App() {
  useEffect(() => {
    window.addEventListener('message', (event) => {
      console.log(event.data.pluginMessage);
    });
  }, []);
  const [width, setWidth] = useState(150)

  return (
    <div className='relative h-full w-full'>
      <RenderView width={width} />
      <ResizeButton setWidth={setWidth} />
    </div>
  )
}

export default App
