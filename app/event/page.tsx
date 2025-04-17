import React from "react";

import type { Metadata } from "next";
import EventComponent from "@components/event/Event";

export const metadata: Metadata = {
  title: "Admin | Event",
  description: "Event",
};

const EventPage: React.FC = () => {
  return (
    <EventComponent />
  );
};

export default EventPage;
