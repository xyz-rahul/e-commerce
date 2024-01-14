'use server'

export async function getAllUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(courses)
        }, 3000) // 3000 milliseconds (3 seconds) delay
    })
}

export async function createUser(formData) {
    return { id: 1 }
}

export async function getUser(id) {
    const course = {
        id: 1,
        title: 'Introduction to Web Development',
        instructor: 'John Doe',
        price: 49.99,
        duration: 20,
        level: 'Beginner',
        description: 'A comprehensive introduction to web development...',
    }
    return course
}

export async function updateUser(id, formData) {
    return { title: 'sample_title' }
}
export async function deleteUser(id) {
    return { success: true, msg: 'run' }
}
