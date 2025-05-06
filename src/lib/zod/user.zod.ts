import zod from 'zod'

export const userRegisterValidation = zod.object({
    firstname: zod.string().min(1, "firstname should not be empty"),
    lastname: zod.string().min(1, "lastname cannot be empty"),
    username: zod.string().min(4, "username should be minimum of 4 characters"),
    email: zod.string().email("Invalid email"),
    password: zod.string().min(8, "password should min of 8 characters")
})

export const userLoginValidation = userRegisterValidation.pick({
    username: true,
    password: true
})


