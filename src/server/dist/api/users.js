"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
;
function getUsers(request, response, next) {
    const users = [
        {
            id: "1",
            name: "test",
            email: "ggg@gmail.com",
            password: "gigel"
        }
    ];
    response.status(200).json(users);
}
exports.getUsers = getUsers;
;
//# sourceMappingURL=users.js.map