import express from "express";
import conecta_na_data_base from "./config/dbConnect.js";
import livro from "./models/livros.js";


const conexao = await conecta_na_data_base();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("conexão feita com sucesso");
}) 


const app = express();
app.use(express.json());

app.get("/", (req,res) => {
    res.status(200).send("Curso de Node.js");

});

app.get("/livros", async (req,res) => {
    const listalivros = await livro.find({});
    res.status(200).json(listalivros);
});

app.get("/livros/:id", (req, res)=>{

    const index = busca_livro(req.params.id);
    res.status(200).json(livros[index]);
});
app.post("/livros", (req,res) => {
    livros.push(req.body);
    res.status(201).send("livro cadastrado com sucesso");
});

app.put("/livros/:id", (req, res)=>{

    const index = busca_livro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});

app.delete("/livros/:id", (req ,res)=>{
    const index = busca_livro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("livro deletado com sucesso");
});

export default app; 

// mongodb+srv://admin123:aladin123@cluster0.j4mri.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0