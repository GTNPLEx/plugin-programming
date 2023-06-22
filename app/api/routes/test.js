const { PrismaClient, User, Account, Conversation, Message } = require('@prisma/client');

async function testDatabase() {
  const prisma = new PrismaClient();

  try {
    // Create a new user
    const newUser = await prisma.user.create({
      data: {
        email: "test2@example.com",
        name: "Test User2",
        age: '40',
        Message: 'cool',
      },
    });

    console.log('New user created:', newUser);
  } catch (error) {
    console.error('Error testing database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testDatabase();
