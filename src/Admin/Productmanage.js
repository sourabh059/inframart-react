import { useEffect } from "react"
import "../Admin/admin.css"

export function Productmanage() {

        

    return (
        <>
            <div className="admintable">
                <table id="adminurl">
            
                    <a  id="adminurl" href="uploadimage" class="link-secondary">Add_Product</a><br />
                    <a  id="adminurl" href="updateproduct" class="link-secondary">update_Product</a><br />
                    <a  id="adminurl" href="addadminuser" class="link-success">Add Admin/Manager</a><br />
                    <a  id="adminurl" href="showalluser" class="link-danger">User/Manager/AdminList</a><br />
                </table>
            </div>
        </>
    )
}