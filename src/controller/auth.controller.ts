import { Request, Response, NextFunction } from 'express'
import * as Authservice from '../services/auth.service'
import { loginBodySchema, signupBodySchema } from '../validators/auth.validator'

export const registerAdmin = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const createdUser = await Authservice.signup(
            signupBodySchema.parse(req.body)
        )
        res.json({
            message: 'User registered successfully',
        })
    } catch (err) {
        next(err)
    }
}

export const loginAdmin = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { email, password } = loginBodySchema.parse(req.body)

        const { accessToken, refreshToken } = await Authservice.login(
            email,
            password
        )
        res.json({
            message: 'Admin login successfully',
            Accesstoken: accessToken,
        })
    } catch (error) {
        next(error)
    }
}

export const refreshToken = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { refreshToken } = req.cookies
    try {
        const token = await Authservice.refresh(refreshToken)
        res.json({ accessToken: token })
    } catch (error) {
        next(error)
    }
}

export const getProfile = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const adminProfile = await Authservice.getAdminProfile()
        return res.status(200).json({
            message: 'Admins fetched successfully',
            data: adminProfile,
        })
    } catch (error) {
        next(error)
    }
}
export const updateProfile = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id } = req.params
        const { fullname, password } = req.body
        const updatedAdmin = await Authservice.updateAdminProfile(
            id,
            fullname,
            password
        )
        res.json({
            message: 'Admin profile update successfully',
            data: updatedAdmin,
        })
    } catch (error) {
        next(error)
    }
}
