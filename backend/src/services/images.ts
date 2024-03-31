import multer from 'multer'
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

import { v4 as uuidv4 } from 'uuid'
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from 'firebase/storage'
import { firebaseApp } from '../firebase'
class FileSizeError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'FileSizeError'
        // Ensure correct prototype chain
        Object.setPrototypeOf(this, FileSizeError.prototype)
    }
}

function checkFileSize(buffer: Buffer) {
    const fileSizeInBytes = buffer.length
    const fileSizeInKilobytes = fileSizeInBytes / 1024
    const maxFileSizeInKilobytes = 1024 // Adjust as needed
    if (fileSizeInKilobytes > maxFileSizeInKilobytes) {
        throw new FileSizeError('File size exceeds the maximum allowed size')
    }
}

async function uploadImageToFirebase(file: Express.Multer.File) {
    const storage = getStorage(firebaseApp)
    const id = uuidv4()
    const imagesRef = ref(storage, `images/${id}`)
    const buffer = file.buffer
    const metaData = {
        contentType: file.mimetype,
    }

    checkFileSize(buffer)

    const snapshot = await uploadBytesResumable(imagesRef, buffer, metaData)
    const url = await getDownloadURL(snapshot.ref)

    return url
}

export { uploadImageToFirebase, FileSizeError }
