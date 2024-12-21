const { app } = require("./app.js");
const { env } = require("./config");

const PORT = env.PORT;
console.log('Servidor iniciado');
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);                                                                                                                                                
});
