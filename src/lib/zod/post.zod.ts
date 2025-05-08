import zod from 'zod'

export const postValidator = zod.object({
    title: zod.string(),
    subtitle: zod.string(),
    topic: zod.string(),
    content: zod.string()
})

export type postType = zod.infer<typeof postValidator>
