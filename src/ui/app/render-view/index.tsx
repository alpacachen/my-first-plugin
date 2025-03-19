import { FC, useEffect, useState } from "react";
import { MessageFromPlugin } from "../../../common/message";

export const RenderView: FC = () => {
    const [html, setHtml] = useState('')
    const [zoom, setZoom] = useState(1)
    useEffect(() => {
        window.addEventListener('message', (event) => {
            const message = event.data.pluginMessage as MessageFromPlugin
            if (message.type === 'html') {
                setHtml(message.data)
                setZoom(message.zoom)
            }
        })
    }, [])
    return <div className="w-full p-1 box-border flex h-full justify-center bg-mosaic">
        <div dangerouslySetInnerHTML={{ __html: html }} className="w-full" style={{ zoom: 1 / zoom }} />
    </div>
}