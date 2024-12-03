// controllers/paymentController.js
class PaymentController {
    constructor(paymentService) {
        this.paymentService = paymentService;
    }

    
    
    // Pagamento com cartão de crédito
    async creditPayment(req, res) {
        const { userId, valorTotal } = req.body;
        try {
            const transaction = await this.paymentService.creditPayment(userId, valorTotal);
            res.status(200).json(transaction);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao efetuar pagamento com Cartão de Crédito' });
        }
    }

    // Pagamento com PIX
    async PixPayment(req, res) {
        const { userId, valorTotal } = req.body;
        try {
            const transaction = await this.paymentService.PixPayment(userId, valorTotal);
            res.status(200).json(transaction);
        } catch (error) {
            res.status(500).json({error: 'Erro ao efetuar pagamento com pix' });
        }
    }

    // Consulta status da transação
    async TransStatus(req, res) {
        const { transactionId } = req.query;
        try {
            const transaction = await this.paymentService.TransStatus(transactionId);
            res.status(200).json(transaction);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao verificar o status da transação' });
        }
    }
}

module.exports = PaymentController;
