const express = require('express');
const multer = require('multer');
const router = express.Router();
const multerInstance = require('../multer');
const Product = require('../Model/Product');

router.post('/', multerInstance.upload.single('image'), async (req, res) => {

    const dataProduct = {
        name: req.body.name,
        price: req.body.price,
        image: req.file.path
    }

    try {
        
        const newProduct = await Product.create({...dataProduct});
        res.json(newProduct);

    } catch (error) {
        res.json(error);
    }
});

router.get('/', async (req, res) => {

    try {
        const products = await Product.find();
        res.status(200).json(products);

    } catch (error) {
        res.status(500).json(error);
    }

});

router.get('/:id', async (req, res) => {

    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json(error);
        
    }
});

router.put('/:id', async (req, res) => {

    const dataProduct = {
        name: req.body.name,
        price: req.body.price,
        image: req.file.path
    };



    try {
        const editedProduct = await Product.updateOne(
            { _id: req.params.id },
            { $set: dataProduct }
        );

        res.status(200).json(editedProduct);

    } catch (error) {
        res.status(500).json(error);
    }
});

router.delete('/:id', async (req, res) => {

    try {
        const deleteProduct = await Product.findByIdAndRemove(req.params.id);
        res.status(200).json(deleteProduct);

    } catch (error) {
        res.status(500).json(error);
        
    }
});


module.exports = router