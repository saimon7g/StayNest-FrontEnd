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