import React from 'react'
import { Container,Row,Col} from 'reactstrap'
import { db } from '../FirebaseConfig'
import { deleteDoc,doc } from 'firebase/firestore'
import {toast} from 'react-toastify'
import useGetData from '../custom-hooks/useGetData'
const Users = () => {
    const {data:userData,loading}=useGetData('users')
    const deleteUser=async(id)=>{
        await deleteDoc(doc(db,'users',id));
        toast.success("User Deleted!");
    }
  return (
    <section>
        <Container>
            <Row>
                <Col lg="12"><h4 className='fw-bold'>Users</h4></Col>
                <Col lg="12" className='pt-5'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>UserName</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loading?<h5>Loading...</h5>:
                                userData?.map(user=>(
                                    <tr key={user.id}>
                                        <td>
                                            <img src={user.photoURL} alt="" srcset="" />
                                        </td>
                                        <td>{user.displayName}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <button className='btn btn-danger'onClick={()=>deleteUser(user.uid)}>Delete</button>
                                        </td>                                        

                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Users