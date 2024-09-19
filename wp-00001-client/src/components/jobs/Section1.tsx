//Hooks
import { useContext, useState } from "react";

//EmailJS
import emailjs from "emailjs-com";

//Translation
import { useTranslation } from "react-i18next";

//Context
import { DarkMode } from "../../contexts/DarkMode";

//Assets
import bglm from "../../assets/jobs/bg_1_section_1.png";
import bgdm from "../../assets/jobs/bg_2_section_1.png";

//Icons
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { LuUpload } from "react-icons/lu";

//Functions
import { uploadFileToSupabase } from "../../functions/CvUpload";

//Components
import Success from "../common/Success";
import { CircularProgress } from "@mui/material";
import Unsuccess from "../common/Unsucces";

function Section1() {
  const { t } = useTranslation();
  const [windowHeight] = useState<number>(window.innerHeight - 100);
  const darkModeContext = useContext(DarkMode);
  if (!darkModeContext)
    throw new Error("DarkModeContext must be used within a DarkModeProvider");

  const { darkMode } = darkModeContext;

  // Form data state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [file, setFile] = useState<File | null>(null);

  //Loading state
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //Success
  const [success, setSuccess] = useState<boolean>(false);

  //Unsuccess
  const [unsuccess, setUnsuccess] = useState<boolean>(false);

  // EmailJS credentials
  const serviceID = import.meta.env.VITE_RECACT_APP_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_RECACT_APP_EMAILJS_TEMPLATE_ID;
  const userID = import.meta.env.VITE_RECACT_APP_EMAILJS_USER_ID;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    setFile(selectedFile || null);
  };

  //Drag and drop cv
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const droppedFile = event.dataTransfer.files?.[0];
    setFile(droppedFile || null);
  };

  const handleUpload = async () => {
    if (!file || name == "" || email == "" || position == "") {
      alert("Please, fill the form...");
      return;
    } else {
      setIsLoading(true);

      // Upload the CV to Supabase
      const filePath = `cvs/${file.name}`;
      const bucket = import.meta.env.VITE_REACT_APP_SUPABASE_BUCKET;

      const { error, publicUrl } = await uploadFileToSupabase(
        file,
        bucket,
        filePath
      );

      if (error) {
        setUnsuccess(true);
        return;
      }

      if (publicUrl) {
        // Prepare the email data
        const templateParams = {
          name,
          email,
          position,
          cv_url: publicUrl,
        };

        // Send the email via EmailJS
        emailjs
          .send(serviceID, templateID, templateParams, userID)
          .then(() => {
            setIsLoading(false);
            setSuccess(true);
          })
          .catch((error) => {
            console.error("EmailJS error:", error);
            setUnsuccess(true);
          });
      }
    }
  };

  return (
    <div
      style={{
        height: `${windowHeight}px`,
        backgroundImage: `url(${darkMode ? bgdm : bglm})`,
      }}
      className="bg-center bg-cover flex flex-col justify-center items-center tr"
    >
      <div className="w-full flex h-[20%] justify-center items-center">
        <span
          className={`font-gopherBold md:text-[50px] sm:text-[40px] text-[30px] text-center ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          BLANC_SPACE JOBS
        </span>
      </div>
      <div className="flex justify-center items-start h-[80%] w-full">
        {success ? (
          <div className="bg-black bg-opacity-25 h-[90%] md:w-[70%] w-[90%] backdrop-blur-lg rounded-[50px] flex justify-between items-center md:flex-row flex-col p-8 md:p-0">
            <Success message="success_message" />
          </div>
        ) : unsuccess ? (
          <div className="bg-black bg-opacity-25 h-[90%] md:w-[70%] w-[90%] backdrop-blur-lg rounded-[50px] flex justify-between items-center md:flex-row flex-col p-8 md:p-0">
            <Unsuccess message="unsuccess_info_jobs" />
          </div>
        ) : isLoading ? (
          <div className="bg-black bg-opacity-25 h-[90%] md:w-[70%] w-[90%] backdrop-blur-lg rounded-[50px] flex justify-center items-center md:flex-row flex-col p-8 md:p-0">
            <CircularProgress color="inherit" />
          </div>
        ) : (
          <form
            className="bg-black bg-opacity-25 h-[90%] md:w-[70%] w-[90%] backdrop-blur-lg rounded-[50px] flex justify-between items-center md:flex-row flex-col p-8 md:p-0"
            onSubmit={handleUpload}
          >
            <div className="h-full md:w-[50%] w-full md:p-10 text-white text-[20px] font-hnLight md:pr-5">
              <div className="h-[70%] flex flex-col justify-between items-start w-full">
                <div className="flex flex-col items-start w-full">
                  <span className="-ml-1">{t("name")}</span>
                  <input
                    className="bg-transparent border-[1px] border-white rounded-[10px] py-3 px-5 w-full"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col items-start w-full">
                  <span className="-ml-1">{t("email")}</span>
                  <input
                    className="bg-transparent border-[1px] border-white rounded-[10px] py-3 px-5 w-full"
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col items-start w-full">
                  <span className="-ml-1">{t("position")}</span>

                  <span className="bg-transparent border-[1px] border-white rounded-[10px] py-3 px-5 w-full">
                    <select
                      className="bg-transparent w-full outline-none"
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                    >
                      <option defaultChecked>{t("other")}</option>
                      <option>Frontend Developer</option>
                      <option>Backend Developer</option>
                      <option>Fullstack Developer</option>
                      <option>Mobile Developer</option>
                      <option>Project Manager</option>
                      <option>{t("designer")}</option>
                    </select>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="md:w-[50%] w-full h-full md:p-10 md:pl-5 flex flex-col gap-5 md:gap-0"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <div className="h-[70%] flex flex-col justify-start items-start w-full">
                <span className="-ml-1 text-[20px] font-hnLight text-white">
                  {t("resume")}
                </span>
                <div className="border-[1px] border-white rounded-[10px] w-full h-full flex justify-center items-center relative flex-col gap-4 cursor-pointer">
                  <input
                    type="file"
                    id="file-upload"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={handleFileChange}
                  />
                  <label
                    htmlFor="file-upload"
                    className="flex flex-col items-center cursor-pointer"
                  >
                    <div className="flex justify-center items-center">
                      <span className="md:text-5xl text-white text-3xl">
                        <LuUpload />
                      </span>
                    </div>
                  </label>
                  {file ? (
                    <span className="text-xs text-white font-hnLight">
                      {file.name}
                    </span>
                  ) : null}
                </div>
              </div>
              <div className="w-full h-[30%] flex justify-center items-center text-white">
                <button
                  className="w-full py-5 px-5 bg-black bg-opacity-40 rounded-[10px] flex justify-between items-center group hover:bg-opacity-50 tr"
                  type="submit"
                >
                  <span className="text-xl font-hnLight">{t("send")}</span>
                  <div className="w-[70px] flex justify-end items-center tr h-[2px] group-hover:w-[100px] bg-white">
                    <MdOutlineArrowForwardIos className="text-[20px] -mr-2" />
                  </div>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Section1;
