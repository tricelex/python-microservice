import React, {useEffect, useState} from 'react';
import Wrapper from "./Wrapper";
import {Product} from "../interfaces/product";

const Products = () => {
    const [products, setProduct] = useState([])

    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://localhost:8000/api/products');

                const data = await response.json()

                setProduct(data)
            }
        )();
    }, []);

    return (
        <Wrapper>

            <div
                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                <h1 className="h2">Dashboard</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group mr-2">
                        <button className="btn btn-sm btn-outline-secondary">Share</button>
                        <button className="btn btn-sm btn-outline-secondary">Export</button>
                    </div>
                    <button className="btn btn-sm btn-outline-secondary dropdown-toggle">
                        <span data-feather="calendar"></span>
                        This week
                    </button>
                </div>
            </div>

            <h2>Section Title</h2>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Likes</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map((p: Product) => {
                        return (
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td><img src={p.image} height='100'/></td>
                                <td>{p.title}</td>
                                <td>{p.likes}</td>
                                <td></td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </Wrapper>

    );
};

export default Products;
