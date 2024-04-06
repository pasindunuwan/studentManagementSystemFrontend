"use client";
import React, { useState } from 'react'; 
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'; 
  
export default function Calendar1() { 
    const [value, onChange] = useState(new Date()); 
  
    return ( 
        <div> 
            {/* <h1>NextJs Calendar - GeeksforGeeks</h1> 
            <Calendar
                onChange={onChange}
                value={value}
                className="mx-auto bg-white shadow-md rounded-lg p-4"
                calendarClassName="bg-gray-100 p-4"
                tileClassName="border border-gray-200 rounded-md p-2 hover:bg-gray-200"
            /> */}
        
        </div> 
    ); }