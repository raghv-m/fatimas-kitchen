import nodemailer from 'nodemailer';
import { Order, Reservation } from './types';
import { formatPrice, formatDate, formatTime } from './utils';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function sendOrderConfirmationEmail(order: Order, items: any[]) {
  const itemsList = items
    .map(
      (item) =>
        `<tr>
          <td style="padding: 8px; border-bottom: 1px solid #eee;">${item.item_name}</td>
          <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: center;">${item.quantity}</td>
          <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: right;">${formatPrice(item.unit_price)}</td>
          <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: right;">${formatPrice(item.total_price)}</td>
        </tr>`
    )
    .join('');

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Order Confirmation</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="margin: 0; font-size: 28px;">Fatima Karahi Corner</h1>
        <p style="margin: 10px 0 0 0; font-size: 16px;">Order Confirmation</p>
      </div>
      
      <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px;">
        <p style="font-size: 18px; margin-bottom: 20px;">Dear ${order.customer_name},</p>
        
        <p>Thank you for your order! We've received it and are preparing your delicious meal.</p>
        
        <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #dc2626; margin-top: 0;">Order Details</h2>
          <p><strong>Order Number:</strong> ${order.order_number}</p>
          <p><strong>Estimated Delivery:</strong> ${order.estimated_delivery_time ? new Date(order.estimated_delivery_time).toLocaleString() : 'Within 1 hour'}</p>
          ${order.delivery_address ? `<p><strong>Delivery Address:</strong><br>${order.delivery_address}<br>${order.delivery_city}, ${order.delivery_postal_code}</p>` : ''}
        </div>
        
        <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #dc2626; margin-top: 0;">Order Items</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background: #f3f4f6;">
                <th style="padding: 8px; text-align: left;">Item</th>
                <th style="padding: 8px; text-align: center;">Qty</th>
                <th style="padding: 8px; text-align: right;">Price</th>
                <th style="padding: 8px; text-align: right;">Total</th>
              </tr>
            </thead>
            <tbody>
              ${itemsList}
            </tbody>
          </table>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid #eee;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <span>Subtotal:</span>
              <span>${formatPrice(order.subtotal)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <span>Tax:</span>
              <span>${formatPrice(order.tax)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <span>Delivery Fee:</span>
              <span>${formatPrice(order.delivery_fee)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 18px; font-weight: bold; margin-top: 12px; padding-top: 12px; border-top: 2px solid #dc2626;">
              <span>Total:</span>
              <span style="color: #dc2626;">${formatPrice(order.total)}</span>
            </div>
          </div>
        </div>
        
        <p style="margin-top: 30px;">If you have any questions about your order, please don't hesitate to contact us.</p>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
          <p style="margin: 5px 0;"><strong>Calgary:</strong> +1 403-280-0009</p>
          <p style="margin: 5px 0;"><strong>Edmonton:</strong> +1 780-705-5000</p>
          <p style="margin: 5px 0;"><strong>Email:</strong> fatimakarahi@gmail.com</p>
        </div>
      </div>
    </body>
    </html>
  `;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM || 'fatimakarahi@gmail.com',
    to: order.customer_email,
    subject: `Order Confirmation - ${order.order_number}`,
    html,
  });
}

export async function sendReservationConfirmationEmail(reservation: Reservation) {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Reservation Confirmation</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="margin: 0; font-size: 28px;">Fatima Karahi Corner</h1>
        <p style="margin: 10px 0 0 0; font-size: 16px;">Reservation Confirmation</p>
      </div>
      
      <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px;">
        <p style="font-size: 18px; margin-bottom: 20px;">Dear ${reservation.customer_name},</p>
        
        <p>Thank you for choosing Fatima Karahi Corner! Your reservation has been confirmed.</p>
        
        <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #dc2626; margin-top: 0;">Reservation Details</h2>
          <p><strong>Reservation Number:</strong> ${reservation.reservation_number}</p>
          <p><strong>Date:</strong> ${formatDate(reservation.reservation_date)}</p>
          <p><strong>Time:</strong> ${formatTime(reservation.reservation_time)}</p>
          <p><strong>Party Size:</strong> ${reservation.party_size} ${reservation.party_size === 1 ? 'person' : 'people'}</p>
          ${reservation.special_requests ? `<p><strong>Special Requests:</strong> ${reservation.special_requests}</p>` : ''}
        </div>
        
        ${reservation.location ? `
        <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #dc2626; margin-top: 0;">Location</h2>
          <p><strong>${reservation.location.name}</strong></p>
          <p>${reservation.location.address}<br>${reservation.location.city}, ${reservation.location.province} ${reservation.location.postal_code}</p>
          <p><strong>Phone:</strong> ${reservation.location.phone}</p>
        </div>
        ` : ''}
        
        <p style="margin-top: 30px;">We look forward to serving you! If you need to modify or cancel your reservation, please contact us at least 2 hours in advance.</p>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
          <p style="margin: 5px 0;"><strong>Calgary:</strong> +1 403-280-0009</p>
          <p style="margin: 5px 0;"><strong>Edmonton:</strong> +1 780-705-5000</p>
          <p style="margin: 5px 0;"><strong>Email:</strong> fatimakarahi@gmail.com</p>
        </div>
      </div>
    </body>
    </html>
  `;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM || 'fatimakarahi@gmail.com',
    to: reservation.customer_email,
    subject: `Reservation Confirmation - ${reservation.reservation_number}`,
    html,
  });
}

