import { Router } from 'express'
import { validate } from '../utils/validate'
import { loginSchema, signupSchema } from '../validators/auth.validator'
import * as AuthController from '../controller/auth.controller'

const router = Router()

router.post('/admin/login', validate(loginSchema), AuthController.loginAdmin)
router.post(
    '/admin/signup',
    validate(signupSchema),
    AuthController.registerAdmin
)
router.get('/admin/dashboard/profile', AuthController.getProfile)
router.post('/refresh', AuthController.refreshToken)
router.patch('/admin/dashboard/updateprofile/:id', AuthController.updateProfile)

router.post('/logout', () => {
    console.log(
        'this method should store any session info if stored, or remove cookie from the header'
    )
})

router.post('/forgot-password', () => {
    console.log(
        'this method should send an email using sendgrid to the user with forgot password link'
    )
})

export default router
