export class UserModel {
    static async findAll() { }
    static async findById(userId) { }
    static async findByEmail(userEmail) { }
    static async findByName(userFirstName, userLastName) { }
    static async create(userFirstName, userLastName, userEmail, userPassword) { }
    static async update(userId, data) { }
    static async delete(userId) { }
}