// This file, `page.js`, is in a folder called "_lib". The underscore in the 
// title indicates that this folder and all subfolders are to be excluded from 
// the Next.js file-based router.

export default function NotVisible() {
    return <h1>This should not be visible in the browser</h1>
}