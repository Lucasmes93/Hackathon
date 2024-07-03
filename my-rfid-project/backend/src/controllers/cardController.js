const prisma = require('../prismaClient');const { generateToken, verifyToken } = require('../utils/jwtUtils');
exports.scanCard = async (req, res) => {
  const { cardId } = req.body;
  try {
    const card = await prisma.card.findUnique({ where: { cardId } });
    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }    const token = generateToken({ cardId: card.cardId });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};exports.logout = async (req, res) => {
  const { cardId } = req.user;
  try {
    await prisma.session.updateMany({
      where: { cardId, isAuth: true },
      data: { isAuth: false, logoutAt: new Date() }
    });
    res.json({ message: 'Logout successful' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
 