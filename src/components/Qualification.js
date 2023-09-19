import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";

import Educations from "./Education";
import Works from "./Work";

const StyledTabs = styled(Tabs)`
  overflow: auto;
`;

const StyledTab = styled(Tab)`
  flex: 1;
  padding: 8px;
  text-align: center;
  background-color: #fffff;
  color: #3258e8;
  cursor: pointer;
  border: none;
  outline: none;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #ddd;
  }
`;

function Qualification() {
  return (
    <section class="py-16 font-poppins" id="qualifications">
      <div class="justify-center flex-1 max-w-5xl px-4 py-4 mx-auto lg:py-10 md:px-7">
        <div class="max-w-xl mx-auto">
          <div class="text-center ">
            <div class="relative flex flex-col items-center">
              <div class="absolute hidden md:block -top-14 left-0 text-[120px] text-gray-400 font-bold opacity-10">
                Qualification
              </div>
              <h1 class="text-5xl font-bold ">
                {" "}
                My <span class="text-purple-600"> Qualification</span>{" "}
              </h1>
            </div>
            <p class="mb-16 text-base text-center text-gray-600">
              Chronology of My Personal Journey
            </p>
          </div>
        </div>

        <StyledTabs>
          <div className="flex !items-center sm:justify-between !justify-center flex-wrap ">
            <div className="center-tabs-container">
              {" "}
              <TabList className="flex overflow-auto bg-secondary rounded-lg p-2">
                <StyledTab className="!rounded-lg cursor-pointer font-bold sm:text-[16px] text-[14px]">
                  Education
                </StyledTab>
                <StyledTab className="!rounded-lg cursor-pointer font-bold sm:text-[16px] text-[14px]">
                  Work
                </StyledTab>
              </TabList>
            </div>
          </div>
          <div>
            <TabPanel>
              <Educations />
            </TabPanel>
            <TabPanel>
              <Works />
            </TabPanel>
          </div>
        </StyledTabs>
      </div>
    </section>
  );
}

export default Qualification;
