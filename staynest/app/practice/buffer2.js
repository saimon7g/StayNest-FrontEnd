// Step1.js
function Step1({ formData, setFormData }) {
    // Input fields and handlers for the first step of the form
  }
  
  // Step2.js
  function Step2({ formData, setFormData }) {
    // Input fields and handlers for the second step of the form
  }
  
  // MultiPageForm.js
  function MultiPageForm() {
    const [formData, setFormData] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
  
    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);
  
    return (
      <div>
        {currentPage === 1 && <Step1 formData={formData} setFormData={setFormData} />}
        {currentPage === 2 && <Step2 formData={formData} setFormData={setFormData} />}
        
        {currentPage > 1 && <button onClick={prevPage}>Previous</button>}
        {currentPage < 2 && <button onClick={nextPage}>Next</button>}
      </div>
    );
  }
  
  export default MultiPageForm;
  