'use client';

import Pagination from "@/features/pagination";
import Button from "@/shared/components/button";
import ImageWrapper from "@/shared/components/img-wrapper/img-wrapper.component";
import { ProductService } from "@/shared/service/products/product.service";
import { IProduct } from "@/shared/types/products.types";
import { useEffect, useReducer, useState } from "react";
import useToast from "@/shared/hooks/use-toast.hooks";

const AdminProductsPage = () => {
    const [open, setOpen] = useState(false);
    const [showToast] = useToast();
    const [products, setProducts] = useState<IProduct[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productService = new ProductService();
    const [productData, setProductData] = useReducer((state, action) => {
        switch (action.type) {
            case 'SET_NAME':
                return { ...state, name: action.payload };
            case 'SET_DESCRIPTION':
                return { ...state, description: action.payload };
            case 'SET_PRICE':
                return { ...state, price: action.payload };
            case 'SET_IMAGE_URL':
                return { ...state, image_url: action.payload };
            case 'SET_STOCK_QUANTITY':
                return { ...state, stock_quantity: action.payload };
            default:
                return state;
        }
    }, {
        name: '',
        description: '',
        price: 0,
        image_url: '',
        stock_quantity: 0,
    })
    const fetchProducts = async () => {
        const products = await productService.getProducts();
        setProducts(products.data);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    const deleteProduct = async (id: number) => {
        await productService.deleteProduct(id);
        fetchProducts();
    }

    const onSubmit = async () => {
        await productService.addProduct(productData);
        fetchProducts();
        setOpen(false);
        showToast('Product added successfully', 'success');
    }

    return (
        <div>
            <header className="">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">Products</h1>

                    <Button className="ms-auto max-w-[150px]" clickFunc={() => setOpen(true)} value="Add Product" btnType="primary" />
                </div>

                {open && (
                    <div className="z-40 fixed inset-0" onClick={() => setOpen(false)}>
                        <div className="fixed inset-0 bg-neutral-800 opacity-50"></div>
                        <div className="relative bg-white max-w-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg p-4" onClick={(e) => e.stopPropagation()}>
                            <h2 className="text-2xl font-bold">Add Product</h2>

                            <button className="absolute top-0 right-0 p-2" onClick={() => setOpen(false)}>
                                <div className="size-[40px] flex-center rounded-full ">
                                    <ImageWrapper path="/icons/close.svg" className="size-[20px]" />
                                </div>
                            </button>

                            <form onSubmit={onSubmit}>
                                <label className="block mt-4" htmlFor="name">Name</label>
                                <input className="block w-full p-2 border-2 border-neutral-200 rounded" onChange={(e) => setProductData({ type: 'SET_NAME', payload: e.target.value })} type="text" name="name" id="name" />
                                <label className="block mt-4" htmlFor="description">Description</label>
                                <input className="block w-full p-2 border-2 border-neutral-200 rounded" onChange={(e) => setProductData({ type: 'SET_DESCRIPTION', payload: e.target.value })} type="text" name="description" id="description" />
                                <label className="block mt-4" htmlFor="price">Price</label>
                                <input className="block w-full p-2 border-2 border-neutral-200 rounded" onChange={(e) => setProductData({ type: 'SET_PRICE', payload: Number(e.target.value) })} type="number" name="price" id="price" />
                                <label className="block mt-4" htmlFor="image_url">Image URL</label>
                                <input className="block w-full p-2 border-2 border-neutral-200 rounded" onChange={(e) => setProductData({ type: 'SET_IMAGE_URL', payload: e.target.value })} type="text" name="image_url" id="image_url" />
                                <label className="block mt-4" htmlFor="stock_quantity">Stock Quantity</label>
                                <input className="block w-full p-2 border-2 border-neutral-200 rounded" onChange={(e) => setProductData({ type: 'SET_STOCK_QUANTITY', payload: Number(e.target.value) })} type="number" name="stock_quantity" id="stock_quantity" />

                                <div className="flex justify-between">
                                    <Button className="mt-4 w-full" clickFunc={() => setOpen(false)} value="Cancel" btnType="secondary" />
                                    <Button className="mt-4 w-full" clickFunc={onSubmit} value="Add" btnType="primary" />
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </header>

            <main>
                <ul className="mt-4">
                    {products.slice((currentPage - 1) * 8, currentPage * 8).map((product) => (
                        <li key={product.id} className="relative z-20 flex items-center gap-4 bg-white rounded-lg p-4">
                            <div className="border-neutral-100 rounded-[8px] max-w-[100px] p-2">
                                <ImageWrapper className="w-full " path={product.image} />
                            </div>
                            <div className="">
                                <h3 className="text-lg font-bold">{product.title}</h3>
                                <p className="text-lg">${product.price}</p>
                            </div>
                            <div className="absolute top-0 right-0 p-2 min-w-[120px] h-[40px]">
                                <Button className="mt-4 align-center" clickFunc={() => deleteProduct(product.id)} value="Delete" btnType="secondary" />
                            </div>
                        </li>
                    ))}
                </ul>
            </main>

            <Pagination
                allProducts={products}
                itemPerPage={8}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />

        </div>
    );
};

export default AdminProductsPage;