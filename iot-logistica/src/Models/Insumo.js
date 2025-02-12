import mongoose from 'mongoose';

const InsumoSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  nome: { type: String, required: true },
  descricaoInsumo: { type: String, required: true },
  quantidadeInsumo: { type: Number, required: true },
});

export default mongoose.model('Insumo', InsumoSchema);
