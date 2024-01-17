const express = require('express');
const cors = require('cors');
const todosRouter = require('./routes/todoRoute');
const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json());



// Routes
app.use('/todos', todosRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
