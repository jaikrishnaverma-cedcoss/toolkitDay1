import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Store } from '@reduxjs/toolkit'
import database, { store } from '../app/store'
import { AddData, UpdateData, DeleteData } from '../app/features/counter/countreSlice'
const Main = () => {

    const state = useSelector(state => state.database.data)
    const dispatch = useDispatch()

    const submitter = (e) => {
        e.preventDefault()
        dispatch(AddData({ Id: e.target.id.value, quantity: e.target.quantity.value }))
    }
    console.log(state)
    return (
        <>
            <div className="full col flexAIC p2">
                <div className="w40 col">
                    <h1 className='p3 m1 linebottom hp0 hm0'>Add to cart</h1>
                    <form onSubmit={submitter} className="full col m2 hm0 linebottom">
                        <label htmlFor="" className='m1 hm0'>Product Id:</label>
                        <input type="number" className='brd line p1 m1 hm0' name="id" placeholder='Product Id' />
                        <label htmlFor="" className='m1 hm0'>Quantity:</label>
                        <input type="number" className='brd line p1 m1 hm0' name="quantity" placeholder='Quantity' />
                        <button type='submit' className='btn sbg m2 hm0'>Add to cart</button>
                    </form>

                </div>
                <div className="w40 col">
                    <h1 className='p3 m1 linebottom hp0 hm0'>Shopping cart</h1>
                    <div className="full col m2 hm0 ">
                        <button className='btn pbg  hm0'>Delete Cart</button>
                    </div>

                    <table className="m2 hm0">
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Title</th>
                                <th>Quality</th>
                                <th>Action</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><p>1</p></td>
                                <td><p>Malai Maxi Dress</p></td>
                                <td className='line brd'><p>1</p></td>
                                <td className='lineS brd bn'><button >update1</button></td>
                                <td><p>50</p></td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </>
    )
}

export default Main