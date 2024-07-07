import { connection } from "../db/db.js";
import bcrypt from 'bcrypt'

export class UserModel {
    static async findAll() {
        const sql = 'SELECT id, firstName, lastName, email, isDeleted, createdAt, modifiedAt, createdBy, modifiedBy FROM `user` WHERE isDeleted = ?';
        const values = [0]

        try {
            const [rows, fields] = await connection.query(sql, values)
            return rows
        } catch (error) {
            console.log(error)
            return error
        }
    }
    static async findById(userId) {
        const sql = 'SELECT id, firstName, lastName, email, isDeleted, createdAt, modifiedAt, createdBy, modifiedBy FROM `user` WHERE `id` = ? AND isDeleted = ?';
        const values = [userId, 0]

        try {
            const [rows, fields] = await connection.query(sql, values)
            return rows
        } catch (error) {
            console.log(error)
            return error
        }
    }
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
    static async findByName(userFirstName, userLastName) {
        const sql = 'SELECT id, firstName, lastName, email, isDeleted, createdAt, modifiedAt, createdBy, modifiedBy FROM `user` WHERE `firstName` = ? AND `lastName` = ? AND isDeleted = ?';
        const values = [userFirstName, userLastName, 0]

        try {
            const [rows, fields] = await connection.query(sql, values)
            return rows
        } catch (error) {
            console.log(error)
            return error
        }
    }
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
    static async softDelete(userId) {
        const sql = 'UPDATE `user` SET `isDeleted` = true WHERE `id` = ?';
        const values = [userId]

        try {
            const [rows, fields] = await connection.execute(sql, values)

            return "User deleted successfully"
        } catch (error) {
            return error
        }
    }
    static async delete(userId) {
        const sql = 'DELETE FROM `user` WHERE `id` = ?';
        const values = [userId]

        try {
            const [rows, fields] = await connection.execute(sql, values)

            return "User deleted successfully"
        } catch (error) {
            return error
        }
    }
}