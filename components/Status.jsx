"use client";

import { useState } from "react";
import LeagueTable from "./LeagueTable";

const Status = ({ matchesList, matchesListFinished }) => {
  const [statusMatch, setStatusMatch] = useState("TODAY");

  return (
    <div>
      <div className="flex space-x-4 mb-2 md:mb-4">
        <button
          onClick={() => setStatusMatch("TODAY")}
          className={`px-2 py-1 text-primary text-xs md:text-sm rounded-md ${
            statusMatch === "TODAY"
              ? "bg-green-400 font-semibold"
              : "bg-slate-500 font-regular"
          }`}
        >
          today
        </button>
        <button
          onClick={() => setStatusMatch("FINISHED")}
          className={`px-2 py-1 text-primary text-sm rounded-md ${
            statusMatch === "FINISHED"
              ? "bg-green-400 font-semibold"
              : "bg-slate-500 font-regular"
          }`}
        >
          finished
        </button>
      </div>

      <div className="w-full h-[100vh] overflow-y-scroll scroll-smooth scrollbar-hide">
        {statusMatch === "TODAY"
          ? matchesList?.map((data) => (
              <div key={data.id}>
                {data?.status === "TIMED" && <LeagueTable data={data} />}
              </div>
            ))
          : null}

        {statusMatch === "FINISHED"
          ? matchesList?.map((data) => (
              <div key={data.id}>
                {data?.status === "FINISHED" && <LeagueTable data={data} />}
              </div>
            ))
          : null}
        {statusMatch === "FINISHED"
          ? matchesListFinished?.map((data) => (
              <div key={data.id}>
                <LeagueTable data={data} />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Status;
