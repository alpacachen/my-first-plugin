import { CSSProperties } from "react"
import { styleToString } from "./rules/util"

export class DIV {
    private style: CSSProperties = {}
    private children: DIV[] = []
    private text: string = ''
    public addStyle(style: CSSProperties) {
        this.style = Object.assign({}, this.style, style)
    }
    public addChild(child: DIV) {
        this.children.push(child)
    }
    public addText(text: string) {
        this.text = text
    }
    public render(): string {
        return `
        <div style="${styleToString(this.style)}">
            ${this.children.map(child => child.render()).join('')}
            ${this.text}
        </div>
        `
    }
}
