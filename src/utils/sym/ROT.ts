export function ROT(text: string, key: number, ins: "encrypt" | "decrypt") {
    const words = text.split(" ")
    const result: string[] = []
    const START = 65
    const END = 90
    if(ins === "encrypt") {
        words.forEach((word, idx) => {
            word.split("").forEach(letter => {
                if(letter.toUpperCase().charCodeAt(0) + key > END) {
                    letter.toUpperCase() === letter ? 
                    result.push(String.fromCharCode( START + ((letter.toUpperCase().charCodeAt(0) + key) - END) - 1 ).toUpperCase()) :
                    result.push(String.fromCharCode( START + ((letter.toUpperCase().charCodeAt(0) + key) - END) - 1 ).toLowerCase())
                } else {
                    letter.toUpperCase() === letter ? 
                    result.push(String.fromCharCode(letter.toUpperCase().charCodeAt(0) + key).toUpperCase()) :
                    result.push(String.fromCharCode(letter.toUpperCase().charCodeAt(0) + key).toLowerCase())
                }
                
            })
            if(idx + 1 !== words.length) result.push(" ")
        })
    } else {
        words.forEach((word, idx) => {
            word.split("").forEach(letter => {
                if(letter.toUpperCase().charCodeAt(0) - key < START) {
                    letter.toUpperCase() === letter ? 
                    result.push(String.fromCharCode( ((letter.toUpperCase().charCodeAt(0) - key) + END - START) + 1 ).toUpperCase()) :
                    result.push(String.fromCharCode( ((letter.toUpperCase().charCodeAt(0) - key) + END - START) + 1 ).toLowerCase())
                } else {
                    letter.toUpperCase() === letter ? 
                    result.push(String.fromCharCode(letter.toUpperCase().charCodeAt(0) - key).toUpperCase()) :
                    result.push(String.fromCharCode(letter.toUpperCase().charCodeAt(0) - key).toLowerCase())
                }
                
            })
            if(idx + 1 !== words.length) result.push(" ")
        })
    }
    
    return result.join("")
}