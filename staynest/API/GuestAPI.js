import { data } from '@maptiler/sdk';
import axios from './axios'; // Import the configured Axios instance



export async function getHostByID(hostId) {
    console.log("single host get");
    try {
        // const response = await fetch(`auth/host_profile/${hostId}/`); // Fetch the data
        const response = await axios.get(`auth/host_profile/${hostId}/`);
        if (typeof response.data === 'string') {
            // If response.data is a string, parse it to JSON
            return JSON.parse(response.data);
        }
        else {
            // If response.data is already JSON, return it directly
            return response.data;
        }

    }
    catch (error) {
        console.log(error);
    }
}

export async function getPropertiesbyType(type) {
    console.log("properties by type");
    try {
const response = await axios.put(`host/api/properties/bytype/`, {type: type});
        console.log(response.data);
        if (typeof response.data === 'string') {
            // If response.data is a string, parse it to JSON
            return JSON.parse(response.data);
        } else {
            // If response.data is already JSON, return it directly
            return response.data;
        }
    }
    catch (error) {
        console.log(error);
    }
}

export async function getServerSideProps() {
    // const response = await fetch('your-api-endpoint');
    // const data = await response.json();
    const data = {
        data: `This is the data from the server`,
    };

    // Pass the data to GuestHome as props

    return {
        props: {
            initialData: data,
        },
    };
}

export async function Step4GET(registrationId) {
    console.log("step4get");
    try {
       
        const response = await axios.get(`host/api/property_registration/step4/${registrationId}/`);
        console.log(response.data);
        return response;
        
    }
    catch (error) {
        console.error(error);
    }
}

export async function  getMealOption(registration_id) {
  
    try {
        const response = await axios.get(`host/api/property_registration/step5/${registration_id}/`);
        
        // console.log('mealoption from API         ',response);
        // converte the response.data to json
        if (typeof response.data === 'string') {
            // If response.data is a string, parse it to JSON
            return JSON.parse(response.data);
        } else {
            // If response.data is already JSON, return it directly
            return response.data;
        }

        
        
    }
    catch (error) {
        console.log(error);
    }
}

export async function getPropertyByIDd(property_id) {
    console.log("single property get");
    try {

        const response = await axios.get(`host/api/property/${property_id}/`);
        
       
        // const result = await response.json();
        console.log(response.data);
        if(typeof response.data === 'string'){
        
        response.data=JSON.parse(response.data);
        
       
        }
        const response2 = await getHostByID(response.data['host'].host_id)
       
        console.log(response2)
        response.data['host']=response2
      

        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}
export async function getProperties(data) {
    console.log(data)
    try {
        console.log('getProperties')
        console.log(data)
        const response = await axios.put(`host/api/properties/search/`, data, {
           
        });
        // console.log(response);
        return response.data;

    }
    catch (error) {
        console.error(error);
    }
}


export async function reserveProperty(data) {
    try {
        
        const response = await axios.post("guest/api/reserve/", data );
        console.log(response)
        if (response.status === 201) {
            if (typeof response.data === 'string') {
                response.data = JSON.parse(response.data);
                response.data['status'] = response.status;
                return response.data;
            }
        }
            else if(response.status === 401)
            {
                return{"status":401,"message":"Please login to continue"}
            }
            else if(response.status === 200)
            {
                return({"status":200,"message":"This property is already booked for the selected dates. Please try anoyher"})
            }
            else
            {
                return{"status":400,"message":"Booking Failed. Please try again later."}    
            }


        
        
        // console.log(response);
        return response;

    }
    catch (error) {
        console.error(error);
        if(response.status)
        return{"error_status":response.status,"message":"what1"}
        else 
        return{"error_status":408,"message":"Request Timeout"}

    }
}


export async function getReservation(reservationId) {
    try {
        const response = await axios.get(`guest/api/reservation/${reservationId}`);
        let data = response.data;
        if(typeof data === 'string'){
            data = JSON.parse(data);
        }
        const property_response= await axios.get(`host/api/dashboard/property/${data.property_id}/`);
        let property=property_response.data;
        if (typeof property === 'string'){
            property= JSON.parse(property_response.data);
        }
        data['property']=property;

        console.log(data);
        return response.data;

    }
    catch (error) {
        console.error(error);
    }
}