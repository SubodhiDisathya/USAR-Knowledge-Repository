import React, { useState } from 'react';
import './SystemSecurity.css';

export default function SystemSecurity() {
  // Roles ලැයිස්තුව
  const [roles, setRoles] = useState([
    { id: 1, name: 'Administrator', permissions: 'Full Access (View, Edit, Delete)' },
    { id: 2, name: 'Rescue Officer', permissions: 'View, Edit Reports' },
    { id: 3, name: 'Viewer', permissions: 'View Only' },
  ]);

  // System Users ලැයිස්තුව (Users ලාට Roles assign කිරීමට)
  const [users, setUsers] = useState([
    { id: 1, username: 'Admin User', email: 'admin@usar.lk', assignedRole: 'Administrator' },
    { id: 2, username: 'John Doe', email: 'john@usar.lk', assignedRole: 'Rescue Officer' },
    { id: 3, username: 'Sarah Perera', email: 'sarah@usar.lk', assignedRole: 'Viewer' },
  ]);

  const [auditLogs, setAuditLogs] = useState([
    { id: 1, user: 'Admin', action: 'Logged in', time: '2026-09-25 10:30 AM' },
    { id: 2, user: 'Officer John', action: 'Updated Rescue Form #12', time: '2026-09-25 11:15 AM' },
  ]);

  // අලුත් Role එකක් එක් කිරීම සඳහා states
  const [newRoleName, setNewRoleName] = useState('');
  const [newPermissions, setNewPermissions] = useState('');

  // Role එකක් Edit කිරීම සඳහා states
  const [editingRoleId, setEditingRoleId] = useState(null);
  const [updatedPermissions, setUpdatedPermissions] = useState('');

  // අලුත් Role එකක් ඇඩ් කිරීම
  const handleAddRole = (e) => {
    e.preventDefault();
    if (!newRoleName.trim()) return;

    const newRole = {
      id: roles.length + 1,
      name: newRoleName,
      permissions: newPermissions || 'View Only',
    };

    setRoles([...roles, newRole]);
    
    // Audit Log එකට එකතු කිරීම
    setAuditLogs([
      { id: auditLogs.length + 1, user: 'Admin', action: `Added new role: ${newRoleName}`, time: new Date().toLocaleString() },
      ...auditLogs
    ]);

    setNewRoleName('');
    setNewPermissions('');
  };

  // User කෙනෙක්ගේ Role එක වෙනස් කිරීම (Dropdown එකෙන්)
  const handleUserRoleChange = (userId, newRole) => {
    setUsers(users.map(u => u.id === userId ? { ...u, assignedRole: newRole } : u));
    
    setAuditLogs([
      { id: auditLogs.length + 1, user: 'Admin', action: `Updated role for user ID ${userId} to ${newRole}`, time: new Date().toLocaleString() },
      ...auditLogs
    ]);
  };

  // Edit Click කළ විට
  const handleEditClick = (role) => {
    setEditingRoleId(role.id);
    setUpdatedPermissions(role.permissions);
  };

  // Save Permissions
  const handleSavePermissions = (id) => {
    setRoles(roles.map(r => r.id === id ? { ...r, permissions: updatedPermissions } : r));
    setEditingRoleId(null);

    setAuditLogs([
      { id: auditLogs.length + 1, user: 'Admin', action: `Updated permissions for role ID ${id}`, time: new Date().toLocaleString() },
      ...auditLogs
    ]);
  };

  return (
    <div className="security-container">
      <h2>System Security & Roles</h2>
      <p className="security-subtitle">Configure access levels, permissions, user role assignments, and system audit logs.</p>

      {/* 1. Add New Role Section */}
      <div className="security-section">
        <h3>Add New System Role</h3>
        <form onSubmit={handleAddRole} className="add-role-form">
          <input 
            type="text" 
            placeholder="Role Name (e.g., Dispatcher)" 
            value={newRoleName}
            onChange={(e) => setNewRoleName(e.target.value)}
            className="edit-input"
            required
          />
          <input 
            type="text" 
            placeholder="Permissions (e.g., View, Create Reports)" 
            value={newPermissions}
            onChange={(e) => setNewPermissions(e.target.value)}
            className="edit-input"
          />
          <button type="submit" className="save-btn">Add Role</button>
        </form>
      </div>

      {/* 2. Role-Based Access Control (RBAC) Table */}
      <div className="security-section">
        <h3>Role-Based Access Control (RBAC)</h3>
        <table className="security-table">
          <thead>
            <tr>
              <th>Role Name</th>
              <th>Permissions</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id}>
                <td>{role.name}</td>
                <td>
                  {editingRoleId === role.id ? (
                    <input 
                      type="text" 
                      value={updatedPermissions} 
                      onChange={(e) => setUpdatedPermissions(e.target.value)}
                      className="edit-input"
                    />
                  ) : (
                    role.permissions
                  )}
                </td>
                <td>
                  {editingRoleId === role.id ? (
                    <>
                      <button className="save-btn" onClick={() => handleSavePermissions(role.id)}>Save</button>
                      <button className="cancel-btn" onClick={() => setEditingRoleId(null)}>Cancel</button>
                    </>
                  ) : (
                    <button className="edit-btn" onClick={() => handleEditClick(role)}>Edit</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 3. User Role Assignment Section */}
      <div className="security-section">
        <h3>User Role Assignments</h3>
        <table className="security-table">
          <thead>
            <tr>
              <th>User Name</th>
              <th>Email</th>
              <th>Assigned Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.username}</td>
                <td>{u.email}</td>
                <td>
                  <select 
                    value={u.assignedRole} 
                    onChange={(e) => handleUserRoleChange(u.id, e.target.value)}
                    className="role-select"
                  >
                    {roles.map((r) => (
                      <option key={r.id} value={r.name}>{r.name}</option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 4. System Audit Logs Section */}
      <div className="security-section">
        <h3>System Audit Logs</h3>
        <div className="logs-box">
          {auditLogs.map((log) => (
            <div key={log.id} className="log-item">
              <span className="log-user">{log.user}</span> - 
              <span className="log-action"> {log.action}</span> 
              <span className="log-time"> ({log.time})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}