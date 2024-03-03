import React from 'react'
import{Link} from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
    <nav id="sidebar">
        <ul className="list-unstyled components">
        <li>
            <Link href="/dashboard"><i className="fa fa-tachometer-alt"></i> Dashboard</Link>
        </li>

        <li>
            <Link to="#productSubmenu" data-toggle="collapse" aria-expanded="false" classNameName="dropdown-toggle"><i
                className="fa fa-product-hunt"></i> Products</Link>
            <ul className="collapse list-unstyled" id="productSubmenu">
                <li>
                <Link to="/admin/products"><i className="fa fa-clipboard-list"></i> All</Link>
                </li>

                <li>
                <Link to="/admin/product"><i className="fa fa-plus"></i> Create</Link>
                </li>
            </ul>
        </li>

        <li>
            <Link href="/admin/orders"><i className="fa fa-shopping-basket"></i> Orders</Link>
        </li>

        <li>
            <Link href="/admin/users"><i className="fa fa-users"></i> Users</Link>
        </li>

    </ul>
    </nav>
</div>
  )
}

export default Sidebar