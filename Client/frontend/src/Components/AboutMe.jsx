import React from 'react';
import { Card, Dropdown, DropdownItem,Button } from 'flowbite-react';
import {  FaLinkedin, FaTwitter, FaInstagram,FaGithub,FaWhatsapp } from 'react-icons/fa';
import avater from "../assets/profile-img.jpeg";
import {Link} from "react-router-dom"

function AboutMe() {
  return (
    <div>
        <div className="fixed top-4 left-0">
       <Link to="/">
         <Button outline gradientDuoTone="purpleToBlue">
           Home
         </Button>
       </Link>
       
     </div>
      <Card className="max-w-sm mx-auto my-32 ">
        <div className="flex justify-end px-4 pt-4">
          <Dropdown inline label="">
       
            <DropdownItem>
              <a
                href="https://www.linkedin.com/in/haileab-shimels/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <FaLinkedin className="inline mr-2" />
                LinkedIn
              </a>
            </DropdownItem>

            <DropdownItem>
              <a
                href="https://twitter.com/haileab_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <FaTwitter className="inline mr-2" />
                Twitter
              </a>
            </DropdownItem>
           
             <DropdownItem>
              <a href='https://github.com/haile-pro'
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                <FaGithub className="inline mr-2" />
                Github
              </a>
            </DropdownItem>
            
            <DropdownItem>
                       <a href=" https://wa.me/0913901952"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                       >
                         <FaWhatsapp className="inline mr-2" />
                         Whatsapp
                       </a>

          </DropdownItem>
          </Dropdown>
        </div>
        <div className="flex flex-col items-center pb-10">
          <img
            alt="Profile image"
            src={avater}
            className="mb-3 h-24 w-24 rounded-full shadow-lg"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Haileab Shimels</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">Full-Stack Developer</span>
          <div className="flex space-x-3 mt-4 lg:mt-6">
          Full Stack Developer with a strong track record of success in building and maintaining web applications. Expertise in MERN stack development and React. Proven ability to work independently and as part of a team to deliver high-quality results.

            
          </div>
        </div>
      </Card>
    </div>
  )
}

export default AboutMe;