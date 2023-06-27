import React, { useState } from "react";
import { faCalendar, faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import tw from "twin.macro";
import { Marginer } from "../marginer";
import { Button } from "../button";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    justify-center
    items-center
    rounded-md
    bg-white
    pt-1
    pb-1
    pr-2
    pl-2
    md:pt-2
    md:pb-2
    md:pl-9
    md:pr-9
  `};
`;

const ItemContainer = styled.div`
  ${tw`flex relative`};
`;

const Icon = styled.span`
  ${tw`
    text-red-500
      fill-current
      text-xs
      md:text-base
      mr-1
      md:mr-3
  `};
`;

const Name = styled.span`
  ${tw`
  text-gray-600
  text-xs
  md:text-sm
  cursor-pointer
  `};
`;

const LineSeperator = styled.div`
  width: 2px;
  height: 45%;
  ${tw`
  bg-gray-300
   mr-2
   ml-2
   md:ml-5
   md:mr-5

`};
`;

const DateCalendar = styled(Calendar)`
  position: absolute;
  max-width: none;
  user-select: none;
  top: 3.5em;
  left: -2em;
`;

export function BookCard() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);

  const [returntDate, setReturnDate] = useState<Date>(new Date());
  const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);

  console.log("Value: ", startDate);

  const toggleStartDateCalendar = () => {
    setStartCalendarOpen(!isStartCalendarOpen);
  };
  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleStartDateCalendar}>Pick Up Date</Name>
        {isStartCalendarOpen && (
          <DateCalendar value={startDate} onChange={setStartDate as any} />
        )}
      </ItemContainer>
      <LineSeperator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name>Return Date</Name>
      </ItemContainer>
      <Marginer direction="horizontal" margin="2em" />
      <Button text="Book Your Ride"></Button>
    </CardContainer>
  );
}
