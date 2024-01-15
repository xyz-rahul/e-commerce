import { sql } from '@vercel/postgres'

export async function getAllItems() {
    const { rows } =
        await sql`SELECT course_id, title, instructor, price, duration, description
                    FROM courses
                    ORDER BY course_id`

    return rows
}

export async function createItem(formData) {
    const { title, instructor, price, duration, description } = formData
    const output = await sql`
                          INSERT INTO courses (title, instructor, price, duration, description)
                          VALUES (${title}, ${instructor}, ${price}, ${duration}, ${description});
                        `

    return output
}

export async function getItem(id) {
    const { rows } =
        await sql`SELECT title, instructor, price, duration, description
                            FROM courses
                          WHERE course_id = ${id}`
    const row = rows[0]
    return row
}

export async function updateItem(id, formData) {
    const { title, instructor, price, duration, description } = formData
    const output = await sql`
                          INSERT INTO courses (title, instructor, price, duration, description)
                          VALUES (${title}, ${instructor}, ${price}, ${duration}, ${description});
                          WHERE course_id = ${id}
                        `

    return output
}
export async function deleteItem(id) {
    const output = await sql`
                            DELETE FROM courses
                            WHERE course_id = ${id};`
    const rowCount = output.rowCount
    return { success: true }
}
