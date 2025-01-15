// Controller functions

// Imports
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
    
const __dirname = dirname(fileURLToPath(import.meta.url))

export const Return404 = (req, res) => {
    return res.sendFile(__dirname+'../../../../frontend/public/pages/notfound.html')
}