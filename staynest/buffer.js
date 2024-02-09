import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";
import { Step7PUT } from "@/API/Registration";
import RegistrationContext from "@/contexts/registrationContext";

const Step7 = () => {
    const { registrationId } = useContext(RegistrationContext);

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleSubmit = async () => {
        try {
            const response = await Step7PUT(registrationId, {
                start_date: startDate,
                end_date: endDate,
            });
            console.log(response.data.message); // Assuming your API returns a message upon successful update
        } catch (error) {
            console.error('Error updating step 7 data: ', error);
        }
    };

    return (
        <div>
            {/* Date inputs using react-datepicker */}
            <div>
                <label htmlFor="startDate">Start Date:</label>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd/MM/yyyy"
                />
            </div>
            <div>
                <label htmlFor="endDate">End Date:</label>
                <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    dateFormat="dd/MM/yyyy"
                />
            </div>

            {/* a button to confirm the dates */}
            <div>
                <button onClick={handleSubmit}>Confirm</button>
            </div>

            {/* next button to go to the next page and prev button to go to the prev page */}
            <div className="flex justify-between items-center">
                <Link href="/host/step6">
                    <button className="border border-gray-400 rounded-lg p-2 m-2">
                        Prev
                    </button>
                </Link>
                <Link href="/host/step7">
                    <button className="border border-gray-400 rounded-lg p-2 m-2">
                        Register
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Step7;
