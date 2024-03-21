import React from 'react'
import HeaderAdmin from '../../components/HeaderAdmin'
import { Pagination, Table } from 'react-bootstrap'
import Addbtn from '../../components/Addbtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

const Vehicles = () => {
  return (
    <div className='container-content'>
      <HeaderAdmin text={'المركبات'} />
      <div className="tickets">
          <Addbtn text={'اضف مركبة جديده'} />
        <Table striped bordered hover className='thead-table'>
          <thead>
            <tr>
              <th>#</th>
              <th> اسم المركبة</th>
              <th>النوع</th>
              <th>العدد</th>
              <th colSpan={2}></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>ماريسديس</td>
              <td>باص</td>
              <td>50</td>
              <td colSpan={2}>
                <div className="btns">
                  <button><FontAwesomeIcon icon={faTrash}/></button>
                  <button><FontAwesomeIcon icon={faPen}/></button>
                </div>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>ماريسديس</td>
              <td>باص</td>
              <td>50</td>
              <td colSpan={2}>
                <div className="btns">
                  <button><FontAwesomeIcon icon={faTrash}/></button>
                  <button><FontAwesomeIcon icon={faPen}/></button>
                </div>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Airbas 560</td>
              <td>طائرة</td>
              <td>250</td>
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

export default Vehicles