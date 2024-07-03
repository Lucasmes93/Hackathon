const express = require('express');const prisma = require('./prismaClient');const cardRoutes = require('./routes/cardRoutes');
const app = express();

app.use(express.json());
app.use('/api/cards', cardRoutes);

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
 