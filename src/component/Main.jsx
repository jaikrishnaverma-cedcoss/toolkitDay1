import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct, addProduct, updateProduct,deleteCart } from '../app/features/counter/countreSlice'
const Main = () => {
    const action = useRef()
    const idRef = useRef()
    const quantityRef = useRef()
    const state = useSelector(state => state.database)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProduct())
    }, [])

    const submitter = (e) => {
        e.preventDefault()
        if (e.target.action.value == 'add') {
            dispatch(addProduct([...state.data, { id: e.target.id.value, quantity: e.target.quantity.value }]))
        } else {
            dispatch(updateProduct([{ id: e.target.id.value, quantity: e.target.quantity.value }]))
        }
        action.current.value = "add"
        idRef.current.value = ''
        quantityRef.current.value = ''
    }

    const updateProducts = (id, quant) => {
        action.current.value = "update"
        idRef.current.value = id
        quantityRef.current.value = quant
    }

    return (
        <>
            <div className="full col flexAIC p2">
                <div className="w40 col">
                    <h1 className='p3 m1 linebottom hp0 hm0'>Add to cart</h1>
                    <form onSubmit={submitter} className="full col m2 hm0 linebottom">
                        <label htmlFor="" className='m1 hm0'>Product Id:</label>
                        <input type="number" ref={idRef} className='brd line p1 m1 hm0' name="id" placeholder='Product Id' />
                        <label htmlFor="" className='m1 hm0'>Quantity:</label>
                        <input type="hidden" ref={action} name='action' value="add" />
                        <input type="number" ref={quantityRef} className='brd line p1 m1 hm0' name="quantity" placeholder='Quantity' />
                        <button type='submit' className='btn sbg m2 hm0'>Add to cart</button>
                    </form>

                </div>
                <div className="w40 col flexAIC">
                    <div className="full row">
                        <h1 className='p3 m1 linebottom hp0 hm0'>Shopping cart</h1>
                    </div>
                    <div className="full col m2 hm0 ">
                        <button className='btn pbg  hm0' onClick={()=>dispatch(deleteCart())}>Delete Cart</button>
                    </div>
                    {
                        (state.error !== '') ?
                            <div className={`notify w100 success ${(state.error.split(' ')[0] == "Error") ? "error" : "success"}`}>
                                <span className='fw'>{(state.error.split(' ')[0] == "Error") ? "Error" : "Success"}:</span> {state.error}</div> :
                            <div></div>

                    }
                    {
                        (state.loading) ? <img src="Iphone-spinner-2.gif" width="100px" alt="" /> : <table className="m2 hm0 full">
                            <thead>
                                <tr>
                                    <th>S.No.</th>
                                    <th>Id</th>
                                    <th>Title</th>
                                    <th>Quality</th>
                                    <th>Action</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    state.data.map((y, i) => <tr>
                                        <td><p>{i}</p></td>
                                        <td><p>{y.id}</p></td>
                                        <td><p>{y.title}</p></td>
                                        <td className='line brd'><p>{y.quantity}</p></td>
                                        <td className='lineS brd bn' onClick={() => updateProducts(y.id, y.quantity)}><button >update</button></td>
                                        <td><p>{y.price}</p></td>
                                    </tr>)

                                }
                            </tbody>

                        </table>
                    }
                </div>
            </div>
        </>
    )
}

export default Main