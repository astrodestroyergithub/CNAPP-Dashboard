import React from 'react';
import './TicketCard.scss';

function TicketCard({ ticket }) {
  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <span className={`status-badge status-${ticket.status.replace(" ", "").toLowerCase()}`}>
          {ticket.status}
        </span>
        <span className={`priority-badge priority-${ticket.priority.toLowerCase()}`}>
          {ticket.priority}
        </span>
        <span className="ticket-id">{ticket.id}</span>
      </div>
      <div className="ticket-title">{ticket.title}</div>
      <div className="ticket-description">{ticket.description}</div>
      <div className="ticket-details">
        <div><strong>Assignee:</strong> {ticket.assignee}</div>
        <div><strong>Asset:</strong> {ticket.asset}</div>
        <div><strong>Created:</strong> {new Date(ticket.createdAt).toLocaleString()}</div>
        <div><strong>Updated:</strong> {new Date(ticket.updatedAt).toLocaleString()}</div>
      </div>
      <div className="ticket-notes">
        <strong>Notes:</strong> {ticket.notes}
      </div>
      <div className="ticket-actions">
        <button>Edit</button>
        <button>Assign</button>
        <button>Close</button>
      </div>
    </div>
  );
}

export default TicketCard;
