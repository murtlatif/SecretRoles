import React from 'react';

function RoleTable() {
    return (
        <table className="role-list table table-hover table-dark">
            <thead>
                <tr>
                    <th style={{ width: 30 + '%' }} scope="col">Name</th>
                    <th style={{ width: 50 + '%' }} scope="col">Role</th>
                    <th style={{ width: 20 + '%' }} scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Pepak</td>
                    <td>???</td>
                    <td><button type="button" className="btn btn-warning">Reveal</button></td>
                </tr>
                <tr>
                    <td>Loid</td>
                    <td>???</td>
                    <td><button type="button" className="btn btn-warning">Reveal</button></td>
                </tr>
            </tbody>
        </table>
    );
}

export default RoleTable;
