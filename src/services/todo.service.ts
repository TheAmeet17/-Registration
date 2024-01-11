/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

//POST todos
export const postTodo = async (body: any) => {
    const { title, status } = body
    return await prisma.todo.create({
        data: {
            title,
            status,
        },
    })
}

//GET todos by id
export const getTodo = async (id: any) => {
    return await prisma.todo.findUnique({
        where: {
            id: Number(id),
        },
    })
}

//DELETE  by id
export const deleteTodo = async (id: any) => {
    return await prisma.todo.delete({
        where: {
            id: Number(id),
        },
    })
}

//UPDATE by id
export const updateTodo = async (id: any, body: any) => {
    const { title, status } = body
    return await prisma.todo.update({
        where: { id: Number(id) },
        data: {
            title: title,
            status: status,
        },
    })
}
