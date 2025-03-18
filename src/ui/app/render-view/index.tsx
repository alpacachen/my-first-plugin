import { FC, useEffect, useState } from "react";
import { MessageFromPlugin } from "../../../common/message";

export const RenderView: FC<{
    width: number
}> = ({ width }) => {
    const [html, setHtml] = useState('')
    useEffect(() => {
        window.addEventListener('message', (event) => {
            const message = event.data.pluginMessage as MessageFromPlugin
            if (message.type === 'html') {
                setHtml(message.data)
            }
        })
    }, [])
    return <div className="w-full p-1 box-border flex h-full justify-center">
        <div style={{ width: width }} className="h-8/9 ring-1 ring-gray-200 rounded-lg">
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    </div>
}