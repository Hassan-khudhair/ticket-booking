import React from 'react'
import HeaderAdmin from '../../components/HeaderAdmin'
import { Pagination, Table } from 'react-bootstrap'
import Addbtn from '../../components/Addbtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

const Reservation = () => {
  return (
    <div className='container-content'>
      <HeaderAdmin text={'الحجوزات'} />
      <div className="tickets">
          <Addbtn text={'اضف حجز جديد'} />
        <Table striped bordered hover className='thead-table'>
          <thead>
            <tr>
              <th>#</th>
              <th> أسم الشخص</th>
              <th>الوجهة</th>
              <th>الوقت</th>
              <th>العدد</th>
              <th>السعر</th>
              <th>الحالة</th>
              <th colSpan={2}></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>احمد علي</td>
              <td>بيروت</td>
              <td>9am || 12/3/2024</td>
              <td>2</td>
              <td>1000$</td>
              <td><button className='active-order'> مفعل </button></td>
              <td colSpan={2}>
                <div className="btns">
                  <button><FontAwesomeIcon icon={faTrash}/></button>
                  <button><FontAwesomeIcon icon={faPen}/></button>
                </div>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>حيدر غازي</td>
              <td>مشهد</td>
              <td>9am || 12/3/2024</td>
              <td>2</td>
              <td>1000$</td>
              <td><button className='no-active-order'>غير مفعل </button> </td>
              <td colSpan={2}>
                <div className="btns">
                  <button><FontAwesomeIcon icon={faTrash}/></button>
                  <button><FontAwesomeIcon icon={faPen}/></button>
                </div>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>محمد علي</td>
              <td>بيروت</td>
              <td>9am || 12/3/2024</td>
              <td>1</td>
              <td>500$</td>
              <td><button className='active-order'>مفعل</button></td>
              <td colSpan={2}>
                <div className="btns">
                  <button><FontAwesomeIcon icon={faTrash}/></button>
                  <button><FontAwesomeIcon icon={faPen}/></button>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      
      <Pagination>
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>{5}</Pagination.Item>
        <Pagination.Next />
      </Pagination>
      </div>

    </div>
  )
}

export default Reservation