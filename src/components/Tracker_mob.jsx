import { useSelector } from "react-redux";
import { selectFormNumber } from "../features/formSelector";
import '../screens/Home.css'

const options = [
  {
    name: "Step 1: Type of funeral",
  },
  {
    name: "Step 2: Before the service",
  },
  {
    name: "Step 3: The service",
  },
  {
    name: "Step 4: The wake up and other wishes",
  },
  {
    name: "Step 5: Email results",
  },
];

const Tracker_mob = () => {
  const formNumber = useSelector(selectFormNumber);

  return (
    <div className="">
      {options.map((option, index) => {
        if (index == formNumber) {
          return (
            <div className="form_mo_l">
              <div
                className="rounded-full text-black text-center h-10 w-10 flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(92.8deg, #FFA33C 2.8%, #DC6C05 99.98%)",
                }}
              >
                {index + 1}
              </div>
              <div className="ml-6 text-left text-[#FFA33C]">
                <div>{option.name}</div>
                <div>In progress</div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Tracker_mob;
