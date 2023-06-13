import express from "express";
import { AddWishList, deleteWishListProduct, fetchWishList } from "../controllers/WishListController.js";

const WishListRouter = express.Router()

WishListRouter.post("/insert-product", AddWishList)
WishListRouter.get("/get-product/:userId", fetchWishList)
WishListRouter.delete('/delete-product/:id', deleteWishListProduct)

export default WishListRouter