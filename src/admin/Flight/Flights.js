import React from 'react'
import HeaderAdmin from '../../components/HeaderAdmin'
import Addbtn from '../../components/Addbtn'
import { Pagination, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

const Flights = () => {
  return (
    <div className='container-content'>
      <HeaderAdmin text={'الرحلات'} />
      <div className="tickets">
          <Addbtn text={'اضف رحلة جديده'} />
        <Table striped bordered hover className='thead-table'>
          <thead>
            <tr>
              <th>#</th>
              <th> اسم الرحلة</th>
              <th>الوقت</th>
              <th>المركبة</th>
              <th>المقاعد المحجوزة</th>
              <th>المقاعد الشاغرة</th>
              <th colSpan={2}></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>مشهد</td>
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
              <td>بيروت</td>
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
              <td>دمشق</td>
              <td>9am || 12/3/2024</td>
              <td>Airbas 560</td>
              <td>115</td>
              <td>105</td>
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

export default Flights