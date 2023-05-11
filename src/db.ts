import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/mydatabase", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Conexão com o banco de dados estabelecida com sucesso");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
    process.exit(1); // Encerra o processo em caso de erro na conexão
  }
};

export default connectDB;
