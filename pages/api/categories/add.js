import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export default async function handler(req, res) {
    const category = await prisma.categories.create({ data: { item_category: 'boooooo', }, })
    res.status(200).json({ category })
}