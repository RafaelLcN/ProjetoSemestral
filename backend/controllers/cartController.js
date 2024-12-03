// controllers/cartController.js
class CartController {
    constructor(cartService) {
        this.cartService = cartService;
    }

    
   
   // Adiciona um produto na cesta
    async ProductAdd(req, res) {
        const { userId, productId, quantity } = req.body;
        try {
            const cart = await this.cartService.ProductAdd(userId, productId, quantity);
            res.status(200).json(cart);
        } catch (error) {
            console.error('Id de produto não encontrado', error.message);
            res.status(500).json({ error: error.message });
        }
    }

    // Remove o produto da cesta
    async removeProduct(req, res) {
        const { userId, productId } = req.query;
        try {
            const cart = await this.cartService.removeProduct(userId, productId);
            res.status(200).json(cart);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    

    // Lista os produtos da cesta
    async getCart(req, res) {
        const userId = req.query.userId
        try {
            const cart = await this.cartService.getCart(userId);
            res.status(200).json(cart);
        } catch (error) {
            console.error('Id de usuário não encontrado', error.message);
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = CartController;
