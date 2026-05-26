const User = require('../models/User');

class UserService {
    async getAllUsers() {
        return await User.find();
    }

    async createUser(userData) {
        const user = new User(userData);
        return await user.save();
    }

    async updateUser(userId, userData) {
        return await User.updateOne({ _id: userId }, { $set: userData });
    }

    async deleteUser(userId) {
        return await User.deleteOne({ _id: userId });
    }
}

module.exports = new UserService();
