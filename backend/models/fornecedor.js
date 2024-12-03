const Sequelize = require(sequelize)

module.exports = (sequelize) => {
    const Fornecedor = sequelize.define('Fornecedor', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false, // Nome é obrigatório
    validate: {
      notEmpty: true, // Não pode ser vazio
    },
  },
  cnpj: {
    type: DataTypes.STRING(14),
    allowNull: false,
    unique: true, 
    validate: {
      is: /^\d{14}$/, // Aceita apenas números com exatamente 14 dígitos
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false, 
    validate: {
      isEmail: true,
    },
  },
}, {
  tableName: 'fornecedores', 
  timestamps: true, 
});
}
