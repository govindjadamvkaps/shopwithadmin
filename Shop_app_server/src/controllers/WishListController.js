import { StatusCodes } from "http-status-codes";
import WishListModel from "../models/WishListModel.js";

export async function AddWishList(req,res){
    try {
        const product = WishListModel(req.body)
        const saveProduct = await product.save()
        res.status(StatusCodes.CREATED).json({data:saveProduct, message:"product is add to wishlist", success:true})
    } catch (error) {
        console.log("error in save product in wishList", error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"error in save product in wishList", success:false})
    }
}

export async function fetchWishList(req,res){
    try {
        const product = await WishListModel.find({userId:req.params.userId}).populate('productId')
        return res.status(StatusCodes.OK).json({data:product, message:"find wishlist product", success:true})
    } catch (error) {
        console.log("error in find wishlist product")
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"error in find wishlist product"})
    }
}


export async function deleteWishListProduct(req,res){
    try {
        const product = await WishListModel.findByIdAndDelete(req.params.id)
       return res.status(StatusCodes.OK).json({message:"product deleted successfully"})
    } catch (error) {
        console.log("error in delete product by wishlist", error)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"error in delete product by wishlist"})
    }

}