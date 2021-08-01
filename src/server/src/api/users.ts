import { NextFunction, Response , Request} from "express";


export function getUsers(request: Request, response: Response, next: NextFunction) {
    const users: User[] = [
        {
            id: "1",
            name: "test",
            email: "ggg@gmail.com",
            password: "gigel"
        }
    ];

    response.status(200).json(users);
};