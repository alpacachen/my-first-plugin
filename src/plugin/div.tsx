import { CSSProperties } from "react"

// 驼峰转横杠
const camelToDash = (str: string) => {
    return str.replace(/([A-Z])/g, '-$1').toLowerCase()
}

export class DIV {
    private style: CSSProperties = {}
    private children: DIV[] = []
    public addStyle(style: CSSProperties) {
        this.style = Object.assign({}, this.style, style)
    }
    public addChild(child: DIV) {
        this.children.push(child)
    }
    public render(): string {
        return `
        <div style="${Object.entries(this.style).map(([key, value]) => `${camelToDash(key)}: ${value}`).join('; ')}">
            ${this.children.map(child => child.render()).join('')}
        </div>
        `
    }
}
