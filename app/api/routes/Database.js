// database.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createUser = async (email, name, age) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        age,
      },
    });

    console.log('New user created:', newUser);
  } catch (error) {
    console.error('Error creating user:', error);
  }
};

module.exports = {
  prisma,
  createUser,
};
