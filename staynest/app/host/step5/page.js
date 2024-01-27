'use client';
import React from "react";
import { useEffect } from 'react';
import { useState } from 'react';
import Link from 'next/link';

const Step5 = () => {

    //array to hold breakfast wgich have name, price, description, image
    const [breakfast, setBreakfast] = useState([]);
    const [lunch, setLunch] = useState([]);
    const [dinner, setDinner] = useState([]);

    const [breakfastName, setBreakfastName] = useState("breakfast1");
    const [breakfastPrice, setBreakfastPrice] = useState("100");
    const [breakfastDescription, setBreakfastDescription] = useState("breakfast1 is good");
    const [breakfastImage, setBreakfastImage] = useState("");


    const [lunchName, setLunchName] = useState("lunch1");
    const [lunchPrice, setLunchPrice] = useState("100");
    const [lunchDescription, setLunchDescription] = useState("lunch1 is good");
    const [lunchImage, setLunchImage] = useState("");

    const [dinnerName, setDinnerName] = useState("dinner1");
    const [dinnerPrice, setDinnerPrice] = useState("100");
    const [dinnerDescription, setDinnerDescription] = useState("dinner1 is good");
    const [dinnerImage, setDinnerImage] = useState("");

    // flag variable to check which meal is selected
    const [meal, setMeal] = useState("breakfast");
    const [modalState, setModalState] = useState(false);

    useEffect(() => {

        setBreakfast(prevBreakfast => [...prevBreakfast, { name: breakfastName, price: breakfastPrice, description: breakfastDescription, image: breakfastImage }]);
        setLunch(prevLunch => [...prevLunch, { name: lunchName, price: lunchPrice, description: lunchDescription, image: lunchImage }]);
        setDinner(prevDinner => [...prevDinner, { name: dinnerName, price: dinnerPrice, description: dinnerDescription, image: dinnerImage }]);



    }, []);

    const AddMore = (meal) => {
        setMeal(meal);
        setModalState(true);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Get input values from the form
        const newItem = {
            name: event.target.name.value,
            price: event.target.price.value,
            description: event.target.description.value,
            image: event.target.image.value,
        };

        // Update the state by adding the new item
        if (meal === "breakfast") {
            setBreakfast(prevBreakfast => [...prevBreakfast, newItem]);
        }
        else if (meal === "lunch") {
            setLunch(prevLunch => [...prevLunch, newItem]);
        }
        else {
            setDinner(prevDinner => [...prevDinner, newItem]);
        }


    };





    return (
        <div>

            <div className="container">
                {/* breakfast name price description image  show row wise */}
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-2xl font-bold justify-center ">breakfast</h1>
                    </div>

                    {/* make gaps even */}
                    <div className="row flex flex-row gap-4 ">
                        <div className="col-3">
                            <h3>Name</h3>
                        </div>
                        <div className="col-3">
                            <h3>Price</h3>
                        </div>
                        <div className="col-3">
                            <h3>Description</h3>
                        </div>
                        <div className="col-3">
                            <h3>Image</h3>
                        </div>
                    </div>


                    {/* show  items from breakfast array  by mapping */}

                    {breakfast.map((item, index) => (
                        <div className="row flex flex-row gap-4 ">
                            <div className="col-3">
                                <h3>{item.name}</h3>
                            </div>
                            <div className="col-3">
                                <h3>{item.price}</h3>
                            </div>
                            <div className="col-3">
                                <h3>{item.description}</h3>
                            </div>
                            <div className="col-3">
                                <h3>{item.image}</h3>
                            </div>
                        </div>
                    ))}

                    {/* add more button to pop up modal of add more */}
                    <div className="col-12">
                        {/* visible if modalstate is false */}
                        {!modalState && (
                            <button className="btn btn-primary" onClick={() => AddMore("breakfast")}>Add More</button>
                        )}
                    </div>

                    {/* modal for add more */}
                    {modalState && (
                        <div className="modal">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <form onSubmit={handleFormSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" className="form-control" id="name" placeholder="Enter name" name="name" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="price">Price</label>
                                            <input type="text" className="form-control" id="price" placeholder="Enter price" name="price" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="description">Description</label>
                                            <input type="text" className="form-control" id="description" placeholder="Enter description" name="description" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="image">Image</label>
                                            <input type="text" className="form-control" id="image" placeholder="Enter image" name="image" />
                                        </div>

                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" onClick={() => setModalState(false)}>Close</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* lunch name price description image  show row wise */}
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-2xl font-bold justify-center ">lunch</h1>
                    </div>

                    {/* make gaps even */}
                    <div className="row flex flex-row gap-4 ">
                        <div className="col-3">
                            <h3>Name</h3>
                        </div>
                        <div className="col-3">
                            <h3>Price</h3>
                        </div>
                        <div className="col-3">
                            <h3>Description</h3>
                        </div>
                        <div className="col-3">
                            <h3>Image</h3>
                        </div>
                    </div>
                    {/*  show  items from lunch array  by mapping */}
                    {lunch.map((item, index) => (
                        <div className="row flex flex-row gap-4 ">
                            <div className="col-3">
                                <h3>{item.name}</h3>
                            </div>
                            <div className="col-3">
                                <h3>{item.price}</h3>
                            </div>
                            <div className="col-3">
                                <h3>{item.description}</h3>
                            </div>
                            <div className="col-3">
                                <h3>{item.image}</h3>
                            </div>
                        </div>
                    ))}

                    {/* add more button to pop up modal of add more */}

                    <div className="col-12">
                        {/* visible if modalstate is false */}
                        {!modalState && (
                            <button className="btn btn-primary" onClick={() => AddMore("lunch")}>Add More</button>
                        )}
                    </div>

                </div>


                {/* dinner name price description image  show row wise */}
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-2xl font-bold justify-center ">dinner</h1>
                    </div>

                    {/* make gaps even */}
                    <div className="row flex flex-row gap-4 ">
                        <div className="col-3">
                            <h3>Name</h3>
                        </div>
                        <div className="col-3">
                            <h3>Price</h3>
                        </div>
                        <div className="col-3">
                            <h3>Description</h3>
                        </div>
                        <div className="col-3">
                            <h3>Image</h3>
                        </div>
                    </div>

                    {/* show  items from dinner array  by mapping */}
                    {dinner.map((item, index) => (
                        <div className="row flex flex-row gap-4 ">
                            <div className="col-3">
                                <h3>{item.name}</h3>
                            </div>
                            <div className="col-3">
                                <h3>{item.price}</h3>
                            </div>
                            <div className="col-3">
                                <h3>{item.description}</h3>
                            </div>
                            <div className="col-3">
                                <h3>{item.image}</h3>
                            </div>
                        </div>
                    ))}

                    {/* add more button to pop up modal of add more */}

                    <div className="col-12">
                        {/* visible if modalstate is false */}
                        {!modalState && (
                            <button className="btn btn-primary" onClick={() => AddMore("dinner")}>Add More</button>
                        )}
                    </div>
                </div>











            </div>

            {/* next button to go to the next page and prev button to go to the prev page */}
            <div className="flex justify-between items-center">
                <Link href="/host/step4">
                    <button className="border border-gray-400 rounded-lg p-2 m-2">
                        Prev
                    </button>
                </Link>
                <Link href="/host/step6">
                    <button className="border border-gray-400 rounded-lg p-2 m-2">
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Step5;