import React from 'react'
import HeaderAdmin from '../../components/HeaderAdmin'
import { Pagination, Table } from 'react-bootstrap'
import Addbtn from '../../components/Addbtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

const Ticket = () => {
  return (
    <div className='container-content'>
      <HeaderAdmin text={'التذاكر'} />
      <div className="tickets">
          <Addbtn text={'اضف تذكره جديده'} />
        <Table striped bordered hover className='thead-table'>
          <thead >
            <tr>
              <th>#</th>
              <th> اسم الرحلة</th>
              <th>النوع</th>
              <th>من</th>
              <th>الى</th>
              <th>المسافة</th>
              <th>السعر</th>
              <th>الوقت</th>
              <th>نوع الرحلة</th>
              <th>المقاعد المحجوزة</th>
              <th>المقاعد الشاغرة</th>
              <th colSpan={2}></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>ايران</td>
              <td>عادي</td>
              <td>بغداد</td>
              <td>مشهد</td>
              <td>1200Km</td>
              <td>1000$</td>
              <td>9am || 12/3/2024</td>
              <td>باص</td>
              <td>30</td>
              <td>20</td>
              <td colSpan={2}>
                <div className="btns">
                  <button><FontAwesomeIcon icon={faTrash}/></button>
                  <button><FontAwesomeIcon icon={faPen}/></button>
                </div>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>ايران</td>
              <td>عادي</td>
              <td>بغداد</td>
              <td>مشهد</td>
              <td>1200Km</td>
              <td>1000$</td>
              <td>9am || 12/3/2024</td>
              <td>باص</td>
              <td>30</td>
              <td>20</td>
              <td colSpan={2}>
                <div className="btns">
                  <button><FontAwesomeIcon icon={faTrash}/></button>
                  <button><FontAwesomeIcon icon={faPen}/></button>
                </div>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>ايران</td>
              <td>عادي</td>
              <td>بغداد</td>
              <td>مشهد</td>
              <td>1200Km</td>
              <td>1000$</td>
              <td>9am || 12/3/2024</td>
              <td>باص</td>
              <td>30</td>
              <td>20</td>
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

export default Ticket