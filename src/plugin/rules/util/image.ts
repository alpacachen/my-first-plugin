import { CSSProperties } from "react";
import { styleToString } from ".";

export class Img {
    private style: CSSProperties = {}
    constructor(private imageData: Uint8Array) { }

    addStyle(style: CSSProperties) {
        this.style = style
    }

    private uint8ArrayToBase64(uint8Array: Uint8Array): string {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        let output = '';
        let i = 0;
        while (i < uint8Array.length) {
            const byte1 = uint8Array[i++] || 0;
            const byte2 = uint8Array[i++] || 0;
            const byte3 = uint8Array[i++] || 0;

            const enc1 = byte1 >> 2;
            const enc2 = ((byte1 & 3) << 4) | (byte2 >> 4);
            const enc3 = ((byte2 & 15) << 2) | (byte3 >> 6);
            const enc4 = byte3 & 63;

            if (isNaN(byte2)) {
                output += chars.charAt(enc1) + chars.charAt(enc2) + '==';
            } else if (isNaN(byte3)) {
                output += chars.charAt(enc1) + chars.charAt(enc2) + chars.charAt(enc3) + '=';
            } else {
                output += chars.charAt(enc1) + chars.charAt(enc2) + chars.charAt(enc3) + chars.charAt(enc4);
            }
        }
        return output;
    }

    render() {
        const base64 = this.uint8ArrayToBase64(this.imageData);
        return `<img src="data:image/png;base64,${base64}" style="${styleToString(this.style)}" />`;
    }
}
