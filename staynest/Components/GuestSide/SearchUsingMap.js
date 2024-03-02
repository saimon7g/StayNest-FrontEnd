'use client';

import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import Map from '../HostSide/Map';
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';



const SearchUsingMap = ({ setLatlng, isMapVisible, setIsMapVisible }) => {

    return (
        <>
            <Modal show={isMapVisible} size="lg" popup onClose={() => setIsMapVisible(false)}>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Search using map</h3>
                        <Map setLatlng={setLatlng} />
                        <div className="flex justify-center">
                            <Button onClick={() => setIsMapVisible(false)}>Close</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            <div className="flex justify-center">
                <Button onClick={() => setIsMapVisible(true)}>Search using map</Button>
            </div>
        </>

    );
}
export default SearchUsingMap;