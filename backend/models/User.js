import { connection } from "../db/db.js";

export class UserModel {
    static async findAll() { }
    static async findById(userId) { }
    static async findByEmail(userEmail) {
        const sql = 'SELECT id, firstName, lastName, email, isDeleted, createdAt, modifiedAt, createdBy, modifiedBy FROM `user` WHERE `email` = ? AND isDeleted = ?';
        const values = [userEmail, 0]

        try {
            const [rows, fields] = await connection.query(sql, values)
            return rows
        } catch (error) {
            console.log(error)
            return error
        }
    }
    static async findByName(userFirstName, userLastName) { }
    static async create(userFirstName, userLastName, userEmail, userPassword) {
        const sql = 'INSERT INTO `user` (firstName, lastName, email, passwordHash) VALUES (?, ?, ?, ?)';
        const values = [userFirstName, userLastName, userEmail, userPassword]

        try {
            const [rows, fields] = await connection.execute(sql, values)
            return rows.insertId
        } catch (error) {
            return error
        }
    }
    static async update(userId, data) { }
    static async delete(userId) { }
}