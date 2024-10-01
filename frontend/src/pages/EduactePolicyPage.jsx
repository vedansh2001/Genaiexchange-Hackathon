import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AiModel from "../components/AiModel";
const EduactePolicyPage = () => {
  return (
    <div>
      <Navbar />
      <div>Understand Policy</div>
      <div>
        <ul>
          <li>
            <button>Term Life Insurance Policy</button>
          </li>
          <li>
            <button>Health Insurance Policy</button>
          </li>
        </ul>
      </div>
      <AiModel />
      <Footer />
    </div>
  );
  
};
export default EduactePolicyPage;
