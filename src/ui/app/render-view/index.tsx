import { FC } from "react";

export const RenderView: FC<{
    width: number
}> = ({ width }) => {
    return <div className="w-full p-1 box-border flex h-full justify-center">
        <div style={{ width: width }} className="h-8/9 ring-1 ring-gray-200 rounded-lg"></div>
    </div>
}