import React from 'react';
import TicketCard from './TicketCard';
import './TicketCard.css';

const TicketList = () => {
  const tickets = [
    {
      title: 'Ticket With Coupon',
      description: 'This is a ticket description. This is a paid ticket. This ticket is uncategorised. This ticket also has a coupon. Buy minimum - 1 and maximum - 1000000 and avail 10% off.',
      venue: 'KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka, India',
      additionalDetails: 'This is additional venue details.',
      availability: '31st Aug 2034, 06:00 PM IST',
      price: '1,000',
    },
    {
      title: 'Early Bird Ticket',
      description: 'Grab this early bird ticket at a discounted price. Limited availability!',
      venue: 'KonfHub Technologies, Bengaluru, India',
      additionalDetails: 'Limited to the first 100 registrants.',
      availability: '15th Aug 2034, 05:00 PM IST',
      price: '500',
    },
    {
      title: 'VIP Access',
      description: 'Get exclusive VIP access to all areas. Includes special perks and gifts.',
      venue: 'C V Raman Nagar, Bengaluru, India',
      additionalDetails: 'Includes access to the VIP lounge and special seating.',
      availability: '31st Aug 2034, 06:00 PM IST',
      price: '5,000',
    },
    // Add more tickets as needed
  ];

  return (
    <div className="ticket-list">
      {tickets.map((ticket, index) => (
        <TicketCard
          key={index}
          title={ticket.title}
          description={ticket.description}
          venue={ticket.venue}
          additionalDetails={ticket.additionalDetails}
          availability={ticket.availability}
          price={ticket.price}
        />
      ))}
    </div>
  );
};

export default TicketList;
