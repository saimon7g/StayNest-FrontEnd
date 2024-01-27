'use client';
import React from "react";
import { useState } from "react";
// use nxt/link to link to other pages
import Link from 'next/link';


const Step6 = () => {

    const [state, setState] = useState({
        allow_paying_guests: false,
        allow_pets: false,
        allow_smoking: false,
        allow_children: false,
        allow_infants: false,
        allow_events: false,

        mealPrice: 0,
        mealDescription: '',
    });



    return (
        <div>
            {/* do you allow paying guest */}
            <div>
                <h1 className="text-2xl font-bold">Do you allow paying guests?</h1>
                {/* two option yes or no */}
                <div>
                    <button className="border border-gray-400 rounded-lg p-2 m-2" onClick={() => setState({ ...state, allow_paying_guests: true })}>Yes</button>
                    <button className="border border-gray-400 rounded-lg p-2 m-2" onClick={() => setState({ ...state, allow_paying_guests: false })}>No</button>
                </div>
            </div>

            {/* if allow paying guest the give meal price and description */}
            {state.allow_paying_guests ? (
                <div>
                    <h1 className="text-2xl font-bold">Meal price</h1>
                    <input type="number" value={state.mealPrice} onChange={(e) => setState({ ...state, mealPrice: e.target.value })} />
                    <h1 className="text-2xl font-bold">Meal description</h1>
                    <textarea value={state.mealDescription} onChange={(e) => setState({ ...state, mealDescription: e.target.value })} />
                </div>
            ) : null}

            {/* next button to go to next page  and prev button to go to prev page */}
            <div className="flex justify-between items-center">
                <Link href="/host/step5">
                    <button className="border border-gray-400 rounded-lg p-2 m-2">Prev</button>
                </Link>
                <Link href="/host/step7">
                    <button className="border border-gray-400 rounded-lg p-2 m-2">Next</button>
                </Link>
            </div>
        </div>
    );

















}

export default Step6;