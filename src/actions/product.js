'use server'

const courses = [
    {
        id: 1,
        title: 'Introduction to Web Development',
        instructor: 'John Doe',
        price: 49.99,
        duration: 20,
        level: 'Beginner',
        description: 'A comprehensive introduction to web development...',
    },
    {
        id: 2,
        title: 'JavaScript Fundamentals',
        instructor: 'Jane Smith',
        price: 39.99,
        duration: 15,
        level: 'Intermediate',
        description: 'Master the fundamentals of JavaScript programming...',
    },
    {
        id: 3,
        title: 'Advanced React Programming',
        instructor: 'Bob Johnson',
        price: 59.99,
        duration: 30,
        level: 'Advanced',
        description:
            'Take your React skills to the next level with advanced concepts...',
    },
    {
        id: 4,
        title: 'Python for Data Science',
        instructor: 'Alice Brown',
        price: 54.99,
        duration: 25,
        level: 'Intermediate',
        description:
            'Learn Python programming for data analysis and machine learning...',
    },
    {
        id: 5,
        title: 'Java Programming Basics',
        instructor: 'Chris Miller',
        price: 44.99,
        duration: 18,
        level: 'Beginner',
        description:
            'An introduction to Java programming language and basic concepts...',
    },
    {
        id: 6,
        title: 'Full-Stack Web Development with MERN Stack',
        instructor: 'Emma Wilson',
        price: 69.99,
        duration: 35,
        level: 'Advanced',
        description:
            'Build full-stack web applications using the MERN (MongoDB, Express, React, Node.js) stack...',
    },
    {
        id: 7,
        title: 'iOS App Development with Swift',
        instructor: 'David Clark',
        price: 59.99,
        duration: 28,
        level: 'Intermediate',
        description:
            'Create iOS applications using the Swift programming language...',
    },
    {
        id: 8,
        title: 'Cybersecurity Fundamentals',
        instructor: 'Grace Johnson',
        price: 49.99,
        duration: 22,
        level: 'Intermediate',
        description:
            'An introduction to cybersecurity principles and best practices...',
    },
    {
        id: 9,
        title: 'Data Structures and Algorithms in C++',
        instructor: 'Frank Adams',
        price: 54.99,
        duration: 24,
        level: 'Advanced',
        description:
            'Master data structures and algorithms using the C++ programming language...',
    },
    {
        id: 10,
        title: 'UX/UI Design Essentials',
        instructor: 'Sophie Evans',
        price: 49.99,
        duration: 20,
        level: 'Intermediate',
        description:
            'Learn the essentials of user experience (UX) and user interface (UI) design...',
    },
]

export async function getAllProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(courses)
        }, 3000) // 3000 milliseconds (3 seconds) delay
    })
}

export async function createProduct(formData) {
    return { id: 1 }
}

export async function getProduct(id) {
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

export async function updateProduct(id, formData) {
    return { title: 'sample_title' }
}
export async function deleteProduct(id) {
    return { success: true, msg: 'run' }
}
