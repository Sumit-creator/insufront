import { useSelector } from "react-redux";
import { selectFormNumber } from "../features/formSelector";
import './form.css'
const options = [
  {
    name: "Step 1: Type of funeral",
  },
  {
    name: "Before the service",
  },
  {
    name: "The service",
  },
  {
    name: "The wake up and other wishes",
  },
  {
    name: "Email results",
  },
];

const Tracker = () => {
  const formNumber = useSelector(selectFormNumber);

  return (
    <div className="">
      {options.map((option, index) => {
        if (index < formNumber) {
          return (
            <div className="form_lef">
              <div className="form_lef_n text-black border bg-[#58FF00]">
                {index + 1}
              </div>
              <div className="form_lef_t text-[#58FF00]">
                <div>{option.name}</div>
                <div>Completed</div>
              </div>
            </div>
          );
        } else if (index == formNumber) {
          return (
            <div className="form_lef">
              <div
                className="form_lef_n text-black "
                style={{
                  background:
                    "linear-gradient(92.8deg, #FFA33C 2.8%, #DC6C05 99.98%)",
                }}
              >
                {index + 1}
              </div>
              <div className="form_lef_t text-[#FFA33C]">
                <div>{option.name}</div>
                <div>In progress</div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="form_lef">
              <div className="form_lef_n text-[#BCB8C8] border border-white">
                {index + 1}
              </div>
              <div className="form_lef_t text-[#BCB8C8]">
                <div>{option.name}</div>
                <div>Incomplete</div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Tracker;
