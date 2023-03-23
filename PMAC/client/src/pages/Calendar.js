import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const timeSlots = [
  '8:00 AM - 9:30 AM',
  '9:30 AM - 11:00 AM',
  '11:00 AM - 12:30 PM',
  '12:30 PM - 2:00 PM',
  '2:00 PM - 3:30 PM',
  '3:30 PM - 5:00 PM'
];

const Calendar = () => {
  const [selectedSlots, setSelectedSlots] = useState([]);

  const toggleSlot = (day, slot) => {
    const index = selectedSlots.findIndex((item) => item.day === day && item.slot === slot);
    if (index !== -1) {
      setSelectedSlots((prev) => prev.filter((item) => item.day !== day || item.slot !== slot));
    } else {
      setSelectedSlots((prev) => [...prev, { day, slot }]);
    }
  };

  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">Select your availability</h1>
      <Row className="justify-content-center">
        {daysOfWeek.map((day) => (
          <Col md={3} className="mb-5" key={day}>
            <h3 className="text-center">{day}</h3>
            <Form>
              {timeSlots.map((slot) => (
                <Form.Check
                  type="checkbox"
                  label={slot}
                  key={`${day}-${slot}`}
                  checked={selectedSlots.some((item) => item.day === day && item.slot === slot)}
                  onChange={() => toggleSlot(day, slot)}
                />
              ))}
            </Form>
          </Col>
        ))}
      </Row>
      <div className="d-flex justify-content-center">
        <Button variant="primary" onClick={() => console.log(selectedSlots)}>Save</Button>
      </div>
    </Container>
  );
};

export default Calendar;

